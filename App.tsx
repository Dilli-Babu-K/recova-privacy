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
              { id: 'collect', title: '1. Info We Collect' },
              { id: 'usage', title: '2. How We Use Info' },
              { id: 'security', title: '3. Storage & Security' },
              { id: 'permissions', title: '4. Permissions & Opt-Out' },
              { id: 'deletion', title: '5. Account Deletion' },
              { id: 'changes', title: '6. Policy Changes' },
              { id: 'contact', title: '7. Contact Us' },
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
              Recova ("we", "us", or "our") is committed to protecting the privacy and security of your personal, training, and sleep-related data. This Privacy Policy describes how we collect, store, process, and protect your information when you use our mobile application ("Recova" or "App").
            </p>
            <p className="mt-4 text-slate-600">
              By creating an account or using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          <Section id="collect" title="1. Information We Collect">
            <p className="mb-6">To calculate your daily recovery scores and provide wellness recommendations, we collect the following categories of information:</p>
            
            <div className="space-y-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">A. Account Information</h3>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-600">
                  <li><strong>Google Profile Data:</strong> When you sign in using Google, we collect your name, email address, profile picture URL, and a unique User ID (UID) via Google Firebase Authentication. This is required to create your profile and keep your data secure.</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">B. User-Logged Data (Manual Logs)</h3>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-600">
                  <li><strong>Subjective Sleep Quality:</strong> Ratings of your sleep quality (e.g., "Poor", "Okay", "Good").</li>
                  <li><strong>Training & Workload Session Logs:</strong> Data regarding training type, duration, and subjective intensity level (e.g., "Hard", "Moderate", "Light").</li>
                  <li><strong>Completed Recovery Actions:</strong> Wellness habits or checklists completed daily.</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">C. Physical Activity & Sleep Duration Data</h3>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-600">
                  <li><strong>Motion & Sleep Sensor Data:</strong> If you grant the physical activity permission, the App accesses local, on-device motion sensors and Android's Google Play Services Sleep API.</li>
                  <li><strong>Synced Timestamps:</strong> Automated estimates of your bedtime, waketime, and calculated total sleep duration.</li>
                  <li><strong>Manual Adjustments:</strong> Any manual adjustments or corrections you make to your bedtimes and waketimes.</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">D. Technical & Device Information</h3>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-600">
                  <li><strong>Device Metadata:</strong> Local time zones, platform type (iOS or Android), and app crash diagnostics.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="usage" title="2. How We Use Your Information">
            <p>We process your data strictly to run the App's core services and calculate your morning recovery scores:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>To calculate daily Recovery Scores using our baseline algorithms.</li>
              <li>To synchronize your historical graphs and stats securely across your devices.</li>
              <li>To calibrate and generate automatic sleep duration predictions.</li>
              <li>To personalize wellness and physical therapy checklists.</li>
            </ul>
            <div className="mt-6 p-4 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-100 text-sm">
              <p className="font-bold">Health & Activity Data Protection Guarantee:</p>
              <p className="mt-1 text-emerald-800">We do not sell, rent, or lease your physical activity or sleep data to any third-party advertising networks, data brokers, or marketing platforms. All sensor data is processed locally and is used exclusively to calculate your personalized scores.</p>
            </div>
          </Section>

          <Section id="security" title="3. Data Storage & Security">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Cloud Storage:</strong> Your logs are securely stored in Google Firebase Firestore databases.</li>
              <li><strong>Security Protocols:</strong> We implement strict Firebase Security Rules that ensure only you, through your authenticated Google account, can access your personal user path.</li>
              <li><strong>Local Caching:</strong> Certain data is cached temporarily on your device to enable offline usability.</li>
            </ul>
          </Section>

          <Section id="permissions" title="4. Permissions, Control, & Opt-Out">
            <p className="mb-4">You are in complete control of the device permissions you share with Recova:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Physical Activity & Sleep Sync:</strong> You can toggle or revoke sensor permissions at any time via the "Devices & Sync" menu under App Settings, or directly through your device's system settings.</li>
              <li><strong>Notifications & Alarms:</strong> You can disable reminders at any time in system notification settings.</li>
            </ul>
          </Section>

          <Section id="deletion" title="5. Permanent Account & Data Deletion">
            <p className="mb-4">You have the right to erase all your personal data at any time.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>How to Delete:</strong> Navigate to <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-semibold">More &gt; Privacy &amp; Data &gt; Delete Account</code> and follow the security verification steps.</li>
              <li><strong>Immediate Purge:</strong> Once verified, your Firebase Authentication profile, along with your entire Firestore recovery history, logs, and metrics, is permanently and irreversibly deleted from our servers.</li>
            </ul>
          </Section>

          <Section id="changes" title="6. Changes to this Policy">
            <p>We may update this Privacy Policy from time to time to reflect changes in our services or legal obligations. We will notify you of any changes by updating the "Last Updated" date at the top of this page.</p>
          </Section>

          <Section id="contact" title="7. Contact Us">
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