import Footer from "./Footer";
import Navigation from "./Navigation";

interface TermsOfServiceProps {
  onNavigate: (page: string) => void;
}

function TermsOfService({ onNavigate: _onNavigate }: TermsOfServiceProps) {
  return (
    <>
      {/* Navigation */}
      <Navigation currentPage="terms" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-300 mb-6">
              Terms of <span className="text-primary-300">Service</span>
            </h1>
            <p className="text-xl text-black-100 mb-12 max-w-3xl mx-auto">
              Please read these terms carefully before using our platform. By
              using Leankly, you agree to be bound by these terms.
            </p>
            <div className="text-sm text-black-100">
              <p>Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Agreement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-black-100 mb-4">
                These Terms of Service ("Terms") govern your use of the Leankly
                mobile application and related services (collectively, the
                "Service") operated by Leankly ("we," "us," or "our").
              </p>
              <p className="text-black-100 mb-4">
                By accessing or using our Service, you agree to be bound by
                these Terms. If you disagree with any part of these terms, then
                you may not access the Service.
              </p>
              <p className="text-black-100">
                These Terms apply to all visitors, users, and others who access
                or use the Service, including leank creators, leankers, and any
                other users of our platform.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                2. Description of Service
              </h2>
              <p className="text-black-100 mb-4">
                Leankly is a side questing platform that connects people who
                want to share adventures and experiences. Our Service includes:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Leank creation and discovery services</li>
                <li>User verification and identity management</li>
                <li>Leank scheduling and coordination systems</li>
                <li>In-app messaging and communication tools</li>
                <li>Location-based discovery and filtering</li>
                <li>Customer support and safety features</li>
              </ul>
              <p className="text-black-100">
                We reserve the right to modify, suspend, or discontinue any part
                of the Service at any time with reasonable notice.
              </p>
            </div>

            {/* User Accounts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                3. User Accounts and Registration
              </h2>
              <p className="text-black-100 mb-4">
                To use certain features of our Service, you must create an
                account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>
                  Provide accurate, current, and complete information during
                  registration
                </li>
                <li>
                  Maintain and update your account information to keep it
                  accurate
                </li>
                <li>
                  Protect your account credentials and not share them with
                  others
                </li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
                <li>Be at least 18 years old to create an account</li>
              </ul>
              <p className="text-black-100">
                We reserve the right to suspend or terminate accounts that
                violate these Terms or engage in fraudulent activities.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                4. User Responsibilities and Conduct
              </h2>
              <p className="text-black-100 mb-4">
                As a user of our Service, you agree to:
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                4.1 General Conduct
              </h3>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Use the Service only for lawful purposes</li>
                <li>Respect the rights and privacy of other users</li>
                <li>
                  Not engage in harassment, discrimination, or abusive behavior
                </li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>
                  Not interfere with the proper functioning of the Service
                </li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Meet in public places for safety</li>
                <li>Respect others' boundaries and consent</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                4.2 Leank Creators
              </h3>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Provide accurate and truthful leank information</li>
                <li>Ensure leanks are safe and appropriate</li>
                <li>Respond promptly to join requests and messages</li>
                <li>Honor confirmed leank times and locations</li>
                <li>Not discriminate against potential leankers</li>
                <li>Cancel leanks with reasonable notice when necessary</li>
                <li>
                  Create leanks that comply with local laws and regulations
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                4.3 Leankers
              </h3>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Provide accurate personal information</li>
                <li>Respect leank rules and guidelines</li>
                <li>Arrive on time for confirmed leanks</li>
                <li>Communicate honestly with leank creators</li>
                <li>
                  Cancel participation with reasonable notice when necessary
                </li>
                <li>Not engage in illegal activities during leanks</li>
                <li>Respect other participants and their boundaries</li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                5. Prohibited Activities
              </h2>
              <p className="text-black-100 mb-4">
                You may not use our Service to:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Create fake or misleading leanks</li>
                <li>Engage in fraud, scams, or deceptive practices</li>
                <li>Harass, threaten, or intimidate other users</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Spread malware, viruses, or harmful code</li>
                <li>Attempt to reverse engineer our platform</li>
                <li>Use automated systems to access the Service</li>
                <li>Circumvent any security measures</li>
                <li>Create leanks that involve illegal activities</li>
                <li>
                  Use the Service for commercial purposes without authorization
                </li>
                <li>Impersonate other users or entities</li>
              </ul>
            </div>

            {/* Content and Listings */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                6. Content and Leank Listings
              </h2>
              <p className="text-black-100 mb-4">
                Users may submit content, including leank descriptions, photos,
                reviews, and communications. You retain ownership of your
                content but grant us a license to use it.
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                6.1 Content Standards
              </h3>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Content must be accurate, truthful, and not misleading</li>
                <li>Images must be relevant to the leank being created</li>
                <li>Leank descriptions must be honest and complete</li>
                <li>Reviews must be based on actual experiences</li>
                <li>
                  Content must not contain offensive, illegal, or harmful
                  material
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                6.2 Content Moderation
              </h3>
              <p className="text-black-100">
                We reserve the right to review, edit, or remove any content that
                violates these Terms or is inappropriate. We may also suspend or
                terminate accounts of users who repeatedly violate content
                standards.
              </p>
            </div>

            {/* Safety and Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                7. Safety, Liability, and Risk
              </h2>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                7.1 User Safety
              </h3>
              <p className="text-black-100 mb-4">
                Your safety is our priority, but you are responsible for your
                own safety when participating in leanks. We recommend:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Meeting in public places</li>
                <li>Informing friends or family about your plans</li>
                <li>
                  Trusting your instincts and leaving if you feel uncomfortable
                </li>
                <li>Verifying user profiles before meeting</li>
                <li>Reporting suspicious or inappropriate behavior</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                7.2 Assumption of Risk
              </h3>
              <p className="text-black-100 mb-4">
                By using our Service, you acknowledge that participating in
                leanks involves inherent risks, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Physical injury or harm</li>
                <li>Property damage or loss</li>
                <li>Interactions with other users</li>
                <li>Activities associated with leanks</li>
              </ul>
              <p className="text-black-100">
                You voluntarily assume all risks associated with using our
                Service and participating in leanks.
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                7.3 Limitation of Liability
              </h3>
              <p className="text-black-100">
                We are not responsible for the actions, conduct, or content of
                users or third parties. We do not guarantee the safety, quality,
                or legality of leanks or user interactions.
              </p>
            </div>

            {/* Privacy and Data */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                8. Privacy and Data Protection
              </h2>
              <p className="text-black-100 mb-4">
                Your privacy is important to us. Our collection and use of
                personal information is governed by our Privacy Policy, which is
                incorporated into these Terms by reference.
              </p>
              <p className="text-black-100">
                By using our Service, you consent to the collection, use, and
                sharing of your information as described in our Privacy Policy.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                9. Intellectual Property Rights
              </h2>
              <p className="text-black-100 mb-4">
                The Service and its original content, features, and
                functionality are owned by Leankly and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
              <p className="text-black-100">
                You may not copy, modify, distribute, sell, or lease any part of
                our Service without our prior written consent.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                10. Disclaimers and Limitations
              </h2>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                10.1 Service Availability
              </h3>
              <p className="text-black-100 mb-4">
                We strive to provide a reliable service but cannot guarantee
                uninterrupted access. The Service is provided "as is" without
                warranties of any kind.
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                10.2 Third-Party Content
              </h3>
              <p className="text-black-100 mb-4">
                We are not responsible for the accuracy, completeness, or
                reliability of content provided by users or third parties. Users
                should verify all information independently.
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                10.3 User Interactions
              </h3>
              <p className="text-black-100">
                We facilitate connections between users but are not a party to
                any agreements or interactions between users. Users are
                responsible for their own relationships and compliance with
                local laws.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-black-100 mb-4">
                To the maximum extent permitted by law, Leankly shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Property damage or personal injury</li>
                <li>Disputes between users</li>
                <li>Service interruptions or technical issues</li>
                <li>Third-party actions or content</li>
                <li>Injuries or harm resulting from leank participation</li>
              </ul>
              <p className="text-black-100">
                Our total liability to you for any claims arising from these
                Terms shall not exceed the amount you paid us in the 12 months
                preceding the claim, or $100, whichever is greater.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                12. Indemnification
              </h2>
              <p className="text-black-100">
                You agree to indemnify and hold harmless Leankly, its officers,
                directors, employees, and agents from any claims, damages,
                losses, or expenses arising from your use of the Service,
                violation of these Terms, or infringement of any rights of
                another party.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                13. Termination
              </h2>
              <p className="text-black-100 mb-4">
                We may terminate or suspend your account and access to the
                Service immediately, without prior notice, for any reason,
                including:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activities</li>
                <li>Harassment or abuse of other users</li>
                <li>Extended periods of inactivity</li>
                <li>Creating unsafe or inappropriate leanks</li>
              </ul>
              <p className="text-black-100">
                Upon termination, your right to use the Service will cease
                immediately. We may delete your account and data in accordance
                with our Privacy Policy.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                14. Governing Law and Dispute Resolution
              </h2>
              <p className="text-black-100 mb-4">
                These Terms shall be governed by and construed in accordance
                with the laws of the United States, without regard to its
                conflict of law provisions.
              </p>
              <p className="text-black-100 mb-4">
                Any disputes arising from these Terms or your use of the Service
                shall be resolved through:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Good faith negotiations between parties</li>
                <li>Mediation if negotiations fail</li>
                <li>Arbitration as a final resort</li>
              </ul>
              <p className="text-black-100">
                You agree to submit to the personal jurisdiction of the courts
                in New York, U.S.A for any legal proceedings.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                15. Changes to Terms
              </h2>
              <p className="text-black-100 mb-4">
                We reserve the right to modify these Terms at any time. We will
                notify users of material changes by:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Posting updated Terms on our platform</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying notices in our mobile application</li>
              </ul>
              <p className="text-black-100">
                Your continued use of the Service after changes become effective
                constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                16. Contact Information
              </h2>
              <p className="text-black-100 mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-primary-50 p-6 rounded-2xl">
                <div className="space-y-3">
                  <div>
                    <strong className="text-secondary-300">Address:</strong>
                    <p className="text-black-100">
                      Leankly
                      <br />
                      New York, U.S.A
                    </p>
                  </div>
                  <div>
                    <strong className="text-secondary-300">
                      Customer Support:
                    </strong>
                    <p className="text-black-100">support@leankly.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default TermsOfService;
