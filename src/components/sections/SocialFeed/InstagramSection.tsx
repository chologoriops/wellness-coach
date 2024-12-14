import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { InstagramPost } from './types';

interface InstagramSectionProps {
  posts: InstagramPost[];
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ posts }) => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-[#ff6b00]/10 rounded-full mb-4">
          <Instagram className="w-5 h-5 text-[#ff6b00] mr-2" />
          <span className="text-[#ff6b00] font-medium">Instagram Feed</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Follow Our Journey</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Daily inspiration and behind-the-scenes moments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="instagram-post-container bg-gray-900/50 rounded-xl overflow-hidden">
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink={post.postUrl}
              data-instgrm-version="14"
              style={{ 
                background: '#1a1a1a',
                borderRadius: '12px',
                margin: '0',
                padding: '0',
                width: '100%',
                maxWidth: '100%'
              }}
            ></blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};