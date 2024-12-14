import React from 'react';
import { Youtube } from 'lucide-react';
import { YouTubeVideo } from './types';

interface YouTubeSectionProps {
  videos: YouTubeVideo[];
}

export const YouTubeSection: React.FC<YouTubeSectionProps> = ({ videos }) => {
  return (
    <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-[#ff6b00]/10 rounded-full mb-4">
          <Youtube className="w-5 h-5 text-[#ff6b00] mr-2" />
          <span className="text-[#ff6b00] font-medium">Latest Videos</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Wellness Tips & Insights</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Watch our latest content for tips, advice, and success stories
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="aspect-video bg-gray-900/50 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src={video.embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};