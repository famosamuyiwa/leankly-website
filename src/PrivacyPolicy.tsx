import Footer from "./Footer";
import Navigation from "./Navigation";

interface PrivacyPolicyProps {
  onNavigate: (page: string) => void;
}

function PrivacyPolicy({ onNavigate: _onNavigate }: PrivacyPolicyProps) {
  return (
    <>
      {/* Navigation */}
      <Navigation currentPage="privacy" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-300 mb-6">
              Privacy <span className="text-primary-300">Policy</span>
            </h1>
            <p className="text-xl text-black-100 mb-12 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>
            <div className="text-sm text-black-100">
              <p>Last updated: November 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                1. Introduction
              </h2>
              <p className="text-black-100 mb-4">
                Leankly ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our mobile
                application and related services (collectively, the "Service").
              </p>
              <p className="text-black-100">
                By using our Service, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with our policies and practices, please do not use our Service.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-black-100 mb-4">
                We may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Profile information and preferences</li>
                <li>Payment and billing information</li>
                <li>Government-issued identification for verification</li>
                <li>Property details and rental history</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                2.2 Device and Usage Information
              </h3>
              <p className="text-black-100 mb-4">
                We automatically collect certain information about your device
                and how you use our Service:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Device type, operating system, and browser information</li>
                <li>IP address and general location data</li>
                <li>App usage patterns and preferences</li>
                <li>Search queries and property views</li>
                <li>Crash reports and performance data</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                2.3 Location Information
              </h3>
              <p className="text-black-100">
                With your consent, we may collect precise location information
                to help you find nearby properties and provide location-based
                services. You can control location permissions through your
                device settings.
              </p>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-black-100 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>
                  Provide, maintain, and improve our rental platform services
                </li>
                <li>Process transactions and manage payments</li>
                <li>Verify user identities and prevent fraud</li>
                <li>Send notifications about properties and bookings</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-black-100 mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                circumstances:
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                4.1 Service Providers
              </h3>
              <p className="text-black-100 mb-4">
                We may share information with trusted third-party service
                providers who assist us in operating our platform, such as:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Payment processors for secure transactions</li>
                <li>Cloud hosting providers for data storage</li>
                <li>Analytics services to improve our platform</li>
                <li>Customer support tools for better service</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                4.2 Legal Requirements
              </h3>
              <p className="text-black-100 mb-4">
                We may disclose your information if required by law or in
                response to:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Valid legal requests from government authorities</li>
                <li>Court orders or subpoenas</li>
                <li>Protection of our rights, property, or safety</li>
                <li>Prevention of fraud or security threats</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                4.3 Business Transfers
              </h3>
              <p className="text-black-100">
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred as part of the business
                transaction, subject to the same privacy protections.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                5. Data Security
              </h2>
              <p className="text-black-100 mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-black-100">
                However, no method of transmission over the internet or
                electronic storage is 100% secure. We cannot guarantee absolute
                security but are committed to protecting your information to the
                best of our ability.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                6. Data Retention
              </h2>
              <p className="text-black-100 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services</li>
              </ul>
              <p className="text-black-100">
                When we no longer need your information, we will securely delete
                or anonymize it in accordance with applicable laws.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="text-black-100 mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a portable
                  format
                </li>
                <li>
                  <strong>Restriction:</strong> Limit how we process your
                  information
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain processing
                  activities
                </li>
              </ul>
              <p className="text-black-100">
                To exercise these rights, please contact us using the
                information provided below.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-black-100 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze how you use our platform</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve our services and user experience</li>
              </ul>
              <p className="text-black-100">
                You can control cookie settings through your browser
                preferences. However, disabling certain cookies may affect the
                functionality of our platform.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                9. Third-Party Services
              </h2>
              <p className="text-black-100 mb-4">
                Our platform may contain links to third-party websites or
                integrate with third-party services. We are not responsible for
                the privacy practices of these external services. We encourage
                you to review their privacy policies before providing any
                personal information.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-black-100">
                Our Service is not intended for children under 18 years of age.
                We do not knowingly collect personal information from children
                under 18. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us
                immediately.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                11. International Data Transfers
              </h2>
              <p className="text-black-100">
                Your information may be transferred to and processed in
                countries other than your own. We ensure that such transfers
                comply with applicable data protection laws and implement
                appropriate safeguards to protect your information.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-black-100 mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Posting the updated policy on our platform</li>
                <li>Sending you an email notification</li>
                <li>Displaying a notice in our mobile app</li>
              </ul>
              <p className="text-black-100">
                Your continued use of our Service after any changes constitutes
                acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
