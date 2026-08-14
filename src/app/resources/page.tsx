'use client';

import { useState } from 'react';
import { resources } from '@/data/resources';
import { FaFilePdf, FaFileWord, FaFileExcel, FaDownload, FaSearch } from 'react-icons/fa';
// Note: Using client component for interactivity. 

// If SEO is highly prioritized for these specific files, we could split this into server/client components.

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(resources.map(r => r.category)))];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getIcon = (format: string) => {
    switch (format) {
      case 'PDF': return <FaFilePdf className="text-red-500 w-8 h-8" />;
      case 'DOCX': return <FaFileWord className="text-blue-500 w-8 h-8" />;
      case 'XLSX': return <FaFileExcel className="text-green-500 w-8 h-8" />;
      default: return <FaFilePdf className="text-slate-500 w-8 h-8" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Downloadable Resources</h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            Access forms, checklists, and reference materials.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search resources..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center md:justify-end w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? 'bg-slate-800 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                {getIcon(resource.format)}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {resource.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{resource.title}</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">{resource.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-medium">{resource.format} • {resource.sizeMB} MB</span>
                <a 
                  href={resource.url} 
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <FaDownload className="mr-1" /> Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-slate-200 shadow-sm text-slate-500">
            No resources found matching your search.
          </div>
        )}

      </div>
    </div>
  );
}
