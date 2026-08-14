'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/lib/firebase/clientApp';
import { supabase } from '@/lib/supabase/clientApp';
import { collection, addDoc, query, where, getDocs, orderBy, serverTimestamp } from 'firebase/firestore';
import { FaFileAlt, FaUpload, FaSignOutAlt, FaDownload } from 'react-icons/fa';

interface DocumentRecord {
  id: string;
  filename: string;
  url: string;
  createdAt: any;
  size: number;
}

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const [documents, setDocuments] = useState<DocumentRecord[]>([]);
  const [loadingDocs, setLoadingDocs] = useState(true);
  
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  useEffect(() => {
    if (user) {
      fetchDocuments();
    }
  }, [user]);

  const fetchDocuments = async () => {
    if (!user) return;
    try {
      const q = query(
        collection(db, 'documents'),
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const docsData: DocumentRecord[] = [];
      querySnapshot.forEach((doc) => {
        docsData.push({ id: doc.id, ...doc.data() } as DocumentRecord);
      });
      setDocuments(docsData);
    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setLoadingDocs(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    // Validate size (e.g. max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError("File size exceeds 10MB limit.");
      return;
    }

    setUploading(true);
    setUploadError('');

    try {
      // 1. Upload to Supabase Storage (public bucket)
      const filePath = `clients/${user.uid}/${Date.now()}_${file.name}`;
      const { data, error: uploadError } = await supabase.storage
        .from('client-documents')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('client-documents')
        .getPublicUrl(filePath);

      const downloadUrl = publicUrl;

      // 3. Save metadata to Firestore
      await addDoc(collection(db, 'documents'), {
        userId: user.uid,
        userEmail: user.email || user.phoneNumber || 'Unknown',
        filename: file.name,
        url: downloadUrl,
        size: file.size,
        createdAt: serverTimestamp(),
      });

      // Refresh list
      await fetchDocuments();
      
      // Reset input
      e.target.value = '';
    } catch (error: any) {
      console.error("Upload error:", error);
      setUploadError(error.message || "Failed to upload document.");
    } finally {
      setUploading(false);
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Client Dashboard</h1>
          <p className="text-slate-600 mt-1">Welcome back, {user?.email || user?.phoneNumber}</p>
        </div>
        <button
          onClick={signOut}
          className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none transition-colors"
        >
          <FaSignOutAlt className="mr-2" /> Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Upload Section */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Upload Document</h2>
            <p className="text-sm text-slate-600 mb-6">
              Upload invoices, Form 16, or bank statements securely. Files are retained for 6 months.
            </p>
            
            {uploadError && (
              <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded border border-red-100">
                {uploadError}
              </div>
            )}

            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors">
              <FaUpload className="mx-auto text-3xl text-slate-400 mb-3" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="mt-2 block text-sm font-medium text-blue-600 hover:text-blue-500">
                  Select a file
                </span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileUpload}
                  disabled={uploading}
                />
              </label>
              <p className="mt-1 text-xs text-slate-500">PDF, XLSX, DOCX up to 10MB</p>
            </div>
            
            {uploading && (
              <div className="mt-4 flex items-center justify-center text-sm text-blue-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                Uploading...
              </div>
            )}
          </div>
        </div>

        {/* Documents List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
              <h2 className="text-xl font-semibold text-slate-800">Your Documents</h2>
            </div>
            
            <div className="p-0">
              {loadingDocs ? (
                <div className="p-8 text-center text-slate-500">Loading documents...</div>
              ) : documents.length === 0 ? (
                <div className="p-12 text-center flex flex-col items-center">
                  <FaFileAlt className="text-4xl text-slate-300 mb-4" />
                  <p className="text-slate-500">No documents uploaded yet.</p>
                </div>
              ) : (
                <ul className="divide-y divide-slate-200">
                  {documents.map((doc) => (
                    <li key={doc.id} className="p-6 hover:bg-slate-50 transition-colors flex items-center justify-between">
                      <div className="flex items-start">
                        <FaFileAlt className="text-slate-400 mt-1 mr-4 text-xl" />
                        <div>
                          <p className="text-sm font-medium text-slate-900">{doc.filename}</p>
                          <div className="mt-1 text-xs text-slate-500 flex gap-4">
                            <span>{doc.createdAt ? new Date(doc.createdAt.toDate()).toLocaleDateString() : 'Just now'}</span>
                            <span>{formatSize(doc.size)}</span>
                          </div>
                        </div>
                      </div>
                      <a 
                        href={doc.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
                        title="Download"
                      >
                        <FaDownload />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
