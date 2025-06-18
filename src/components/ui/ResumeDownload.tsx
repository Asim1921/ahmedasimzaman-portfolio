'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon, 
  CheckCircleIcon, 
  ExclamationCircleIcon,
  EyeIcon,
  ShareIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface ResumeDownloadProps {
  variant?: 'button' | 'card' | 'inline';
  showPreview?: boolean;
  className?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ 
  variant = 'button', 
  showPreview = false,
  className = ''
}) => {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success' | 'error'>('idle');
  const [downloadCount, setDownloadCount] = useState(0);

  const handleDownload = async () => {
    setDownloadStatus('downloading');
    
    try {
      // Trigger download
      const response = await fetch('/api/resume', {
        method: 'GET',
        headers: {
          'Accept': 'application/pdf',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Ahmed_Asim_Zaman_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Update status
      setDownloadStatus('success');
      setDownloadCount(prev => prev + 1);
      
      // Reset status after 3 seconds
      setTimeout(() => setDownloadStatus('idle'), 3000);

    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }
  };

  const handlePreview = () => {
    // Open resume in new tab for preview
    window.open('/api/resume', '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Ahmed Asim Zaman - Resume',
      text: 'Check out Ahmed Asim Zaman\'s professional resume',
      url: window.location.origin + '/api/resume'
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareData.url);
      alert('Resume link copied to clipboard!');
    }
  };

  // Status messages
  const getStatusMessage = () => {
    switch (downloadStatus) {
      case 'downloading':
        return 'Preparing download...';
      case 'success':
        return 'Resume downloaded successfully!';
      case 'error':
        return 'Download failed. Please try again.';
      default:
        return '';
    }
  };

  const getStatusIcon = () => {
    switch (downloadStatus) {
      case 'downloading':
        return <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>;
      case 'success':
        return <CheckCircleIcon className="w-5 h-5 text-green-400" />;
      case 'error':
        return <ExclamationCircleIcon className="w-5 h-5 text-red-400" />;
      default:
        return <DocumentArrowDownIcon className="w-5 h-5" />;
    }
  };

  // Button variant
  if (variant === 'button') {
    return (
      <div className={`space-y-2 ${className}`}>
        <motion.button
          onClick={handleDownload}
          disabled={downloadStatus === 'downloading'}
          className={`group relative inline-flex items-center gap-3 px-6 py-3 font-bold rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border ${
            downloadStatus === 'downloading'
              ? 'bg-gray-600 cursor-not-allowed border-gray-500'
              : downloadStatus === 'success'
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 border-green-400/50'
              : downloadStatus === 'error'
              ? 'bg-gradient-to-r from-red-600 to-rose-600 border-red-400/50'
              : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 border-white/20 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700'
          } text-white shadow-purple-500/50 hover:shadow-purple-400/70`}
          whileHover={{ scale: downloadStatus === 'downloading' ? 1 : 1.02 }}
          whileTap={{ scale: downloadStatus === 'downloading' ? 1 : 0.98 }}
        >
          {/* Animated background */}
          {downloadStatus === 'idle' && (
            <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          )}
          
          {/* Content */}
          <span className="relative z-10 flex items-center gap-2">
            {getStatusIcon()}
            {downloadStatus === 'downloading' ? 'Downloading...' : 
             downloadStatus === 'success' ? 'Downloaded!' :
             downloadStatus === 'error' ? 'Try Again' : 'Download Resume'}
          </span>
          
          {/* Shine effect */}
          {downloadStatus === 'idle' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          )}
        </motion.button>

        {/* Status message */}
        {downloadStatus !== 'idle' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm ${
              downloadStatus === 'success' ? 'text-green-400' :
              downloadStatus === 'error' ? 'text-red-400' : 'text-gray-400'
            }`}
          >
            {getStatusMessage()}
          </motion.p>
        )}
      </div>
    );
  }

  // Card variant
  if (variant === 'card') {
    return (
      <motion.div
        className={`group relative p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${className}`}
        whileHover={{ y: -5 }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        <div className="relative space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <DocumentTextIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Professional Resume</h3>
              <p className="text-gray-400 text-sm">Full Stack Developer • 2024</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            Download my comprehensive resume showcasing my experience, skills, and projects in full-stack development.
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <motion.button
              onClick={handleDownload}
              disabled={downloadStatus === 'downloading'}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: downloadStatus === 'downloading' ? 1 : 1.02 }}
            >
              {getStatusIcon()}
              {downloadStatus === 'downloading' ? 'Downloading...' : 'Download'}
            </motion.button>

            {showPreview && (
              <motion.button
                onClick={handlePreview}
                className="px-4 py-3 bg-black/30 text-gray-300 border border-white/10 rounded-xl hover:text-white hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <EyeIcon className="w-5 h-5" />
              </motion.button>
            )}

            <motion.button
              onClick={handleShare}
              className="px-4 py-3 bg-black/30 text-gray-300 border border-white/10 rounded-xl hover:text-white hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <ShareIcon className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Download count */}
          {downloadCount > 0 && (
            <p className="text-xs text-gray-500">
              Downloaded {downloadCount} time{downloadCount !== 1 ? 's' : ''} this session
            </p>
          )}
        </div>
      </motion.div>
    );
  }

  // Inline variant
  return (
    <motion.button
      onClick={handleDownload}
      disabled={downloadStatus === 'downloading'}
      className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
        downloadStatus === 'downloading'
          ? 'text-gray-400 cursor-not-allowed'
          : 'text-violet-400 hover:text-violet-300'
      } ${className}`}
      whileHover={{ scale: downloadStatus === 'downloading' ? 1 : 1.05 }}
    >
      {getStatusIcon()}
      <span>
        {downloadStatus === 'downloading' ? 'Downloading...' : 
         downloadStatus === 'success' ? 'Downloaded!' :
         downloadStatus === 'error' ? 'Try Again' : 'Download Resume'}
      </span>
    </motion.button>
  );
};

export default ResumeDownload;