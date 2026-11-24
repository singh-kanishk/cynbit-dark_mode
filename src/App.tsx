import React from 'react';
import { Navbar } from './components/Navbar';
import { useThemeStore } from './store/useThemeStore';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  ShieldCheck, 
  Zap, 
  Code2, 
  CheckCircle2, 
  Sun, 
  Moon,
  Database
} from 'lucide-react';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  const features = [
    {
      icon: <Bot className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'AI Automation',
      description: 'Streamline repetitive enterprise workflows using customized autonomous agent systems.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Enterprise Security',
      description: 'Production-ready reliability with strict role-based controls and data sovereignty standards.',
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'BitElevate Platform',
      description: 'Accelerate tech modernization with intelligent code refactoring and architecture pipelines.',
    },
    {
      icon: <Code2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Modern Stack Architecture',
      description: 'Engineered with React, TypeScript, Tailwind CSS, and lightweight Zustand state management.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Cynbit Responsive Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
          {/* Subtle Background Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60 mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Next-Gen Enterprise Engineering</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Architecting the future with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500">
                  AI automation
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Empowering innovative enterprises to scale faster with bespoke AI engineering, 
                intelligent workflows, and next-generation cloud architectures.
              </p>

              {/* CTA Group */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#explore"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-teal-600/25 hover:shadow-teal-600/35 transition-all active:scale-95"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold px-7 py-3 rounded-full border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
                >
                  <span>Book a Consultation</span>
                </a>
              </div>

              {/* Interactive Theme Status Card */}
              <div className="mt-12 p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 shadow-md max-w-md mx-auto text-left">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-sm">
                    <Database className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>Theme Persistence Live Status</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 font-medium">
                    key: 'theme'
                  </span>
                </div>
                
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
                    <span>Active Theme:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize flex items-center gap-1.5">
                      {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-amber-400" /> : <Sun className="w-3.5 h-3.5 text-slate-700" />}
                      {theme} mode
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
                    <span>DOM Root Class:</span>
                    <code className="text-teal-600 dark:text-teal-400 font-mono">
                      {theme === 'dark' ? '<html class="dark">' : '<html class="">'}
                    </code>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Quick Store Action:</span>
                    <button
                      onClick={toggleTheme}
                      className="text-xs px-2.5 py-1 rounded-md bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors"
                    >
                      Toggle Theme
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid Section */}
        <section id="services" className="py-16 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Comprehensive Engineering Capabilities
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                Discover how Cynbit integrates intelligence into modern digital infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section to test Navbar Scroll Glassmorphism */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Tested for Beginner-Friendly Learning
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Scroll up and down this page to observe the sticky navbar's backdrop blur effect, test the dark/light mode toggle in both places, and refresh your browser to see localStorage persistence in action.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-2.5 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Zero Theme Flash</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pre-render script guarantees no flicker on reload.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Zustand Persist</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Stored cleanly in browser localStorage.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Fully Responsive</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Seamless mobile drawer and desktop navigation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Cynbit Engineering Demo. Built with React, TypeScript, Tailwind CSS & Zustand.</p>
      </footer>
    </div>
  );
};

export default App;
