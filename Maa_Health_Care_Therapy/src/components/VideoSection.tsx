import React, { useState } from 'react';
import { Play, MessageCircle, X, ShieldCheck, Video, MapPin, Sparkles } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const VideoSection: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const videoDemos = [
    {
      id: "demo-operation",
      title: "Product Operation & Digital Temperature Controller",
      duration: "02:15 Demo",
      description: "Demonstration of the plug-in controller, turning power on/off, adjusting heat from 30°C to 70°C, and temperature display.",
      tag: "Operation Guide"
    },
    {
      id: "demo-ceratonic",
      title: "Ceratonic Far-Infrared Heating Mattress Demo",
      duration: "02:40 Demo",
      description: "Close-up demonstration of the Ceratonic ceramic stone matrix, heat radiation, and Queen size full-body coverage.",
      tag: "Far-Infrared"
    },
    {
      id: "demo-jade-1092",
      title: "1092 Jade Stone Mattress & Thermal Retention",
      duration: "03:10 Demo",
      description: "Showcasing individual polished natural jade stones, protective mesh construction, and deep mineral warmth retention.",
      tag: "Natural Jade"
    }
  ];

  const currentVideo = videoDemos[activeVideoIndex];

  return (
    <section className="py-16 bg-[#F2F5F2] border-y border-[#E8ECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
            <Video className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Interactive Product Demonstration</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24312F] font-['Manrope']">
            See Our Heating Therapy Products in Action
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Watch how our heating mattresses and therapy mats operate, how the temperature controller works, and how to set them up easily at home.
          </p>
        </div>

        {/* Video Card Showcase Container */}
        <div className="bg-white rounded-3xl border border-[#D5DCD6] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Main Video Viewport / Interactive Player Card */}
          <div className="lg:col-span-7 bg-[#0F172A] p-6 sm:p-10 flex flex-col justify-between relative group min-h-[380px] sm:min-h-[460px]">
            {/* Background Graphic Simulation */}
            <div className="absolute inset-0 opacity-40 mix-blend-luminosity overflow-hidden">
              <img
                src="./images/hero-therapy-lifestyle.svg"
                alt="Heating mattress demo background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Bar on Player */}
            <div className="relative z-10 flex items-center justify-between text-white/90">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58] text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A66B]" />
                {currentVideo.tag}
              </span>
              <span className="text-xs font-mono bg-black/50 px-2.5 py-1 rounded-md text-white/80">
                {currentVideo.duration}
              </span>
            </div>

            {/* Central Animated Play Trigger */}
            <div className="relative z-10 my-auto text-center space-y-4">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-20 h-20 rounded-full bg-[#145B58] hover:bg-[#0E4340] text-white flex items-center justify-center mx-auto shadow-2xl transition-all duration-300 transform group-hover:scale-110 focus:outline-hidden"
                aria-label="Play Product Demonstration Video"
              >
                <Play className="w-8 h-8 fill-white ml-1 text-white" />
              </button>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-['Manrope'] drop-shadow-md">
                  {currentVideo.title}
                </h3>
                <p className="text-xs text-white/80 max-w-md mx-auto mt-1 line-clamp-2">
                  {currentVideo.description}
                </p>
              </div>
            </div>

            {/* Bottom Bar: Live Office Demo Notification */}
            <div className="relative z-10 flex items-center justify-between text-xs text-white/75 border-t border-white/10 pt-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
                Live Demo available at Times Trade Center, Surat
              </span>
              <span className="text-[11px] text-[#8BAF9B]">Click to preview</span>
            </div>
          </div>

          {/* Right Selector Playlist */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8ECE7] pb-3">
                <h4 className="font-bold text-sm text-[#24312F] uppercase tracking-wider font-['Manrope']">
                  Demonstration Playlist
                </h4>
                <span className="text-xs text-[#8BAF9B] font-semibold">
                  3 Video Guides
                </span>
              </div>

              <div className="space-y-3">
                {videoDemos.map((demo, idx) => (
                  <button
                    key={demo.id}
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      activeVideoIndex === idx
                        ? 'border-[#145B58] bg-[#145B58]/5 shadow-xs'
                        : 'border-[#E8ECE7] hover:border-[#CBD5E1] bg-white'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      activeVideoIndex === idx ? 'bg-[#145B58] text-white' : 'bg-[#F1F4F1] text-[#64748B]'
                    }`}>
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#145B58] uppercase tracking-wider">
                          {demo.tag}
                        </span>
                        <span className="text-[10px] text-[#94A3B8] font-mono">
                          {demo.duration}
                        </span>
                      </div>
                      <h5 className="font-bold text-xs sm:text-sm text-[#24312F] font-['Manrope'] mt-0.5">
                        {demo.title}
                      </h5>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Demo Booking CTA */}
            <div className="p-4 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#145B58]">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
                Prefer an in-person physical demonstration?
              </div>
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                Visit our Surat office at Times Trade Center, Punagam–Magob to experience the mattresses first-hand.
              </p>
              <a
                href={buildWhatsAppLink({
                  message: `Hello Maa Health Care, I would like to schedule an in-person product demonstration at your Surat office for ${currentVideo.title}.`
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] hover:underline pt-1"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                Schedule Demo on WhatsApp (+91 95124 28000)
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-[#F8F9F6] border-b border-[#E8ECE7]">
              <div>
                <h4 className="font-bold text-sm text-[#24312F] font-['Manrope']">
                  {currentVideo.title}
                </h4>
                <p className="text-xs text-[#64748B]">Maa Health Care Therapy • Product Demonstration</p>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-full text-[#64748B] hover:text-[#24312F] hover:bg-[#E8ECE7] transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Simulation Canvas */}
            <div className="bg-[#0F172A] p-8 text-center text-white space-y-6 min-h-[300px] flex flex-col justify-center items-center">
              <div className="w-16 h-16 rounded-full bg-[#145B58]/80 text-white flex items-center justify-center mx-auto animate-pulse">
                <Video className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md">
                <h4 className="text-lg font-bold font-['Manrope']">
                  {currentVideo.title}
                </h4>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {currentVideo.description}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white/10 text-xs text-[#C6A66B] max-w-md border border-white/10">
                Official demonstration clips can be loaded directly from your video library or YouTube/Vimeo embed.
              </div>
            </div>

            <div className="p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E8ECE7]">
              <span className="text-xs text-[#64748B]">
                Inquire directly for personalized setup support:
              </span>
              <a
                href={buildWhatsAppLink({
                  message: `Hello Maa Health Care, I watched the demo for ${currentVideo.title} and want to know more about price and delivery.`
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Ask Questions on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
