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
              { id: 'medical', title: '3. Fitness vs Medical' },
              { id: 'accuracy', title: '4. Data Accuracy' },
              { id: 'storage', title: '5. Storage & Security' },
              { id: 'sharing', title: '6. Data Sharing' },
              { id: 'ads', title: '7. Ads & Analytics' },
              { id: 'notifications', title: '8. Notifications' },
              { id: 'retention', title: '9. Data Retention' },
              { id: 'deletion', title: '10. Account Deletion' },
              { id: 'children', title: '11. Children\'s Privacy' },
              { id: 'changes', title: '12. Policy Changes' },
              { id: 'contact', title: '13. Contact' },
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
              Recova respects your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the Recova mobile application.
            </p>
            <p className="text-slate-500 mt-4">
              By using Recova, you agree to this Privacy Policy.
            </p>
          </div>

          <Section id="collect" title="1. Information We Collect">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6">
              <h4 className="text-lg font-bold text-slate-800 mb-3">a) User-Provided Data</h4>
              <p className="mb-4">Recova may collect the following data you provide:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Age', 'Gender', 'Height and weight', 'Sleep quality inputs', 'Training intensity inputs', 'Recovery interactions'].map(item => (
                  <div key={item} className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl text-emerald-900 text-sm font-semibold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-800 mb-3">b) App Usage Data</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Feature interactions</li>
                <li>App navigation events</li>
                <li>Crash and performance data</li>
              </ul>
            </div>
          </Section>

          <Section id="usage" title="2. How We Use Your Data">
            <p>Your data is used to:</p>
            <ul className="space-y-3 list-disc ml-6 marker:text-emerald-500">
              <li>Generate recovery scores and readiness insights</li>
              <li>Personalize recovery recommendations</li>
              <li>Improve app performance and features</li>
              <li>Send notifications (if enabled)</li>
            </ul>
          </Section>

          <Section id="medical" title="3. Fitness Data Is Not Medical Data">
            <p className="p-5 bg-blue-50 text-blue-800 rounded-2xl border border-blue-100 font-medium">
              All recovery metrics, readiness scores, and CNS balance indicators are fitness-derived estimates, not medical or neurological health records.
            </p>
            <p className="mt-4">Recova does not collect clinical, diagnostic, or medical health data.</p>
          </Section>

          <Section id="accuracy" title="4. Data Accuracy Disclaimer">
            <p>Recovery insights depend on user-reported information. Recova does not guarantee accuracy or completeness of generated insights.</p>
          </Section>

          <Section id="storage" title="5. Data Storage & Security">
            <p>We implement reasonable security measures to protect user data. However, no system can guarantee complete security.</p>
          </Section>

          <Section id="sharing" title="6. Data Sharing">
            <p>Recova:</p>
            <ul className="list-disc ml-6 space-y-2 marker:text-emerald-500">
              <li>Does not sell personal data</li>
              <li>Does not share identifiable fitness data with advertisers</li>
              <li>May use anonymized analytics for performance improvements</li>
            </ul>
          </Section>

          <Section id="ads" title="7. Advertisements & Analytics">
            <p>Third-party services may be used for:</p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Analytics</li>
              <li>Advertising</li>
            </ul>
            <p className="bg-slate-50 p-4 rounded-xl text-sm border-l-4 border-slate-300 italic">
              These services do not receive access to personally identifiable health or fitness data.
            </p>
          </Section>

          <Section id="notifications" title="8. Notifications">
            <p>You may receive notifications related to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Logging reminders</li>
              <li>App updates</li>
            </ul>
            <p className="mt-4">You can disable notifications at any time through your device settings.</p>
          </Section>

          <Section id="retention" title="9. Data Retention">
            <p>We retain user data only as long as necessary to provide App functionality or until the user deletes their account.</p>
          </Section>

          <Section id="deletion" title="10. Account Deletion">
            <p>Users can request account deletion through the App. Upon deletion, associated data will be removed as required by applicable laws.</p>
          </Section>

          <Section id="children" title="11. Children's Privacy">
            <p>Recova is not intended for users under the age of 13. We do not knowingly collect data from children.</p>
          </Section>

          <Section id="changes" title="12. Changes to This Policy">
            <p>We may update this Privacy Policy periodically. Continued use of the App constitutes acceptance of changes.</p>
          </Section>

          <Section id="contact" title="13. Contact">
            <p className="mb-6 leading-relaxed">For questions or concerns, contact us at:</p>
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