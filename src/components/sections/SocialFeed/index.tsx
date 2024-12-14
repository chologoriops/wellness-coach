import React from 'react';
import { YouTubeSection } from './YouTubeSection';
import { InstagramSection } from './InstagramSection';
import { youtubeVideos, instagramPosts } from './data';

const SocialFeed = () => {
  return (
    <section id="social" className="py-14 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <YouTubeSection videos={youtubeVideos} />
        <InstagramSection posts={instagramPosts} />
      </div>
    </section>
  );
};

export default SocialFeed;