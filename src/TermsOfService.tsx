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
              <p>Last updated: December 2025</p>
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
                <li>
                  Not create accounts on behalf of minors or allow minors to use
                  your account or attend leanks under your account
                </li>
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
              <h3 className="text-xl font-semibold text-secondary-300 mb-3 mt-8">
                7.4 Child Safety and Protection - Zero Tolerance for Child Sexual Abuse and Exploitation (CSAE)
              </h3>
              
              <p className="text-black-100 mb-4">
                <strong>Leankly has a zero-tolerance policy for child sexual abuse and exploitation (CSAE).</strong> Our Service is intended for adults only. You must be at least 18 years old to use the Service, create an account, or participate in leanks. We do not knowingly allow minors to register or participate in leanks, and we do not provide services directed to children.
              </p>

              <h4 className="text-lg font-semibold text-secondary-300 mb-2 mt-4">
                Prohibited Conduct
              </h4>
              <p className="text-black-100 mb-4">
                You are strictly prohibited from using the Service in any way that involves, facilitates, promotes, or enables child sexual abuse or exploitation. This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>
                  Creating, uploading, sharing, distributing, or soliciting any
                  content that depicts, describes, or references child sexual
                  abuse material (CSAM) or child sexual exploitation
                </li>
                <li>
                  Using the Service to contact, communicate with, groom, or
                  solicit minors for sexual purposes
                </li>
                <li>
                  Arranging, promoting, or participating in leanks that involve
                  minors or that could reasonably be seen as exploiting,
                  endangering, or targeting minors
                </li>
                <li>
                  Creating or sharing content that sexualizes minors or
                  encourages unsafe behavior by or toward minors
                </li>
                <li>
                  Using the Service to facilitate human trafficking involving
                  minors
                </li>
                <li>
                  Attempting to circumvent age verification or other child
                  safety measures
                </li>
                <li>
                  Creating accounts on behalf of minors or allowing minors to
                  use your account
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-secondary-300 mb-2 mt-4">
                Mandatory Reporting and Law Enforcement Cooperation
              </h4>
              <p className="text-black-100 mb-4">
                We are committed to protecting children and will take immediate action against any suspected CSAE activity:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>
                  <strong>Mandatory Reporting:</strong> We will immediately report
                  any suspected child sexual abuse material, child exploitation,
                  or grooming activity to the National Center for Missing &
                  Exploited Children (NCMEC), law enforcement agencies, and
                  other appropriate authorities as required by law
                </li>
                <li>
                  <strong>Account Termination:</strong> Any account involved in
                  suspected CSAE activity will be immediately and permanently
                  terminated without notice or refund
                </li>
                <li>
                  <strong>Content Removal:</strong> All content related to
                  suspected CSAE will be immediately removed and preserved for
                  law enforcement investigation
                </li>
                <li>
                  <strong>Law Enforcement Cooperation:</strong> We will fully
                  cooperate with law enforcement investigations, including
                  providing account information, content, IP addresses, and
                  other relevant data as legally required
                </li>
                <li>
                  <strong>Content Scanning:</strong> We employ automated and
                  manual content scanning technologies to detect and prevent
                  CSAE-related content and activity
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-secondary-300 mb-2 mt-4">
                User Reporting Obligations
              </h4>
              <p className="text-black-100 mb-4">
                If you encounter any content or activity on the Service that you
                believe involves child sexual abuse, exploitation, or grooming,
                you must immediately:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>
                  Report it to us immediately using the contact information
                  provided in these Terms or through our in-app reporting
                  features
                </li>
                <li>
                  Report directly to NCMEC at{" "}
                  <a
                    href="https://www.missingkids.org/gethelpnow/cybertipline"
                    className="text-primary-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.missingkids.org/gethelpnow/cybertipline
                  </a>{" "}
                  or call 1-800-THE-LOST (1-800-843-5678)
                </li>
                <li>
                  Contact local law enforcement if you believe a child is in
                  immediate danger
                </li>
              </ul>
              <p className="text-black-100 mb-4">
                Do not attempt to investigate or handle suspected CSAE activity
                yourself. Report it immediately to the appropriate authorities.
              </p>

              <h4 className="text-lg font-semibold text-secondary-300 mb-2 mt-4">
                Legal Consequences
              </h4>
              <p className="text-black-100 mb-4">
                Violation of these CSAE standards may result in:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>Immediate and permanent account termination</li>
                <li>
                  Reporting to law enforcement and child protection agencies
                </li>
                <li>
                  Civil and criminal liability under applicable laws, including
                  but not limited to federal and state laws prohibiting child
                  sexual abuse material, child exploitation, and human
                  trafficking
                </li>
                <li>
                  Cooperation with law enforcement investigations and potential
                  prosecution
                </li>
              </ul>

              <p className="text-black-100 mb-4">
                <strong>
                  By using the Service, you acknowledge that you understand
                  these CSAE standards and agree to comply with them. Any
                  violation will result in immediate termination of your account
                  and may result in legal action.
                </strong>
              </p>

              <p className="text-black-100">
                If you believe that a user is under 18 or that any content,
                leank, or interaction on the platform may involve child sexual
                abuse or exploitation, please report it to us immediately using
                the contact information provided in these Terms so we can take
                immediate action and report to the appropriate authorities.
              </p>
            </div>

            {/* Subscriptions and Payments */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                8. Subscriptions and Payments
              </h2>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                8.1 Subscription Plans
              </h3>
              <p className="text-black-100 mb-4">
                Leankly offers subscription plans that provide access to premium
                features and enhanced functionality. Subscription plans, pricing,
                features, and terms are subject to change at our discretion. We
                will notify you of any material changes to your subscription plan
                or pricing with reasonable advance notice.
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                8.2 Payment Terms
              </h3>
              <p className="text-black-100 mb-4">
                By subscribing to a paid plan, you agree to pay the subscription
                fees specified at the time of purchase. Subscription fees are
                billed in advance on a recurring basis (monthly, quarterly, or
                annually, depending on your selected plan) and will automatically
                renew unless cancelled.
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>
                  You authorize us to charge your payment method for all
                  subscription fees and any applicable taxes
                </li>
                <li>
                  Payment will be processed through secure third-party payment
                  processors
                </li>
                <li>
                  You are responsible for providing accurate and current payment
                  information
                </li>
                <li>
                  If payment fails, we may suspend or terminate your subscription
                  and access to premium features
                </li>
                <li>
                  All fees are non-refundable except as required by law or as
                  specified in our refund policy
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                8.3 Automatic Renewal
              </h3>
              <p className="text-black-100 mb-4">
                Your subscription will automatically renew at the end of each
                billing period unless you cancel it before the renewal date. You
                will be charged the then-current subscription fee for the
                upcoming billing period. We will send you a reminder before each
                renewal, but it is your responsibility to cancel if you do not
                wish to continue.
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                8.4 Cancellation and Refunds
              </h3>
              <p className="text-black-100 mb-4">
                You may cancel your subscription at any time through your account
                settings or by contacting customer support. Cancellation will take
                effect at the end of your current billing period, and you will
                continue to have access to premium features until that time.
              </p>
              <p className="text-black-100 mb-4">
                Refunds are generally not provided for subscription fees already
                paid, except:
              </p>
              <ul className="list-disc pl-6 text-black-100 mb-6 space-y-2">
                <li>
                  As required by applicable law (e.g., consumer protection laws in
                  certain jurisdictions)
                </li>
                <li>
                  If you cancel within the first 14 days of your initial
                  subscription and have not used premium features extensively
                </li>
                <li>
                  In cases of technical errors or billing mistakes on our part
                </li>
              </ul>
              <p className="text-black-100">
                To request a refund, please contact our customer support team
                with your account details and reason for the request.
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                8.5 Price Changes
              </h3>
              <p className="text-black-100 mb-4">
                We reserve the right to modify subscription prices at any time.
                Price changes will not affect your current subscription period but
                will apply to subsequent renewal periods. We will notify you of any
                price changes at least 30 days in advance, and you may cancel
                your subscription before the price change takes effect if you do
                not agree to the new pricing.
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                8.6 Free Trials
              </h3>
              <p className="text-black-100">
                If we offer a free trial period, you may be required to provide
                payment information to start the trial. Unless you cancel before
                the trial period ends, your subscription will automatically
                convert to a paid subscription and you will be charged the
                applicable subscription fee. You can cancel at any time during
                the trial period to avoid being charged.
              </p>
            </div>

            {/* Privacy and Data */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                9. Privacy and Data Protection
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
                10. Intellectual Property Rights
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
                11. Disclaimers and Limitations
              </h2>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                11.1 Service Availability
              </h3>
              <p className="text-black-100 mb-4">
                We strive to provide a reliable service but cannot guarantee
                uninterrupted access. The Service is provided "as is" without
                warranties of any kind.
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                11.2 Third-Party Content
              </h3>
              <p className="text-black-100 mb-4">
                We are not responsible for the accuracy, completeness, or
                reliability of content provided by users or third parties. Users
                should verify all information independently.
              </p>

              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                11.3 User Interactions
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
                12. Limitation of Liability
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
                13. Indemnification
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
                14. Termination
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
                <li>Non-payment of subscription fees</li>
              </ul>
              <p className="text-black-100 mb-4">
                Upon termination, your right to use the Service will cease
                immediately. We may delete your account and data in accordance
                with our Privacy Policy.
              </p>
              <p className="text-black-100">
                If you have an active subscription, termination of your account
                does not automatically cancel your subscription. You remain
                responsible for any outstanding subscription fees. You must
                cancel your subscription separately to stop recurring charges.
                No refunds will be provided for the remaining subscription
                period unless required by law.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                15. Governing Law and Dispute Resolution
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
                16. Changes to Terms
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
                17. Contact Information
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
