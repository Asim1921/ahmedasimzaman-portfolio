// src/app/api/resume/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // Path to your resume PDF in the public folder
    const resumePath = path.join(process.cwd(), 'public', 'resume', 'Ahmed_Asim_Zaman_Resume.pdf');
    
    // Check if the resume file exists
    if (!fs.existsSync(resumePath)) {
      console.error('Resume file not found at:', resumePath);
      return new NextResponse('Resume not found', { status: 404 });
    }

    // Read the PDF file
    const resumeBuffer = fs.readFileSync(resumePath);
    
    // Get client information for analytics (optional)
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const referer = request.headers.get('referer') || 'Direct';
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'Unknown';

    // Log download analytics (you can store this in a database later)
    console.log('Resume downloaded:', {
      timestamp: new Date().toISOString(),
      ip: ip,
      userAgent: userAgent,
      referer: referer
    });

    // Create response with proper headers
    const response = new NextResponse(resumeBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Ahmed_Asim_Zaman_Resume.pdf"',
        'Content-Length': resumeBuffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
        'X-Download-Success': 'true'
      },
    });

    return response;

  } catch (error) {
    console.error('Error serving resume:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}