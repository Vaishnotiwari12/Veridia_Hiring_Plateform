# 🚀 Frontend Deployment Guide - Vercel

## 📋 Frontend Deployment Overview

This guide will help you deploy the React frontend to Vercel. The backend will be deployed separately to Render.

## 🛠️ Prerequisites

1. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
2. **Vercel CLI** (optional) - Install with `npm i -g vercel`

## 📁 Frontend Deployment

### Option A: Using Vercel CLI

```bash
# 1. Install Vercel CLI (if not already installed)
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy from client directory
cd client
vercel --prod
```

### Option B: Using Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard:**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click **"New Project"**

2. **Import GitHub Repository:**
   - Import: `Vaishnotiwari12/Veridia_Hiring_Plateform`
   - Framework Preset: `Vite`

3. **Configure Project Settings:**
   - **Project Name:** `veridia-hiring-platform`
   - **Root Directory:** `./client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

## 🔧 Environment Variables for Frontend

In your Vercel project settings, add these environment variables:

```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
VITE_API_BASE_URL=https://your-render-backend-url.onrender.com/api
```

### How to Get Your Clerk Keys:

1. **Go to Clerk Dashboard:** [clerk.com](https://clerk.com)
2. **Select your project**
3. **Navigate to API Keys**
4. **Copy the Publishable Key** (starts with `pk_test_` or `pk_live_`)
5. **Add to Vercel environment variables**

## 🌐 Access Your Deployed Frontend

After deployment, your frontend will be available at:
- **Frontend URL:** `https://your-project-name.vercel.app`
- **Admin Dashboard:** `https://your-project-name.vercel.app/admin2`
- **Candidate Portal:** `https://your-project-name.vercel.app/candidate2`

## 🚀 Backend Deployment (Render)

For backend deployment, visit [render.com](https://render.com) and:

1. **Create New Web Service**
2. **Connect to GitHub repository**
3. **Root Directory:** `./server`
4. **Runtime:** `Node`
5. **Build Command:** `npm install`
6. **Start Command:** `npm run dev`

## 🔄 Connecting Frontend to Backend

1. **Get your Render backend URL** (e.g., `https://your-backend.onrender.com`)
2. **Update frontend environment variable:**
   ```
   VITE_API_BASE_URL=https://your-backend.onrender.com/api
   ```
3. **Redeploy frontend** if needed

## 📊 Deployment Checklist

- [ ] Frontend deployed to Vercel successfully
- [ ] Environment variables configured
- [ ] Backend deployed to Render
- [ ] API base URL updated in frontend
- [ ] Authentication working
- [ ] All routes functional
- [ ] Responsive design verified

## 🐛 Troubleshooting Frontend

### Common Issues:

1. **Build Failures:**
   - Check Node.js version (should be 18+)
   - Verify all dependencies installed
   - Check environment variables

2. **Authentication Issues:**
   - Verify Clerk publishable key
   - Check redirect URIs in Clerk dashboard
   - Ensure environment variables are set

3. **API Connection Issues:**
   - Verify backend URL in VITE_API_BASE_URL
   - Check CORS settings on backend
   - Test API endpoints directly

## 📞 Support

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel Help:** [vercel.com/help](https://vercel.com/help)

---

**🎉 Your frontend is now deployed on Vercel!**

Connect it to your Render backend and your full application will be live! 🚀
