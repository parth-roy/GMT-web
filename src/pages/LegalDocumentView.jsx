import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

const LegalDocumentView = ({ documentId, title }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the markdown file from the public folder
    fetch(`/legal/${documentId}.md`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching markdown:', error);
        setContent('# Error loading document\nPlease try again later.');
        setLoading(false);
      });
  }, [documentId]);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <Helmet>
        <title>{title} | GoMyTruck</title>
        <meta name="description" content={`GoMyTruck ${title}`} />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-blue-600 px-8 py-10 text-white flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-blue-100 mt-1">GoMyTruck Logistics Platform</p>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 sm:p-12">
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mt-8"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            ) : (
              <div className="prose prose-blue max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-500">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDocumentView;
