import Image from "next/image";

const APK_DOWNLOAD_URL = "https://ceiaocfmokuoptyg.public.blob.vercel-storage.com/app-release.apk";

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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.6 9.48l1.84-3.18c.16-.27.07-.61-.2-.77-.28-.16-.61-.07-.77.2l-1.87 3.23c-1.63-.72-3.43-1.15-5.36-1.2l-.08-.01-.08.01c-1.93.05-3.73.48-5.36 1.2L3.93 5.73c-.16-.27-.49-.36-.77-.2-.27.16-.36.5-.2.77l1.84 3.18C2.13 11.53.5 14.93.5 18.7h23c0-3.77-1.63-7.17-4.29-9.22zM7 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </a>
              
              <button
                disabled
                className="px-8 py-3 rounded-full bg-white/5 text-white/50 font-bold text-lg border border-white/10 flex items-center justify-center gap-2 cursor-not-allowed"
              >
                <span>iOS Coming Soon</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.68-.83 1.14-1.99 1.01-3.15-1.03.05-2.27.69-3.01 1.54-.67.77-1.24 1.99-1.08 3.15 1.15.09 2.33-.63 3.08-1.54" />
                </svg>
              </button>
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
            Download FexChat today and start sharing your moments in real-time.
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

      {/* Developer Profile Section */}
      <section className="py-20 px-4 bg-surface border-t border-white/5">
        <div className="container mx-auto text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet the Developer</h2>
           
           <div className="flex flex-col items-center gap-6">
              <div className="w-32 h-32 rounded-full bg-linear-to-tr from-primary to-secondary p-1">
                 <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                    <span className="text-4xl">👨‍💻</span>
                 </div>
              </div>
              
              <div className="space-y-2">
                 <h3 className="text-2xl font-bold text-white">Fozan Ahmed</h3>
                 <p className="text-primary font-medium tracking-wide">AI Research Engineer ~ Full-Stack Developer</p>
              </div>

              <div className="flex gap-6 mt-4">
                 {/* GitHub */}
                 <a href="https://github.com/felixarash" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                 </a>
                 {/* LinkedIn */}
                 <a href="https://linkedin.com/in/fozanahmedmemon" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-[#0A66C2] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                 </a>
                 {/* X / Twitter */}
                 <a href="https://x.com/fozanahmedm" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                 </a>
                 {/* Website */}
                 <a href="https://fozanahmed.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                 </a>
              </div>
           </div>
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
