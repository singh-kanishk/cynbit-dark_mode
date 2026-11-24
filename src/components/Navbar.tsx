import React, { useState } from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { Sun, Moon, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'BitElevate', href: '#bitelevate', badge: 'New' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Branding */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:bg-teal-500 transition-colors">
              <Cpu className="w-5 h-5 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Cynbit<span className="text-teal-600 dark:text-teal-400">.</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-600 dark:text-slate-400 -mt-1">
                AI Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  {item.name}
                  {item.badge && (
                    <span className="text-[10px] font-semibold bg-teal-100 text-teal-700 dark:bg-teal-900/60 dark:text-teal-300 px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700 transition-transform hover:rotate-12" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400 transition-transform hover:rotate-45" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#join"
              className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-md shadow-teal-600/20 hover:shadow-teal-600/30 transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <span>Join Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-xs font-semibold bg-teal-100 text-teal-700 dark:bg-teal-900/60 dark:text-teal-300 px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <a
              href="#join"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-full py-2.5 text-sm font-semibold shadow-md shadow-teal-600/20 transition-all text-center"
            >
              <span>Join Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
