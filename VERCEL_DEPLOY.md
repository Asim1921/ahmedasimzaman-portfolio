# Vercel Deployment Guide

## ✅ Your project is now ready for Vercel!

### Quick Deploy (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "New Project"**
3. **Import your repository**: `Asim1921/ahmedasimzaman-portfolio`
4. **Vercel will auto-detect Next.js** - no configuration needed!
5. **Add Environment Variables** (if using contact form):
   - `SMTP_USER` - Your Gmail address
   - `SMTP_PASS` - Your Gmail App Password
   - `CONTACT_EMAIL` - Email to receive contact form submissions
6. **Click "Deploy"**

### Environment Variables Setup

For the contact form to work, add these in Vercel Dashboard → Project Settings → Environment Variables:

```
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL=your-email@gmail.com
```

**To get Gmail App Password:**
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate a new app password for "Mail"
5. Use that password as `SMTP_PASS`

### Deploy via CLI (Alternative)

If you prefer using the CLI:

```bash
npm i -g vercel
vercel login
vercel
```

### Post-Deployment

After deployment:
- ✅ Your site will be live at `https://your-project.vercel.app`
- ✅ You can add a custom domain in Vercel Dashboard
- ✅ Automatic deployments on every git push to main branch
- ✅ Preview deployments for pull requests

### Configuration Files

- ✅ `vercel.json` - Vercel configuration (already created)
- ✅ `next.config.js` - Next.js configuration (optimized for Vercel)
- ✅ Build settings auto-detected

### Troubleshooting

If you encounter issues:
1. Check Vercel build logs in the dashboard
2. Ensure all environment variables are set
3. Verify Node.js version (should be 18+)
4. Check that `package.json` has correct build scripts

---

**Your project is production-ready! 🚀**

