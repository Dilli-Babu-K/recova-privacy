
import React from 'react';
import { Icons, APP_NAME } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-slate-900">{APP_NAME}</span>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-bold text-xl">{APP_NAME}</span>
            </div>
            <p className="max-w-xs text-sm">
              Helping athletes and fitness enthusiasts recover smarter and perform better.
            </p>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} RECOVA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
