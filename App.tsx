import React from 'react';
import { Layout } from './components/Layout';
import { Icons, APP_NAME, LAST_UPDATED, CONTACT_EMAIL } from './constants';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="py-12 border-b border-slate-200 scroll-mt-20 last:border-0">
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      <div className="h-1.5 w-10 bg-emerald-600 mt-2 rounded-full"></div>
    </div>
    <div className="space-y-4 text-slate-600 leading-relaxed">
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-slate-900 text-white pt-24 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-8 text-xs font-bold tracking-widest uppercase">
            <Icons.Lock /> Privacy Policy
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            {APP_NAME}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Respecting your privacy and protecting your recovery data.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Icons.Calendar />
            Last updated: <span className="text-slate-300 font-medium">{LAST_UPDATED}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">
        {/* Navigation Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-2">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Sections</h3>
            {[
              { id: 'intro', title: 'Introduction' },
              { id: 'overview', title: '1. Overview' },
              { id: 'collect', title: '2. Info We Collect' },
              { id: 'usage', title: '3. Usage' },
              { id: 'processing', title: '4. Data Processing' },
              { id: 'security', title: '5. Security' },
              { id: 'sharing', title: '6. Data Sharing' },
              { id: 'rights', title: '7. User Rights' },
              { id: 'retention', title: '8. Retention' },
              { id: 'children', title: '9. Children’s Privacy' },
              { id: 'updates', title: '10. Policy Updates' },
              { id: 'contact', title: '11. Contact' },
            ].map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className="block py-2 text-slate-500 hover:text-emerald-600 transition-all font-medium border-l-2 border-transparent hover:border-emerald-600 pl-4 text-sm"
              >
                {link.title}
              </a>
            ))}
          </div>
        </aside>

        {/* Policy Content */}
        <article className="flex-grow max-w-3xl">
          <div id="intro" className="prose prose-slate lg:prose-lg max-w-none mb-12 scroll-mt-24">
            <p className="text-xl text-slate-800 font-medium leading-relaxed border-l-4 border-emerald-500 pl-6 py-2 bg-emerald-50/30 rounded-r-xl">
              Recova respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what information we collect, why we collect it, and how it is used when you use the Recova mobile application (“App”).
            </p>
          </div>

          <Section id="overview" title="1. Overview">
            <p>Recova is a recovery-focused fitness awareness app. It relies primarily on user-reported inputs to provide perceived recovery insights.</p>
            <p className="font-medium text-emerald-700">We intentionally limit data collection to what is strictly necessary to operate the app.</p>
          </Section>

          <Section id="collect" title="2. Information We Collect">
            <div className="space-y-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">2.1 Information You Provide Directly</h3>
                <p className="mb-4 text-sm">When using Recova, you may voluntarily provide:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <li className="flex items-center gap-2 bg-emerald-50 p-2 rounded text-sm text-emerald-900 font-medium"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Sleep quality or duration logs</li>
                  <li className="flex items-center gap-2 bg-emerald-50 p-2 rounded text-sm text-emerald-900 font-medium"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Training intensity or activity logs</li>
                  <li className="flex items-center gap-2 bg-emerald-50 p-2 rounded text-sm text-emerald-900 font-medium"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> App preferences and settings</li>
                  <li className="flex items-center gap-2 bg-emerald-50 p-2 rounded text-sm text-emerald-900 font-medium"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Feedback or support messages</li>
                </ul>
                <p className="text-sm italic text-slate-500 border-t border-slate-100 pt-3">All inputs are self-reported and subjective.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">2.2 Automatically Collected Information</h3>
                <p className="mb-4 text-sm">To maintain app quality and performance, Recova may collect:</p>
                <ul className="list-disc ml-5 space-y-2 text-sm">
                  <li>Device type and operating system version</li>
                  <li>App version and build number</li>
                  <li>Anonymous crash logs and performance diagnostics</li>
                  <li>Basic usage events (e.g., screen opens, feature usage)</li>
                </ul>
                <p className="mt-4 text-sm font-medium">This information does not identify you personally.</p>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-red-900 mb-3">2.3 Information We Do NOT Collect</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-red-800">
                  <li className="flex items-center gap-2"><span className="font-bold">×</span> Heart rate data</li>
                  <li className="flex items-center gap-2"><span className="font-bold">×</span> Medical records</li>
                  <li className="flex items-center gap-2"><span className="font-bold">×</span> GPS location</li>
                  <li className="flex items-center gap-2"><span className="font-bold">×</span> Biometric identifiers</li>
                  <li className="flex items-center gap-2"><span className="font-bold">×</span> Financial information</li>
                </ul>
                <p className="mt-4 text-sm font-bold text-red-900">Recova does not connect to wearable devices.</p>
              </div>
            </div>
          </Section>

          <Section id="usage" title="3. How We Use Your Information">
            <p>Your information is used solely to:</p>
            <ul className="list-disc ml-6 space-y-2 marker:text-emerald-500">
              <li>Generate recovery insights based on your inputs</li>
              <li>Improve app stability and usability</li>
              <li>Detect bugs, crashes, or performance issues</li>
              <li>Respond to support requests</li>
            </ul>
            <p className="mt-4 font-medium">Recova does not use your data for advertising or profiling.</p>
          </Section>

          <Section id="processing" title="4. Data Processing & Recovery Insights">
            <p>Recova processes your logs locally or securely to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Identify trends in perceived recovery</li>
              <li>Provide awareness-based guidance</li>
              <li>Maintain historical statistics</li>
            </ul>
            <p className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-100 text-sm font-semibold">
              Recovery scores are informational reflections, not physiological measurements.
            </p>
          </Section>

          <Section id="security" title="5. Data Storage & Security">
            <p>We apply reasonable technical and organizational measures to protect your data, including:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Secure storage practices</li>
              <li>Limited internal access</li>
              <li>Industry-standard safeguards</li>
            </ul>
            <p className="mt-4 text-slate-500 italic">However, no digital system can guarantee absolute security.</p>
          </Section>

          <Section id="sharing" title="6. Data Sharing & Third Parties">
            <p className="font-medium mb-4">Recova does not sell, rent, or trade your personal data.</p>
            <p className="mb-2">We may share limited data only with:</p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Analytics or crash-reporting services</li>
              <li>Hosting or infrastructure providers</li>
              <li>Authorities if required by law</li>
            </ul>
            <p>All partners are expected to comply with applicable privacy standards.</p>
          </Section>

          <Section id="rights" title="7. User Rights & Control">
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li>Edit or delete logged data</li>
              <li>Stop using the app at any time</li>
              <li>Request deletion of stored data</li>
            </ul>
            <div className="bg-slate-100 p-4 rounded-xl inline-block">
              <p className="text-sm font-medium mb-1">To request deletion or assistance, contact:</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 font-bold hover:underline">{CONTACT_EMAIL}</a>
            </div>
          </Section>

          <Section id="retention" title="8. Data Retention">
            <p>We retain user data only as long as necessary to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide app functionality</li>
              <li>Improve service quality</li>
              <li>Meet legal obligations (if applicable)</li>
            </ul>
          </Section>

          <Section id="children" title="9. Children’s Privacy">
            <p className="mb-2">Recova is not intended for children under 13.</p>
            <p>We do not knowingly collect information from minors.</p>
          </Section>

          <Section id="updates" title="10. Policy Updates">
            <p>This Privacy Policy may be updated from time to time. Updates will be reflected on this page.</p>
            <p className="mt-4">Continued use of the app indicates acceptance of changes.</p>
          </Section>

          <Section id="contact" title="11. Contact Information">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
              <p className="font-bold mb-2 uppercase text-xs tracking-widest opacity-70">For privacy-related questions</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl font-bold hover:text-emerald-400 transition-colors underline decoration-emerald-500 underline-offset-4">
                {CONTACT_EMAIL}
              </a>
            </div>
          </Section>
        </article>
      </div>
    </Layout>
  );
};

export default App;