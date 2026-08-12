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
              { id: 'intro', title: 'Introduction & Overview' },
              { id: 'collect', title: '1. Information We Collect' },
              { id: 'sharing', title: '2. Zero Commercial Data Sharing' },
              { id: 'security', title: '3. Data Storage & Security' },
              { id: 'deletion', title: '4. Account Deletion & Erasure' },
              { id: 'permissions', title: '5. Permissions & Controls' },
              { id: 'children', title: '6. Children’s Privacy' },
              { id: 'changes', title: '7. Policy Changes' },
              { id: 'contact', title: '8. Contact Us' },
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
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Introduction & Overview</h2>
            <div className="h-1.5 w-10 bg-emerald-600 mb-6 rounded-full"></div>
            <p className="text-xl text-slate-800 font-medium leading-relaxed border-l-4 border-emerald-500 pl-6 py-2 bg-emerald-50/30 rounded-r-xl">
              Recova ("we", "us", or "our") is committed to protecting the privacy, confidentiality, and security of your personal, training, and sleep recovery information. This Privacy Policy outlines how we collect, store, process, use, and delete your information when you use our Android mobile application ("Recova" or "App").
            </p>
            <p className="mt-4 text-slate-600">
              By installing, registering, or using Recova, you consent to the data practices described in this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of the App.
            </p>
          </div>

          <Section id="collect" title="1. Information We Collect">
            <div className="space-y-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">A. Account & Profile Information (Firebase Authentication)</h3>
                <p className="mb-2 text-sm text-slate-600">When you register or log in using Google Firebase Authentication, we collect:</p>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-600">
                  <li>Your full name and email address.</li>
                  <li>Your Google profile picture URL.</li>
                  <li>A unique Firebase User Identification string (UID).</li>
                </ul>
                <p className="mt-3 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <strong>Purpose:</strong> Strictly required to authenticate your identity, create your user profile, prevent unauthorized access, and synchronize your historical recovery logs across your devices.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">B. User-Logged Fitness & Athletic Data</h3>
                <p className="mb-2 text-sm text-slate-600">We store the data you manually input, select, or confirm within the App:</p>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-600">
                  <li>Subjective sleep quality ratings ("Poor", "Okay", "Good").</li>
                  <li>Training session logs (workout type, duration, and subjective intensity rating: "Hard", "Moderate", "Rest").</li>
                  <li>Completed daily physical therapy checklists and recovery action items.</li>
                </ul>
                <p className="mt-3 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <strong>Purpose:</strong> Used to compute your daily Recovery Readiness Score (0-100%) and select relevant recovery protocols.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">C. Physical Activity & On-Device Sensors (ACTIVITY_RECOGNITION)</h3>
                <p className="mb-2 text-sm text-slate-600">If you grant physical activity permissions, Recova accesses your local device motion sensors and Android's Google Play Services Sleep API to detect bedtime and wake-up windows.</p>
                <ul className="list-disc ml-5 space-y-3 text-sm text-slate-600 mt-4">
                  <li><strong>On-Device Local Processing Guarantee:</strong> All raw sensor micro-epoch evaluations occur 100% locally on your device processor. Continuous raw motion and ambient light streams are NEVER transmitted to external servers, cloud databases, or third parties.</li>
                  <li><strong>Saved Sleep Summary Logs:</strong> Once your sleep duration is calculated by our local algorithm or manually confirmed by you (bedtime, wake time, WASO, and net hours), the final summary log is saved in Google Firebase Firestore to render your personal historical recovery graphs and calculate your readiness score.</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">D. Device & Technical Diagnostic Data</h3>
                <p className="mb-2 text-sm text-slate-600">We collect minimal technical parameters necessary for application performance:</p>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-600">
                  <li>Device operational metadata (Android OS version, app version, time zone settings).</li>
                  <li>Local crash logs to resolve bugs and performance bottlenecks.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="sharing" title="2. Zero Commercial Data Sharing Guarantee">
            <p className="mb-4"><strong>Google Play Store Data Safety Compliance:</strong> Recova does NOT sell, rent, lease, trade, license, or monetize your physical activity, sleep logs, or personal information to third-party advertising networks, data brokers, analytics platforms, or commercial partners.</p>
            <p>We explicitly disable and remove Google Advertising ID (AD_ID) tracking (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-slate-600">com.google.android.gms.permission.AD_ID</code>) from our software build. All data is processed exclusively to deliver your personal athletic recovery metrics.</p>
          </Section>

          <Section id="security" title="3. Data Storage, Encryption & Security">
            <ul className="list-disc ml-6 space-y-3">
              <li><strong>Cloud Infrastructure:</strong> Account profiles, streaks, and recovery logs are encrypted in transit (SSL/TLS) and at rest within Google Firebase Firestore databases.</li>
              <li><strong>Access Control:</strong> Access is governed by strict Firebase Security Rules ensuring only your authenticated account UID can read or write your personal data.</li>
              <li><strong>Local Storage:</strong> Ephemeral state flags (such as daily notification delivery status) are cached locally on your device in encrypted SharedPreferences.</li>
            </ul>
          </Section>

          <Section id="deletion" title="4. Account Deletion & Data Erasure Protocols">
            <p className="mb-4">You maintain full ownership of your data and possess the absolute right to permanently delete your account and erase all associated records at any time:</p>
            
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2">Method 1: In-App Instant Account Deletion</h4>
                <ol className="list-decimal ml-5 space-y-1 mb-3 text-sm text-slate-700">
                  <li>Open the Recova App.</li>
                  <li>Navigate to <strong>More &gt; Privacy &amp; Data &gt; Delete Account</strong>.</li>
                  <li>Verify your identity via your Google Account authentication.</li>
                </ol>
                <p className="text-sm text-slate-600 italic">Your account profile, streaks, workout logs, and historical sleep records will be permanently and irreversibly purged from our Firestore cloud servers.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2">Method 2: Web / Email Account Deletion Request</h4>
                <p className="text-sm text-slate-700">
                  If you cannot access the mobile application, you can submit a deletion request by emailing <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 font-medium hover:underline">{CONTACT_EMAIL}</a> with the subject line "Account Deletion Request" from your registered Google email address. Your account and all associated data records will be manually verified and permanently erased within 48 hours.
                </p>
              </div>
            </div>
          </Section>

          <Section id="permissions" title="5. Permissions & User Controls">
            <p className="mb-4">You can grant or revoke device permissions at any time:</p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li><strong>Physical Activity Permission:</strong> Control via Android Settings &gt; Apps &gt; Recova &gt; Permissions &gt; Physical Activity.</li>
              <li><strong>Notifications & Alarms:</strong> Control via Android Settings &gt; Notifications &gt; Recova.</li>
            </ul>
            <p className="text-sm text-slate-500 italic">Disabling permissions may deactivate automatic sleep duration estimation, but manual sleep confirmation will remain fully operational.</p>
          </Section>

          <Section id="children" title="6. Children’s Privacy (COPPA & GDPR Compliance)">
            <p>Recova is designed for athletes and active individuals aged 13 and older (or 16 in the European Union). We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected personal data from a child under 13 without verified parental consent, we will delete that information immediately.</p>
          </Section>

          <Section id="changes" title="7. Changes to this Privacy Policy">
            <p>We may update this Privacy Policy from time to time to reflect operational updates or regulatory standards. Material updates will be posted on this page with a revised "Last Updated" date.</p>
          </Section>

          <Section id="contact" title="8. Contact Information">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
              <p className="font-bold mb-2 uppercase text-xs tracking-widest opacity-70">If you have any questions or concerns regarding your privacy or data rights:</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl font-bold hover:text-emerald-400 transition-colors underline decoration-emerald-500 underline-offset-4 block">
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