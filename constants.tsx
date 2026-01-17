
import React from 'react';

export const APP_NAME = "RECOVA";
// Dynamically set last updated to today's date
export const LAST_UPDATED = new Date().toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});
export const CONTACT_EMAIL = "recova.app0@gmail.com";

export const POLICY_TEXT_FOR_AI = `
Recova Privacy Policy (Last Updated: ${LAST_UPDATED})
1. Information We Collect:
- Account Information: Google ID, Anonymous ID. We don't access passwords, emails, or personal files.
- Health Data: Manually entered only (Height, Weight, Sleep, Training, Recovery actions). We DO NOT collect medical records, biometric sensors, GPS, or messages.
- Usage: Crashes and diagnostics.
2. How We Use Info: Calculate scores, display trends, improve app, secure authentication. We do not sell data.
3. Storage: Google Firebase, encrypted in transit.
4. Sharing: Only with Google Firebase. No advertisers.
5. Retention: While active or until deletion request.
6. User Rights: Access, correct, delete, withdraw consent. Contact recova.app0@gmail.com.
7. Children: Not for under 13s.
8. Changes: Updates reflected in app/on page.
9. Contact: recova.app0@gmail.com.
`;

export const Icons = {
  // Refined Logo icon to match the provided meditation silhouette with halo
  Logo: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Halo/Ring */}
      <path d="M12 4.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm0 1c1.381 0 2.5 1.119 2.5 2.5S13.381 10.5 12 10.5 9.5 9.381 9.5 8s1.119-2.5 2.5-2.5z" />
      {/* Head */}
      <circle cx="12" cy="8" r="1.8" />
      {/* Body in lotus position */}
      <path d="M12 10.5c-1.5 0-2.8.8-3.5 2l-1.5 2.5c-.3.5-.1 1.2.4 1.5s1.2.1 1.5-.4l1.1-1.8v1.7c0 .5.4.9.9.9h1.2c.5 0 .9-.4.9-.9v-1.7l1.1 1.8c.3.5 1 .7 1.5.4s.7-1 .4-1.5l-1.5-2.5c-.7-1.2-2-2-3.5-2z" />
      <path d="M12 16.5c-1.5 0-3 .5-4 1.5s-1.5 2.5-1.5 3c0 .3.2.5.5.5h10c.3 0 .5-.2.5-.5 0-.5-.5-2-1.5-3s-2.5-1.5-4-1.5z" />
      {/* Simplified bottom lotus curve */}
      <path d="M7 20c0-1.5 2-2.5 5-2.5s5 1 5 2.5c0 .5-.5 1-1.5 1h-7c-1 0-1.5-.5-1.5-1z" />
    </svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  Lock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  ),
  Database: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Share: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  ),
  Message: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  )
};
