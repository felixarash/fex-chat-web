import Image from "next/image";

// TODO: Update this URL with your Vercel Blob link once generated
const APK_DOWNLOAD_URL = "/app-release.apk";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
      {/* Header / Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="FexChat Logo" width={40} height={40} className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-wide">FexChat</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-text-secondary">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#download" className="hover:text-primary transition-colors">Download</a>
          </nav>
          <a
            href="#download"
            className="px-6 py-2 rounded-full bg-primary text-background font-semibold hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          >
            Get App
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Real-time Chat & <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                Daily Stories
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto md:mx-0">
              Experience the future of social networking. Connect instantly, share your daily moments, and express yourself with FexChat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-primary text-background font-bold text-lg hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
              >
                <span>Download for Android</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414C17.523 15.3414 17.5606 15.3414 17.5606 15.3414C17.5606 15.3414 17.5606 15.3414 17.5606 15.3414C16.5442 16.746 15.0345 18.8255 13.5606 18.8255C12.1227 18.8255 11.6667 17.9739 10.0396 17.9739C8.3753 17.9739 7.85428 18.8255 6.45428 18.8255C4.98042 18.8255 3.39567 16.6342 2.45428 15.2811C0.52842 12.5152 2.00192 8.27282 5.34135 8.21398C6.64305 8.15694 7.85428 9.09457 8.64962 9.09457C9.44496 9.09457 10.963 8.03544 12.4811 8.15694C13.0991 8.18128 14.8322 8.40244 15.9427 10.0161C15.8569 10.0716 13.6338 11.3705 13.6559 13.8824C13.678 16.5768 15.9869 17.5857 16.0298 17.6013L17.523 15.3414ZM11.9602 6.09068C12.636 5.27136 13.0909 4.13117 12.9649 2.99097C11.9602 3.03388 10.7447 3.6601 10.0249 4.49952C9.3664 5.26801 8.87784 6.43883 9.03222 7.54932C10.134 7.6366 11.2844 6.91 11.9602 6.09068Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-[280px] h-[580px] bg-surface border-4 border-white/10 rounded-[3rem] shadow-2xl overflow-hidden">
               {/* Mockup Content */}
               <div className="absolute inset-0 flex flex-col">
                  <div className="h-8 bg-black/50 w-full absolute top-0 z-20 flex justify-center items-center">
                    <div className="w-20 h-5 bg-black rounded-b-xl"></div>
                  </div>
                  <div className="flex-1 bg-[#050510] relative">
                     {/* Chat Screen Mockup */}
                     <div className="p-4 pt-12 space-y-4">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="w-10 h-10 rounded-full bg-linear-to-tr from-primary to-secondary"></div>
                           <div>
                              <div className="h-3 w-24 bg-white/20 rounded"></div>
                              <div className="h-2 w-16 bg-white/10 rounded mt-1"></div>
                           </div>
                        </div>
                        <div className="flex justify-end">
                           <div className="bg-primary/20 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                              Hey! Have you tried the new FexChat stories?
                           </div>
                        </div>
                        <div className="flex justify-start">
                           <div className="bg-surface border border-white/10 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                              Yeah! Just posted one with Spotify integration 🎵
                           </div>
                        </div>
                         <div className="flex justify-end">
                           <div className="bg-primary/20 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                              Awesome! The live capture feel is so cool.
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-surface/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why FexChat?</h2>
            <p className="text-text-secondary">Packed with features to make your social life vibrant.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <FeatureCard 
              icon="📸"
              title="Daily Stories"
              description="Share one story per day. Captured live, ephemeral for 24 hours. Keep it real."
            />
            {/* Feature 2 */}
            <FeatureCard 
              icon="🎵"
              title="Spotify Integration"
              description="Add your vibe. Attach Spotify tracks directly to your stories for your friends to hear."
            />
            {/* Feature 3 */}
            <FeatureCard 
              icon="⚡"
              title="Instant Chat"
              description="Real-time messaging powered by Supabase. Offline support keeps you connected anywhere."
            />
            {/* Feature 4 */}
            <FeatureCard 
              icon="🔐"
              title="Face Verification"
              description="Secure and authentic. Identity verification ensures you're chatting with real people."
            />
            {/* Feature 5 */}
            <FeatureCard 
              icon="🌚"
              title="Futuristic Theme"
              description="Immersive Neon Dark mode designed for comfort and style."
            />
            {/* Feature 6 */}
            <FeatureCard 
              icon="🔍"
              title="Easy Discovery"
              description="Find friends instantly with username search and clean profiles."
            />
          </div>
        </div>
      </section>

       {/* How it Works Section */}
       <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          </div>
          <div className="space-y-12">
             <Step 
                number="01"
                title="Sign Up & Verify"
                description="Create an account and verify your identity using our secure Face Verification system."
             />
             <Step 
                number="02"
                title="Connect with Friends"
                description="Search for friends by username and start chatting instantly."
             />
             <Step 
                number="03"
                title="Share Your Day"
                description="Post your daily story with a photo and your favorite song. It lasts 24 hours!"
             />
          </div>
        </div>
       </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 bg-linear-to-t from-secondary/20 to-transparent">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to join the future?</h2>
          <p className="text-text-secondary mb-8 text-lg">
            target="_blank"
            rel Fnoopener noreferrxrand start sharing your moments in real-time.
          </p>
          <a
            href={APK_DOWNLOAD_URL}
            download="FexChat.apk"
            className="inline-block px-10 py-4 rounded-full bg-primary text-background font-bold text-xl hover:bg-opacity-90 transition-all shadow-[0_0_30px_rgba(0,240,255,0.5)] transform hover:scale-105"
          >
            Download Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-text-secondary text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} FexChat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
   return (
      <div className="flex gap-6 items-start">
         <div className="text-5xl font-bold text-white/10">{number}</div>
         <div>
            <h3 className="text-2xl font-bold mb-2 text-primary">{title}</h3>
            <p className="text-text-secondary text-lg">{description}</p>
         </div>
      </div>
   )
}
