
import React from 'react';
import { Layout } from './components/Layout';
import { Icons, APP_NAME, LAST_UPDATED, CONTACT_EMAIL } from './constants';
import { PolicyAssistant } from './components/PolicyAssistant';

const Section: React.FC<{ id: string; title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ id, title, icon, children }) => (
  <section id={id} className="py-12 border-b border-slate-200 scroll-mt-20 last:border-0">
    <div className="flex items-center gap-3 mb-6">
      <div className="text-emerald-600 bg-emerald-50 p-2 rounded-xl">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
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
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-8 text-sm font-semibold tracking-wide uppercase">
            <Icons.Lock /> Privacy First
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4">
            At {APP_NAME}, we believe your recovery data is yours and yours alone.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <Icons.Calendar />
            Last updated: <span className="text-slate-300 font-medium">{LAST_UPDATED}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">
        {/* Table of Contents - Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-2">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Contents</h3>
            {[
              { id: 'collect', title: '1. Information We Collect' },
              { id: 'usage', title: '2. How We Use Info' },
              { id: 'storage', title: '3. Data Storage' },
              { id: 'sharing', title: '4. Data Sharing' },
              { id: 'retention', title: '5. Data Retention' },
              { id: 'rights', title: '6. Your Rights' },
              { id: 'children', title: "7. Children's Privacy" },
              { id: 'contact', title: '9. Contact Us' },
            ].map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className="block py-2 text-slate-500 hover:text-emerald-600 transition-colors font-medium border-l-2 border-transparent hover:border-emerald-600 pl-4"
              >
                {link.title}
              </a>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <article className="flex-grow max-w-3xl">
          <div id="intro" className="prose prose-slate lg:prose-lg max-w-none mb-12">
            <p className="text-lg text-slate-700 font-medium italic border-l-4 border-emerald-500 pl-6 py-2">
              Recova respects your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the Recova mobile application.
            </p>
            <p className="text-slate-500">
              By using Recova, you agree to this Privacy Policy.
            </p>
          </div>

          <Section id="collect" title="1. Information We Collect" icon={<Icons.Database />}>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6">
              <h4 className="text-lg font-bold text-slate-800 mb-3">a) Account Information</h4>
              <p className="mb-4">Depending on how you use the app, we may collect:</p>
              <ul className="list-none space-y-3">
                <li className="flex gap-2">
                  <span className="text-emerald-500"><Icons.Check /></span>
                  <span><strong>Google account identifier</strong> (if you sign in with Google)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500"><Icons.Check /></span>
                  <span><strong>Anonymous user identifier</strong> (if you use Guest mode)</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-slate-50 rounded-lg text-sm border-l-2 border-slate-300">
                We do not access your Google password, emails, contacts, or personal files.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6">
              <h4 className="text-lg font-bold text-slate-800 mb-3">b) Health & Recovery Data (User-Provided)</h4>
              <p className="mb-4">Recova collects only the data you <strong>manually enter</strong>, such as:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Height and weight', 'Sleep quality inputs', 'Training intensity inputs', 'Recovery actions (e.g., breathwork)', 'Recovery scores and trends'].map(item => (
                  <div key={item} className="flex items-center gap-2 bg-emerald-50 p-3 rounded-xl text-emerald-800 text-sm font-medium">
                    <Icons.Check /> {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100">
                <p className="font-bold text-sm mb-1">Recova does NOT collect:</p>
                <ul className="text-xs space-y-1 opacity-90 list-disc ml-4">
                  <li>Medical records</li>
                  <li>Heart rate or biometric sensor data</li>
                  <li>GPS location</li>
                  <li>Contacts or messages</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-800 mb-3">c) App Usage & Diagnostics</h4>
              <p>We may collect limited technical data such as app crashes and performance diagnostics. This data is used only to improve stability and reliability.</p>
            </div>
          </Section>

          <Section id="usage" title="2. How We Use Your Information" icon={<Icons.Shield />}>
            <p>We use your information to:</p>
            <ul className="space-y-2 list-disc ml-5">
              <li>Calculate recovery and readiness scores</li>
              <li>Display trends and insights</li>
              <li>Improve app performance and user experience</li>
              <li>Maintain secure authentication</li>
            </ul>
            <p className="font-bold text-slate-900 mt-4">We do not sell or rent your personal data.</p>
          </Section>

          <Section id="storage" title="3. Data Storage & Security" icon={<Icons.Lock />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 rounded-2xl bg-white">
                <h5 className="font-bold text-slate-800 mb-2">Google Firebase</h5>
                <p className="text-sm">Data is stored securely using industry-standard cloud infrastructure.</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-2xl bg-white">
                <h5 className="font-bold text-slate-800 mb-2">Encryption</h5>
                <p className="text-sm">Data is encrypted in transit using SSL/TLS protocols.</p>
              </div>
            </div>
            <p className="text-sm italic mt-4">While we take reasonable measures, no system can be guaranteed to be 100% secure.</p>
          </Section>

          <Section id="sharing" title="4. Data Sharing" icon={<Icons.Share />}>
            <p>Your data is shared only with:</p>
            <ul className="list-disc ml-5 mb-4">
              <li><strong>Google Firebase services</strong> (authentication and secure storage)</li>
            </ul>
            <p className="bg-slate-100 p-4 rounded-xl text-slate-700 border border-slate-200">
              We do not share your data with advertisers or unrelated third parties.
            </p>
          </Section>

          <Section id="retention" title="5. Data Retention" icon={<Icons.Calendar />}>
            <p>Your data is retained:</p>
            <ul className="list-disc ml-5">
              <li>While your account is active</li>
              <li>Until you request deletion</li>
            </ul>
            <p>You may request deletion at any time.</p>
          </Section>

          <Section id="rights" title="6. Your Rights" icon={<Icons.User />}>
            <p>You have the right to:</p>
            <div className="flex flex-wrap gap-2">
              {['Access your data', 'Correct your data', 'Delete your data', 'Withdraw consent'].map(r => (
                <span key={r} className="bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-xs font-bold">{r}</span>
              ))}
            </div>
            <div className="mt-8 p-6 bg-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-200">
              <p className="font-bold mb-2">To request data deletion, contact:</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl md:text-2xl font-mono underline decoration-emerald-400 underline-offset-4 hover:text-emerald-200 transition-colors">
                {CONTACT_EMAIL}
              </a>
            </div>
          </Section>

          <Section id="children" title="7. Children's Privacy" icon={<Icons.Shield />}>
            <p>Recova is not intended for users under the age of 13. We do not knowingly collect data from children.</p>
          </Section>

          <Section id="contact" title="9. Contact Us" icon={<Icons.Mail />}>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline">
               <Icons.Mail /> {CONTACT_EMAIL}
            </a>
          </Section>
        </article>
      </div>
      
      {/* AI Assistant Tool */}
      <PolicyAssistant />
    </Layout>
  );
};

export default App;
