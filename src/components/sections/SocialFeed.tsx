import React from 'react';
import { Youtube, Instagram } from 'lucide-react';

// YouTube video IDs - replace these with your actual video IDs
const youtubeVideos = [
  {
    id: 'PoyqlEmdTfXOs_lr',
    title: 'Morning Workout Routine'
  },
  {
    id: 'M7lc1UVf-VE',
    title: 'Healthy Meal Prep'
  },
  {
    id: 'ZWHpcKXt-qk',
    title: 'Mindfulness Practice'
  }
];

// Instagram post URLs - replace these with your actual Instagram post URLs
const instagramPosts = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400',
    postUrl: 'https://www.instagram.com/p/example1/',
    alt: 'Workout session'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
    postUrl: 'https://www.instagram.com/p/example2/',
    alt: 'Healthy meal'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
    postUrl: 'https://www.instagram.com/p/example3/',
    alt: 'Meditation session'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400',
    postUrl: 'https://www.instagram.com/p/example4/',
    alt: 'Yoga practice'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400',
    postUrl: 'https://www.instagram.com/p/example5/',
    alt: 'Healthy breakfast'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
    postUrl: 'https://www.instagram.com/p/example6/',
    alt: 'Fitness equipment'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=400',
    postUrl: 'https://www.instagram.com/p/example7/',
    alt: 'Wellness coaching'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=400',
    postUrl: 'https://www.instagram.com/p/example8/',
    alt: 'Lifestyle wellness'
  }
];

const SocialFeed = () => {
  return (
    <section id="social" className="py-14 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* YouTube Section */}
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
            {youtubeVideos.map((video) => (
              <div key={video.id} className="aspect-video bg-gray-900/50 rounded-xl overflow-hidden group relative">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Section */}
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <a
                key={index}
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gray-900/50 rounded-xl overflow-hidden group relative"
              >
                <img
                  src={post.imageUrl}
                  alt={post.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;