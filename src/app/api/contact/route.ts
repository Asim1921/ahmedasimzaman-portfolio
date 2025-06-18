// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Rate limiting store (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per window

  const current = rateLimit.get(ip);
  
  if (!current || now > current.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
}

// Email transporter setup
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again later.' 
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    
    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // Check for required environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing email configuration');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is not configured. Please try again later.',
        },
        { status: 503 }
      );
    }

    // Create email transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('Email transporter verification failed:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is temporarily unavailable. Please try again later.',
        },
        { status: 503 }
      );
    }

    // Email to you (notification)
    const notificationEmailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
            .content { padding: 30px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
            .info-item { background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #8b5cf6; }
            .info-label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .info-value { color: #1f2937; font-size: 16px; }
            .message-box { background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0; }
            .message-label { font-weight: 600; color: #374151; margin-bottom: 10px; }
            .message-content { color: #1f2937; line-height: 1.6; }
            .footer { background: #f9fafb; padding: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
            .metadata { margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Portfolio Contact!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone is interested in your work</p>
            </div>
            
            <div class="content">
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Name</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email</div>
                  <div class="info-value">${email}</div>
                </div>
              </div>
              
              <div class="info-item" style="margin: 20px 0;">
                <div class="info-label">Subject</div>
                <div class="info-value">${subject}</div>
              </div>
              
              <div class="message-box">
                <div class="message-label">Message:</div>
                <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="metadata">
                <p><strong>📧 Quick Reply:</strong> <a href="mailto:${email}" style="color: #8b5cf6; text-decoration: none;">${email}</a></p>
                <p><strong>🕐 Received:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>🌐 IP:</strong> ${ip}</p>
                <p><strong>🔍 User Agent:</strong> ${request.headers.get('user-agent')?.substring(0, 100)}...</p>
              </div>
            </div>
            
            <div class="footer">
              <p>💼 This message was sent from your portfolio contact form at ahmedasimzaman.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply email to sender
    const autoReplyOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Ahmed Asim Zaman! 🚀',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Your Message</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
            .content { padding: 30px; }
            .highlight-box { background: linear-gradient(135deg, #f8fafc, #e0e7ff); padding: 20px; border-radius: 12px; border-left: 4px solid #8b5cf6; margin: 20px 0; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 10px 5px; }
            .footer { background: #f9fafb; padding: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
            .social-links { text-align: center; margin: 20px 0; }
            .social-links a { display: inline-block; margin: 0 10px; color: #8b5cf6; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thanks for reaching out! 🎉</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Your message has been received</p>
            </div>
            
            <div class="content">
              <p>Hi <strong>${name}</strong>,</p>
              
              <p>Thank you for your message about "<strong>${subject}</strong>". I've received your inquiry and will get back to you as soon as possible, typically within 24-48 hours.</p>
              
              <div class="highlight-box">
                <h3 style="margin-top: 0; color: #4c1d95;">📝 Your Message:</h3>
                <p style="font-style: italic; color: #1f2937; margin-bottom: 0;">"${message}"</p>
              </div>
              
              <p>In the meantime, feel free to:</p>
              
              <div style="text-align: center; margin: 25px 0;">
                <a href="https://ahmedasimzaman.com/#projects" class="cta-button">🚀 View My Projects</a>
                <a href="https://ahmedasimzaman.com/api/resume" class="cta-button">📄 Download Resume</a>
              </div>
              
              <div class="social-links">
                <p><strong>Connect with me:</strong></p>
                <a href="https://www.linkedin.com/in/asim-zaman-869053175/">💼 LinkedIn</a>
                <a href="https://github.com/Asim1921">💻 GitHub</a>
              </div>
              
              <p>Best regards,<br>
              <strong>Ahmed Asim Zaman</strong><br>
              <em>Full Stack Developer</em></p>
            </div>
            
            <div class="footer">
              <p>🔒 This is an automated response. Please do not reply to this email.</p>
              <p>📧 If urgent, contact me directly at ahmed.asim.zaman@gmail.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationEmailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    // Log successful contact for analytics
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject,
      ip,
      success: true
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon! 🚀',
    });

  } catch (error) {
    console.error('Contact form error:', error);

    // Handle different types of errors
    if (error instanceof Error) {
      // Handle known error types
      if ((error as any).code === 'EAUTH') {
        return NextResponse.json(
          {
            success: false,
            error: 'Email authentication failed. Please try again later.',
          },
          { status: 503 }
        );
      }

      if ((error as any).code === 'ECONNECTION') {
        return NextResponse.json(
          {
            success: false,
            error: 'Cannot connect to email server. Please try again later.',
          },
          { status: 503 }
        );
      }
    }

    // Generic error
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Handle preflight OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}