import React from 'react';
import { Layout } from './components/Layout';
import { Icons, APP_NAME, LAST_UPDATED, CONTACT_EMAIL, ENTITY_NAME, LOCATION_JURISDICTION } from './constants';

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
              { id: 'benchmarks', title: '1E. Sleep Comparison & Benchmark Content' },
              { id: 'sharing', title: '2. No Sale or Advertising Use' },
              { id: 'security', title: '3. Data Storage & Security' },
              { id: 'deletion', title: '4. Account Deletion & Privacy Rights' },
              { id: 'permissions', title: '5. Permissions & Controls' },
              { id: 'children', title: '6. Children’s Privacy' },
              { id: 'changes', title: '7. Policy Changes' },
              { id: 'contact', title: '8. Contact Information' },
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
              At <strong>RECOVA</strong>, we are committed to protecting the privacy, confidentiality, and security of your personal, training, and sleep recovery information. This Privacy Policy outlines how we collect, store, process, use, and delete your information when you use our Android mobile application ("Recova" or "App").
            </p>
            <p className="mt-4 text-slate-600">
              By using Recova, you acknowledge that you have read this Privacy Policy and understand how your information is handled as described below. If you do not agree with any part of this policy, please discontinue use of the App.
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
                  <strong>Purpose:</strong> Used to compute your daily Recovery Readiness Score (0–100%) and select relevant recovery protocols.
                </p>
                <div className="mt-3 p-3 bg-amber-50/80 rounded-lg border border-amber-200/70 text-xs text-amber-900">
                  <strong>Non-Medical & Non-Biometric Scope:</strong> Recova collects only subjective athlete-reported ratings and non-clinical duration metrics. We do <strong>NOT</strong> collect, process, or monitor biological clinical markers, ECG, blood pressure, blood glucose, or medical diagnostic telemetry.
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">C. Physical Activity & On-Device Sensors (ACTIVITY_RECOGNITION)</h3>
                <p className="mb-2 text-sm text-slate-600">If you grant physical activity permission, Recova uses Android device activity and sensor data, together with Google Play services Sleep detection, to estimate sleep duration, including estimated bedtime and wake time.</p>
                <ul className="list-disc ml-5 space-y-3 text-sm text-slate-600 mt-4">
                  <li><strong>On-Device Local Processing:</strong> Recova processes the raw activity/sensor data used by its own sleep-duration algorithm locally on your device. Recova does not upload those raw micro-epoch records to its servers.</li>
                  <li><strong>Raw vs. Derived Sleep Data:</strong> Raw activity/sensor micro-epoch data used by Recova's local sleep algorithm remains on the device and is not uploaded by Recova. Recova may store derived sleep summaries, such as estimated bedtime, wake time, sleep duration, and related recovery metrics, in Firebase Firestore to provide your historical recovery features.</li>
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

          <Section id="benchmarks" title="1E. Sleep Comparison & Benchmark Content">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-800 mb-2">E. Sleep Comparison &amp; Benchmark Content</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recova displays contextual sleep comparison cards referencing animals, athletes, historical figures, and science scenarios (such as "Elite Basketball MVP," "Grand Slam Athlete," "Glymphatic Rest Cycles," or "ISS Space Orbits"). These comparisons are shown for motivational context and general wellness awareness only.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                The reference hours shown in these cards are approximate general figures sourced from publicly available information. They are not exact, verified, or scientifically validated measurements. These cards do not represent endorsements by, affiliations with, or verified data from any real individual, sports organisation, scientific body, or institution. Recova makes no claim that any user's sleep is medically equivalent to or clinically comparable to any referenced benchmark.
              </p>
            </div>
          </Section>

          <Section id="sharing" title="2. No Sale or Advertising Use of Personal Data">
            <p className="mb-4">Recova does not sell or rent personal information or health-related information to advertisers, data brokers, or other commercial partners.</p>
            <p className="mb-4">We explicitly disable and remove Google Advertising ID (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-slate-600">AD_ID</code>) tracking (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-slate-600">com.google.android.gms.permission.AD_ID</code>) from our software build. We use your information to provide, maintain, secure, and improve Recova's fitness, recovery, and sleep-related functionality, as described in this Privacy Policy.</p>
            <p className="text-sm text-slate-500">As described in Section 3, we rely on trusted infrastructure service providers (such as Google Cloud and Firebase) to store and process data strictly on our behalf to operate the service.</p>
          </Section>

          <Section id="security" title="3. Data Storage, Encryption & Security">
            <ul className="list-disc ml-6 space-y-3">
              <li><strong>Cloud Infrastructure:</strong> Account profiles, streaks, and recovery logs are encrypted in transit (SSL/TLS) and at rest within Google Firebase Firestore databases.</li>
              <li><strong>Access Control:</strong> Access is governed by strict Firebase Security Rules ensuring only your authenticated account UID can read or write your personal data.</li>
              <li><strong>Local Storage:</strong> Ephemeral state flags (such as daily notification delivery status) are cached locally on your device in local device storage (Android SharedPreferences).</li>
              <li><strong>Third-Party Infrastructure (Data Subprocessors):</strong> We rely on industry-standard cloud infrastructure to operate the service: <strong>Google Cloud / Firebase</strong> (Identity authentication, Firestore database, and Cloud Messaging). We do not use any secondary third-party advertising or commercial analytics SDKs.</li>
            </ul>
          </Section>

          <Section id="deletion" title="4. Account Deletion, Erasure & Privacy Rights">
            <p className="mb-4">Depending on your jurisdiction, you may have rights to access, correct, export, or delete your personal information.</p>
            
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2">Method 1: In-App Instant Account Deletion</h4>
                <ol className="list-decimal ml-5 space-y-1 mb-3 text-sm text-slate-700">
                  <li>Open the Recova App.</li>
                  <li>Navigate to <strong>More &gt; Privacy &amp; Data &gt; Delete Account</strong>.</li>
                  <li>Verify your identity via your Google Account authentication.</li>
                </ol>
                <p className="text-sm text-slate-600 italic">Your account profile, streaks, workout logs, and historical sleep records will be permanently deleted from our Firestore cloud servers.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2">Method 2: Web / Email Account Deletion Request</h4>
                <p className="text-sm text-slate-700">
                  If you cannot access the mobile application, you can submit a deletion request by emailing <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 font-medium hover:underline">{CONTACT_EMAIL}</a> with the subject line <em>"Account Deletion Request"</em> from your registered Google email address. We will process verified deletion requests within <strong>48 hours</strong> and delete the personal data associated with your Recova account that we are required and able to delete under applicable law and our data-retention practices.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2">Privacy Rights</h4>
                <p className="text-sm text-slate-600 mb-3">Depending on your location and applicable law, you may have rights relating to access, correction, deletion, portability, or other aspects of your personal information:</p>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                  <li><strong>Access &amp; Portability:</strong> Request a digital copy of your personal data and historical workout and recovery logs.</li>
                  <li><strong>Rectification:</strong> Request corrections to inaccurate personal account data.</li>
                  <li><strong>Erasure / Deletion:</strong> Request the permanent deletion of your stored account and recovery data via in-app or email request.</li>
                  <li><strong>Non-Discrimination:</strong> We will never degrade app performance, restrict features, or discriminate against you for exercising your privacy rights.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="permissions" title="5. Permissions & User Controls">
            <p className="mb-4">You can grant or revoke device permissions at any time:</p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li><strong>Physical Activity Permission:</strong> Control via <em>Android Settings &gt; Apps &gt; Recova &gt; Permissions &gt; Physical Activity</em>.</li>
              <li><strong>Notifications &amp; Alarms:</strong> Control via <em>Android Settings &gt; Notifications &gt; Recova</em>.</li>
            </ul>
            <p className="text-sm text-slate-500 italic">Disabling permissions may deactivate automatic sleep duration estimation, but manual sleep confirmation will remain fully operational.</p>
          </Section>

          <Section id="children" title="6. Children’s Privacy">
            <p className="mb-4">
              Recova is strictly designed for athletes, fitness enthusiasts, and general wellness users. You must be at least 13 years of age to use this App (or at least 16 years of age if you reside in the European Economic Area or United Kingdom). We do not knowingly collect, solicit, or maintain personal information, training logs, or sleep records from users who do not meet these minimum age requirements.
            </p>
            <p className="mb-4">
              Access to Recova requires a valid Google Account. Google's own terms of service independently enforce minimum age restrictions at account creation. Our in-app registration flow additionally verifies minimum age eligibility before account access is granted.
            </p>
            <p>
              If you are a parent or legal guardian and discover that your child has created an account without meeting these age requirements, please contact us immediately at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 font-medium hover:underline">
                {CONTACT_EMAIL}
              </a>
              . Upon verification, we will promptly delete all associated account records, training data, and sleep logs from our servers.
            </p>
          </Section>

          <Section id="changes" title="7. Changes to this Privacy Policy">
            <p>We may update this Privacy Policy from time to time to reflect operational updates or regulatory standards. Material updates will be posted on this page with a revised "Last Updated" date.</p>
          </Section>

          <Section id="contact" title="8. Contact Information">
            <p className="mb-6">
              If you have any questions, feedback, or requests regarding this Privacy Policy, your personal data, or your privacy rights, please contact us:
            </p>
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-5">
              <div>
                <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider block">Official Contact Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl font-bold hover:text-emerald-400 transition-colors underline decoration-emerald-500 underline-offset-4 block mt-1">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider block">Operating Entity</span>
                <span className="text-slate-100 font-semibold text-lg">{ENTITY_NAME}</span>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider block">Location &amp; Jurisdiction</span>
                <span className="text-slate-200 font-medium">{LOCATION_JURISDICTION}</span>
              </div>
            </div>
          </Section>
        </article>
      </div>
    </Layout>
  );
};

export default App;