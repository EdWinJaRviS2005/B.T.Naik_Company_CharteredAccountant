'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/lib/firebase/clientApp';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { FaFileAlt, FaDownload, FaLock } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface DocumentRecord {
  id: string;
  userId: string;
  userEmail: string;
  filename: string;
  url: string;
  createdAt: any;
  size: number;
}

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  const [documents, setDocuments] = useState<DocumentRecord[]>([]);
  const [loadingDocs, setLoadingDocs] = useState(true);
  const [error, setError] = useState('');

  // Very basic RBAC check for the prototype phase.
  // In a real production app, this should be enforced by Custom Claims and Firestore Security Rules.
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/portal/login');
      } else {
        // Hardcoded admin email for prototype demo
        if (user.email === 'admin@btnaik.com') {
          fetchAllDocuments();
        } else {
          setError('Access Denied. You do not have administrative privileges.');
          setLoadingDocs(false);
        }
      }
    }
  }, [user, loading, router]);

  const fetchAllDocuments = async () => {
    try {
      const q = query(collection(db, 'documents'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const docsData: DocumentRecord[] = [];
      querySnapshot.forEach((doc) => {
        docsData.push({ id: doc.id, ...doc.data() } as DocumentRecord);
      });
      setDocuments(docsData);
    } catch (err: any) {
      console.error("Error fetching all documents:", err);
      setError("Failed to load documents. Ensure Firestore security rules allow admin access.");
    } finally {
      setLoadingDocs(false);
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading) {
    return <div className="p-10 text-center">Loading admin dashboard...</div>;
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <FaLock className="text-red-500 text-5xl mb-4" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Access Restricted</h1>
        <p className="text-slate-600">{error}</p>
        <p className="mt-4 text-sm text-slate-500 bg-slate-100 p-4 rounded-md">
          To view this page in the demo, login via Email using: <strong>admin@btnaik.com</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Staff Admin Dashboard</h1>
            <p className="text-slate-600">View and download documents uploaded by all clients.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-800">All Client Documents</h2>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {documents.length} Total
            </span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Client</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Document</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Upload Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Size</th>
                  <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {loadingDocs ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-slate-500">Loading records...</td>
                  </tr>
                ) : documents.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-slate-500">No documents found.</td>
                  </tr>
                ) : (
                  documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-slate-900">{doc.userEmail}</div>
                        <div className="text-xs text-slate-500">UID: {doc.userId.substring(0, 8)}...</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FaFileAlt className="text-slate-400 mr-2" />
                          <span className="text-sm text-slate-700">{doc.filename}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {doc.createdAt ? new Date(doc.createdAt.toDate()).toLocaleString() : 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {formatSize(doc.size)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a 
                          href={doc.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-900 inline-flex items-center"
                        >
                          <FaDownload className="mr-1" /> Download
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
