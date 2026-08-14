// Firestore Security Rules for B.T. Naik & Company Client Portal
// Copy and paste these into your Firebase Console -> Firestore -> Rules tab.

/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Documents Collection — client uploaded documents metadata
    match /documents/{documentId} {
      // Clients can only read their own documents
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;

      // Clients can create documents only for themselves
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;

      // No client can update or delete document records
      allow update, delete: if false;
    }

    // Admin override: allow admin to read all documents
    // In production, use Custom Claims (request.auth.token.admin == true)
    // For the prototype, the admin check is client-side only.

    // Default: deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
*/

// Cloud Storage Security Rules
// Copy and paste these into your Firebase Console -> Storage -> Rules tab.

/*
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Client uploads: each user can only write to their own folder
    match /clients/{userId}/{allPaths=**} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null
                   && request.auth.uid == userId
                   && request.resource.size < 10 * 1024 * 1024;  // 10MB limit
    }

    // Default deny
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
*/
