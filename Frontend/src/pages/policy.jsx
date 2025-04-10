export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Privacy Policy</h2>

      {/* Removed the white box wrapper */}
      <div className="w-full max-w-3xl">
        <p className="text-sm text-gray-700">
          Welcome to Wellie! Your privacy is our priority, and we are dedicated
          to safeguarding your personal information. This Privacy Policy
          outlines how we collect, use, store, and protect your data when you
          use Wellie. By using our app, you agree to the terms outlined in this
          policy.
        </p>

        <h3 className="font-semibold mt-4">1. Information We Collect</h3>
        <p className="text-sm text-gray-700">
          We collect information such as your name, email, journal entries, mood
          tracking data, and user preferences. Additionally, we may collect
          device information, usage data, and error logs to improve app
          functionality.
        </p>

        <h3 className="font-semibold mt-4">2. How We Use Your Information</h3>
        <p className="text-sm text-gray-700">
          We use the collected information to provide and enhance our services,
          improve user experience, secure data, and communicate important
          updates. We do not sell or share your personal data with advertisers.
        </p>

        <h3 className="font-semibold mt-4">3. Data Security & Protection</h3>
        <p className="text-sm text-gray-700">
          Your privacy is our top priority. We implement end-to-end encryption,
          secure cloud storage, and restricted access to protect your journal
          entries and personal data.
        </p>

        <h3 className="font-semibold mt-4">4. Your Privacy Rights & Choices</h3>
        <p className="text-sm text-gray-700">
          You have full control over your data. You can use Wellie without an
          account, export your journal entries, request data deletion, and
          manage notification preferences.
        </p>

        <h3 className="font-semibold mt-4">5. Third-Party Services & Integrations</h3>
        <p className="text-sm text-gray-700">
          We integrate with trusted third-party services for analytics, cloud
          storage, and bug reporting. All services comply with global privacy
          laws.
        </p>

        <h3 className="font-semibold mt-4">6. Cookies & Tracking Technologies</h3>
        <p className="text-sm text-gray-700">
          Wellie does not use invasive tracking. We may use essential cookies
          and performance tracking to improve app stability and user experience.
        </p>

        <h3 className="font-semibold mt-4">7. Data Retention Policy</h3>
        <p className="text-sm text-gray-700">
          We retain user data only as long as necessary. Users can request data
          deletion anytime. Inactive accounts are automatically deleted after a
          specified period.
        </p>

        <h3 className="font-semibold mt-4">8. Children's Privacy</h3>
        <p className="text-sm text-gray-700">
          Wellie is designed for users aged 13 and above. We do not knowingly
          collect data from children under 13. If a child's data is found, we
          will remove it immediately.
        </p>

        <h3 className="font-semibold mt-4">9. Compliance with Global Privacy Laws</h3>
        <p className="text-sm text-gray-700">
          We comply with GDPR, CCPA, PDPA, and other data protection
          regulations. Users have the right to access, correct, or delete their
          data.
        </p>

        <h3 className="font-semibold mt-4">10. Changes to This Privacy Policy</h3>
        <p className="text-sm text-gray-700">
          We may update this Privacy Policy periodically. Any changes will be
          communicated through in-app notifications and email (if subscribed).
        </p>

        <h3 className="font-semibold mt-4">11. Contact Us</h3>
        <p className="text-sm text-gray-700">
          For any privacy-related concerns, reach out to:
          <br />
          📧 Email: [Support Email]
          <br />
          🌍 Website: [Website Link]
          <br />
          📍 Company Address: [Insert Address]
        </p>
      </div>
    </div>
  );
}
