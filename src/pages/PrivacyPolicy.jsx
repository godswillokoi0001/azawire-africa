import React from "react";
import NavigationBar2 from "../components/NavigationBar2";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <header>
        <NavigationBar2 />
        <div className="h-[24rem] bg-[#030637] flex items-center justify-center w-full py-16 md:py-20 text-white">
          {/* Hero Section */}
          <div className="w-full mx-auto px-6 lg:px-8 text-center mt-24">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AML/CFT Policy
            </h1>
          </div>
        </div>
      </header>
      <div className="bg-gray-50 text-gray-800 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            Azawire Africa Privacy Policy
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                1. Introduction
              </h2>
              <p>
                Azawire Africa ("Azawire," "we," "us," or "our") is committed to
                protecting the privacy and security of your personal
                information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your data when you use our financial
                services, mobile applications, websites, or interact with us. By
                engaging with Azawire, you consent to the practices described in
                this policy.
              </p>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                2. Information We Collect
              </h2>

              <h3 className="font-semibold mt-4">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Identity Data: Full name, date of birth, government-issued ID
                  (e.g., passport, national ID).
                </li>
                <li>Contact Data: Address, email, phone number.</li>
                <li>
                  Financial Data: Bank account details, transaction history,
                  source of funds.
                </li>
                <li>
                  KYC/CDD Documents: Proof of address, tax identification
                  numbers, employment details.
                </li>
                <li>
                  Biometric Data: (If applicable, e.g., for mobile app
                  authentication).
                </li>
              </ul>

              <h3 className="font-semibold mt-4">
                2.2 Information Collected Automatically
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Device Data: IP address, browser type, device ID, operating
                  system.
                </li>
                <li>
                  Usage Data: Pages visited, transaction timestamps, clickstream
                  data.
                </li>
                <li>
                  Location Data: Approximate location derived from IP address or
                  GPS (with consent).
                </li>
              </ul>

              <h3 className="font-semibold mt-4">
                2.3 Information from Third Parties
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Credit bureaus, identity verification services, or regulatory
                  authorities.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Verify your identity and comply with AML/CFT regulations.
                </li>
                <li>Process transactions and deliver financial services.</li>
                <li>
                  Detect and prevent fraud, money laundering, or cybersecurity
                  threats.
                </li>
                <li>
                  Communicate with you (e.g., service updates, security alerts).
                </li>
                <li>Improve our products, services, and user experience.</li>
                <li>
                  Comply with legal obligations (e.g., tax reporting, court
                  orders).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                4. Legal Basis for Processing
              </h2>
              <p>We process your data based on:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Contractual Necessity: To fulfill agreements with you.</li>
                <li>
                  Legal Obligations: Compliance with AML, tax, and regulatory
                  laws.
                </li>
                <li>
                  Legitimate Interests: Fraud prevention, service improvement,
                  or marketing (where applicable).
                </li>
                <li>
                  Consent: For optional uses (e.g., marketing emails, location
                  tracking).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                5. Data Sharing and Disclosure
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Regulators and Law Enforcement: To comply with legal requests.
                </li>
                <li>
                  Banks and Financial Partners: For transaction processing.
                </li>
                <li>
                  Service Providers: Cloud storage, IT support, or audit firms
                  (under strict confidentiality agreements).
                </li>
                <li>Group Companies: For consolidated risk management.</li>
                <li>
                  Third Parties: Only with your explicit consent (e.g., credit
                  scoring agencies).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                6. Data Retention
              </h2>
              <p>We retain your data only as long as necessary:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Active Accounts: For the duration of your relationship with
                  Azawire.
                </li>
                <li>
                  Post-Account Closure: 7 years (to meet regulatory
                  requirements).
                </li>
                <li>Legal Disputes: Until resolutions are finalized.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                7. Your Rights
              </h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access: Request a copy of your personal data.</li>
                <li>Rectification: Correct inaccurate information.</li>
                <li>
                  Erasure: Request deletion (subject to legal limitations).
                </li>
                <li>Restrict Processing: Limit how we use your data.</li>
                <li>
                  Data Portability: Receive your data in a machine-readable
                  format.
                </li>
                <li>
                  Object: Opt out of marketing or certain processing activities.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                8. Data Security
              </h2>
              <p>We implement safeguards to protect your data:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Encryption: SSL/TLS for data in transit; AES-256 for data at
                  rest.
                </li>
                <li>
                  Access Controls: Role-based permissions and multi-factor
                  authentication.
                </li>
                <li>
                  Audits: Regular security assessments and penetration testing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                9. International Data Transfers
              </h2>
              <p>
                Your data may be transferred to and processed in countries
                outside Africa (e.g., for cloud storage). We ensure such
                transfers comply with:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Adequacy Decisions: Recipient countries with equivalent data
                  protection laws.
                </li>
                <li>
                  Standard Contractual Clauses (SCCs): For EU/UK data transfers.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                10. Cookies and Tracking Technologies
              </h2>
              <p>We use cookies to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Enhance website functionality.</li>
                <li>
                  Analyze traffic patterns (via tools like Google Analytics).
                </li>
                <li>Deliver targeted ads (if applicable).</li>
              </ul>
              <p>
                You can manage cookie preferences via your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                11. Policy Updates
              </h2>
              <p>
                We may update this policy periodically. Changes will be posted
                on our website, and material updates will be communicated via
                email or in-app notifications.
              </p>
            </section>

            <section>
              <h2 className="text-[1.6rem] font-semibold mb-2">
                12. Contact Us
              </h2>
              <p>For questions, complaints, or data requests:</p>
              <p>
                Data Protection Officer: data-desk@azawire.africa
                <br />
                Email: hello@azawire.africa Phone: +2342013306430
              </p>
            </section>

            <p className="mt-6 text-sm text-gray-600">
              This policy complies with the African Union's Convention on Cyber
              Security and Personal Data Protection (2014), Nigeria's NDPR
              (2019), Kenya's Data Protection Act (2019), and South Africa's
              POPIA (2020).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
