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
              { id: 'legal', title: '3. Legal Basis (GDPR)' },
              { id: 'usage', title: '4. Usage' },
              { id: 'security', title: '5. Storage & Security' },
              { id: 'retention', title: '6. Deletion & Retention' },
              { id: 'children', title: '7. Children’s Privacy' },
              { id: 'rights', title: '8. Your Rights' },
              { id: 'contact', title: '9. Contact' },
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
              At RECOVA, we are committed to protecting your recovery data and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your information across our mobile application and services.
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
                <p className="mb-4 text-sm">When using Recova, you voluntarily provide:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <li className="flex items-start gap-2 bg-emerald-50 p-3 rounded text-sm text-emerald-900"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div> <div><strong>Profile Data:</strong> Age, gender, height, weight, and training experience level.</div></li>
                  <li className="flex items-start gap-2 bg-emerald-50 p-3 rounded text-sm text-emerald-900"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div> <div><strong>Log Data:</strong> Sleep quality/duration logs and training intensity/activity logs.</div></li>
                  <li className="flex items-start gap-2 bg-emerald-50 p-3 rounded text-sm text-emerald-900"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div> <div><strong>Preferences:</strong> App settings and notification preferences.</div></li>
                  <li className="flex items-start gap-2 bg-emerald-50 p-3 rounded text-sm text-emerald-900"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div> <div><strong>Communication:</strong> Feedback or support messages sent to our team.</div></li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">2.2 Automatically Collected Information</h3>
                <p className="mb-4 text-sm">To maintain app quality, we use <strong>Google Firebase</strong> to collect:</p>
                <ul className="list-disc ml-5 space-y-2 text-sm">
                  <li><strong>Device Information:</strong> Model, OS version, and unique device identifiers.</li>
                  <li><strong>Usage Analytics:</strong> Screen opens and feature interactions (anonymized).</li>
                  <li><strong>Diagnostics:</strong> Crash logs and performance metrics to identify bugs.</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-red-900 mb-3">2.3 Information We Do NOT Collect</h3>
                <p className="mb-4 text-sm text-red-800">We do NOT access or collect:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-red-800">
                  <li className="flex items-center gap-2"><span className="font-bold">×</span> GPS location or movement tracking.</li>
                  <li className="flex items-center gap-2"><span className="font-bold">×</span> Heart rate or physiological biometric data from wearables.</li>
                  <li className="flex items-center gap-2"><span className="font-bold">×</span> Health records or medical history.</li>
                  <li className="flex items-center gap-2"><span className="font-bold">×</span> Financial or payment information.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="legal" title="3. Legal Basis for Processing (GDPR)">
            <p>For users in the European Economic Area (EEA), we process your data based on:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Consent:</strong> Your explicit agreement during onboarding.</li>
              <li><strong>Performance of a Contract:</strong> To provide the recovery insights you requested.</li>
              <li><strong>Legitimate Interests:</strong> To improve app stability and security.</li>
            </ul>
          </Section>

          <Section id="usage" title="4. How We Use Your Information">
            <p>Your information is used solely to:</p>
            <ul className="list-disc ml-6 space-y-2 marker:text-emerald-500">
              <li>Generate perceived recovery insights.</li>
              <li>Provide awareness-based guidance.</li>
              <li>Detect and fix software crashes.</li>
              <li>Respond to your support requests.</li>
            </ul>
            <p className="mt-4 font-medium italic text-slate-500">Recova does not use your data for advertising or profiling.</p>
          </Section>

          <Section id="security" title="5. Data Storage & Security">
            <p>We use <strong>Google Firebase</strong> (ISO 27001 certified) for data storage. We apply industry-standard safeguards including:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Encryption:</strong> Data is encrypted in transit and at rest.</li>
              <li><strong>Access Control:</strong> Limited internal access to user data.</li>
            </ul>
            <p className="mt-4 text-slate-500 italic">However, please note that no digital system is 100% secure.</p>
          </Section>

          <Section id="retention" title="6. Data Deletion & Retention">
            <p className="mb-4">We retain your data only as long as your account is active.</p>
            <ul className="list-disc ml-6 space-y-4">
              <li><strong>Account Deletion:</strong> You can delete your account via <strong>More &gt; Privacy &gt; Delete Account</strong>. This immediately triggers the permanent deletion of your profile and history from our servers.</li>
              <li><strong>Inactivity:</strong> We may delete accounts that have been inactive for more than 2 years.</li>
            </ul>
          </Section>

          <Section id="children" title="7. Children’s Privacy">
            <p><strong>RECOVA is strictly intended for users aged 18 and older.</strong> We do not knowingly collect information from anyone under 18.</p>
          </Section>

          <Section id="rights" title="8. Your Rights (EEA & California)">
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li><strong>Access:</strong> Request a copy of your data.</li>
              <li><strong>Correction:</strong> Edit your profile or logs at any time.</li>
              <li><strong>Erasure:</strong> Request that we delete all your data.</li>
              <li><strong>Portability:</strong> Request your data in a structured format.</li>
            </ul>
            <div className="bg-slate-100 p-4 rounded-xl inline-block">
              <p className="text-sm font-medium mb-1">To exercise these rights, contact us at:</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 font-bold hover:underline">{CONTACT_EMAIL}</a>
            </div>
          </Section>

          <Section id="contact" title="9. Contact Information">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
              <p className="font-bold mb-2 uppercase text-xs tracking-widest opacity-70">For privacy-related questions or data requests</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl font-bold hover:text-emerald-400 transition-colors underline decoration-emerald-500 underline-offset-4 block mb-4">
                {CONTACT_EMAIL}
              </a>
              <p className="text-slate-400 font-medium">Developer: RECOVA Team</p>
            </div>
          </Section>
        </article>
      </div>
    </Layout>
  );
};

export default App;