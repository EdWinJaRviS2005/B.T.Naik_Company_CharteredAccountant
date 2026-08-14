# B.T. Naik & Company — Monorepo

Chartered Accountancy firm website and client portal for B.T. Naik & Company.

## Directory Structure

```
.
├── frontend/             # Next.js 16 Web Application (UI, Client Portal, SSR)
│   ├── src/
│   │   ├── app/          # App router pages (Home, Services, Portal, Admin)
│   │   ├── components/   # UI components (Navbar, Footer, ScrollReveal)
│   │   ├── context/      # AuthContext
│   │   ├── data/         # Statutory rate data, services, team info
│   │   └── lib/          # Firebase & Supabase client SDKs
│   └── package.json
│
├── backend/              # Node.js / Express API Service & Security Configurations
│   ├── src/
│   │   └── server.js     # Express API server (Contact form, Rate endpoints)
│   ├── firebase-rules.ts # Security rules for Firestore & Supabase Storage
│   └── package.json
│
├── vercel.json           # Vercel deployment configuration
└── package.json          # Monorepo root scripts
```

## Running the Application

### Frontend (Next.js)
```bash
cd frontend
npm run dev
```

### Backend (Node/Express)
```bash
cd backend
npm install
npm run dev
```
