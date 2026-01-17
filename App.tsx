
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
              { id: 'collect', title: '1. Information We Collect' },
              { id: 'usage', title: '2. How We Use Info' },
              { id: 'storage', title: '3. Data Storage' },
              { id: 'sharing', title: '4. Data Sharing' },
              { id: 'retention', title: '5. Data Retention' },
              { id: 'rights', title: '6. Your Rights' },
              { id: 'children', title: "7. Children's Privacy" },
              { id: 'changes', title: '8. Changes to Policy' },
              { id: 'contact', title: '9. Contact Us' },
            ].map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className="block py-2 text-slate-500 hover:text-emerald-600 transition-all font-medium border-l-2 border-transparent hover:border-emerald-600 pl-4"
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
              Recova respects your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the Recova mobile application.
            </p>
            <p className="text-slate-500 mt-4">
              By using Recova, you agree to this Privacy Policy.
            </p>
          </div>

          <Section id="collect" title="1. Information We Collect">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6">
              <h4 className="text-lg font-bold text-slate-800 mb-3">a) Account Information</h4>
              <p className="mb-4">Depending on how you use the app, we may collect:</p>
              <ul className="list-none space-y-3">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">01</span>
                  <span><strong>Google account identifier</strong> (if you sign in with Google)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">02</span>
                  <span><strong>Anonymous user identifier</strong> (if you use Guest mode)</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-slate-50 rounded-xl text-sm border-l-4 border-slate-300 italic">
                We do not access your Google password, emails, contacts, or personal files.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6">
              <h4 className="text-lg font-bold text-slate-800 mb-3">b) Health & Recovery Data (User-Provided)</h4>
              <p className="mb-4">Recova collects only the data you <strong>manually enter</strong>, such as:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Height and weight', 'Sleep quality inputs', 'Training intensity inputs', 'Recovery actions', 'Recovery scores and trends'].map(item => (
                  <div key={item} className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl text-emerald-900 text-sm font-semibold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-red-50 text-red-800 rounded-2xl border border-red-100">
                <p className="font-bold text-sm mb-2 uppercase tracking-tight">Recova does NOT collect:</p>
                <ul className="text-sm space-y-1.5 opacity-90 list-disc ml-5 font-medium">
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

          <Section id="usage" title="2. How We Use Your Information">
            <p>We use your information to:</p>
            <ul className="space-y-3 list-disc ml-6 marker:text-emerald-500">
              <li>Calculate recovery and readiness scores</li>
              <li>Display trends and insights</li>
              <li>Improve app performance and user experience</li>
              <li>Maintain secure authentication</li>
            </ul>
            <p className="font-bold text-slate-900 mt-6 p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-600">
              We do not sell or rent your personal data.
            </p>
          </Section>

          <Section id="storage" title="3. Data Storage & Security">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-emerald-200 transition-colors">
                <h5 className="font-bold text-slate-800 mb-2">Google Firebase</h5>
                <p className="text-sm text-slate-500">Data is stored securely using industry-standard cloud infrastructure provided by Google.</p>
              </div>
              <div className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-emerald-200 transition-colors">
                <h5 className="font-bold text-slate-800 mb-2">Encryption</h5>
                <p className="text-sm text-slate-500">All data transmitted between your device and our servers is encrypted using SSL/TLS protocols.</p>
              </div>
            </div>
            <p className="text-sm italic mt-4 text-slate-400">While we take reasonable measures, no system can be guaranteed to be 100% secure.</p>
          </Section>

          <Section id="sharing" title="4. Data Sharing">
            <p>Your data is shared only with:</p>
            <ul className="list-disc ml-6 mb-4 marker:text-emerald-500">
              <li><strong>Google Firebase services</strong> (for authentication and secure storage)</li>
            </ul>
            <p className="bg-slate-900 text-slate-300 p-6 rounded-2xl border border-slate-800 font-medium">
              We do not share your data with advertisers, data brokers, or unrelated third parties.
            </p>
          </Section>

          <Section id="retention" title="5. Data Retention">
            <p>Your data is retained:</p>
            <ul className="list-disc ml-6 marker:text-emerald-500">
              <li>While your account is active</li>
              <li>Until you request deletion</li>
            </ul>
            <p className="mt-4">You may request deletion at any time, and your data will be purged from our active databases.</p>
          </Section>

          <Section id="rights" title="6. Your Rights">
            <p className="mb-6">You have the full right to manage your data:</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Access your data', 'Correct your data', 'Delete your data', 'Withdraw consent'].map(r => (
                <div key={r} className="bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 shadow-sm text-center uppercase tracking-wider">{r}</div>
              ))}
            </div>
            <div className="p-8 bg-emerald-600 text-white rounded-[2rem] shadow-2xl shadow-emerald-200/50">
              <p className="font-bold mb-3 uppercase text-xs tracking-widest opacity-80">Data Deletion Request</p>
              <p className="mb-4 text-emerald-50">To request data deletion, please contact us at:</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl md:text-3xl font-extrabold hover:text-emerald-200 transition-colors break-all underline decoration-white/30 underline-offset-8">
                {CONTACT_EMAIL}
              </a>
            </div>
          </Section>

          <Section id="children" title="7. Children's Privacy">
            <p>Recova is not intended for users under the age of 13. We do not knowingly collect data from children. If we discover we have inadvertently collected data from a child under 13, we will delete it immediately.</p>
          </Section>

          <Section id="changes" title="8. Changes to This Policy">
            <p>We may update this Privacy Policy as our app evolves. Any changes will be reflected directly on this page and within the Recova mobile application settings.</p>
          </Section>

          <Section id="contact" title="9. Contact Us">
            <p className="mb-6 leading-relaxed">If you have questions about this Privacy Policy or how we handle your information, please reach out to us:</p>
            <div className="flex flex-col items-start gap-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-4 bg-slate-900 text-white px-6 py-4 rounded-2xl hover:bg-emerald-600 transition-all duration-300">
                <div className="font-bold border-r border-white/20 pr-4">Email Us</div>
                <div className="font-medium text-emerald-400 group-hover:text-white transition-colors">{CONTACT_EMAIL}</div>
              </a>
            </div>
          </Section>
        </article>
      </div>
    </Layout>
  );
};

export default App;
