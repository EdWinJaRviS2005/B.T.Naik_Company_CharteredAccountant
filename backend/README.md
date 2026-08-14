# B.T. Naik & Company — Backend API Service

This directory contains the backend server, database configuration, and security rules for B.T. Naik & Company.

## Directory Structure

```
backend/
├── src/
│   └── server.js         # Node/Express API server
├── firebase-rules.ts     # Firestore Database & Supabase Storage security rules reference
├── package.json          # Backend Node dependencies & scripts
└── .env.example          # Environment variable template
```

## Running Locally

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5001`.
