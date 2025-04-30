import Footer from "../components/Footer";
import NavigationBar2 from "../components/NavigationBar2";

export default function TermsOfUse() {
  return (
    <>
    <header>
        <NavigationBar2 />
        <div className="h-[24rem] bg-[#030637] flex items-center justify-center w-full py-16 md:py-20 text-white"
          style={{
              backgroundImage: "url(/images/background-line-2.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
          }}
          >
          {/* Hero Section */}
          <div className="w-full mx-auto px-6 lg:px-8 text-center mt-24">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Terms Of Use
            </h1>
          </div>
        </div>
      </header>
    <div className="bg-[#f5fafe] min-h-screen py-12 px-6 md:px-20 lg:px-32 text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Terms Of Use</h1>

      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-[1.6rem] font-semibold">1. Introduction</h2>
          <p className="text-md mt-2">
            USER AGREEMENT This Agreement (“Agreement”) governs your use of
            Azawire Africa’s (“Azawire,” “we,” or “us”) digital financial
            services, including our website, mobile app, and related features
            (the “Services”). By accessing or using the Services, you agree to
            comply with these Terms, our Privacy Policy, and AML/CFT Policy. If
            you disagree, discontinue use immediately. Azawire Africa is
            registered in Nigeria and operates under applicable African
            financial regulations. Note that Azawire partners with licensed
            financial institutions to deliver banking services. Funds held in
            Azawire accounts are settled in stablecoins and are not insured by
            deposit protection schemes in your jurisdiction. Third-Party
            Providers By using our Services, you consent to Azawire sharing your
            data with regulatory bodies, banking partners, and service
            providers. Specific Services may require Azawire to create
            third-party accounts (e.g., fiat/crypto wallets) on your behalf. You
            authorize Azawire to manage these accounts per your instructions and
            close them upon account termination.
          </p>
        </div>

        <div>
          <h2 className="text-[1.6rem] font-semibold">
            2. Account Registration & Security
          </h2>
          <h3 className="text-lg mt-2">Eligibility</h3>
          <ul className="list-disc pl-6 text-lg">
            <li>Must be 18+ or the legal age in your jurisdiction.</li>
            <li>
              Provide accurate KYC details (e.g., government ID, proof of
              address).
            </li>
          </ul>
          <h3 className="text-lg mt-2">Account Security</h3>
          <ul className="list-disc pl-6 text-lg">
            <li>
              You are responsible for safeguarding login credentials. Report
              unauthorized access immediately to hello@azawire.africa or call
              +234203306430.
            </li>
            <li>
              Azawire may suspend accounts for suspicious activity or policy
              breaches.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[1.6rem] font-semibold">
            3. Prohibited Activities
          </h2>
          <h3 className="text-lg mt-2">You agree not to:</h3>
          <ul className="list-disc pl-6 text-lg mt-2">
            <li>
              Use Services for illegal acts (fraud, money laundering, terrorism
              financing).
            </li>
            <li>Circumvent security protocols or transmit malicious code.</li>
            <li>Create multiple accounts without approval.</li>
            <li>
              Misrepresent identity or engage in unauthorized transactions.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[1.6rem] font-semibold">
            4. Transactions & Liability
          </h2>
          <h3 className="text-lg mt-2">Unauthorized Transactions</h3>
          <ul className="list-disc pl-6 text-lg mt-2">
            <li>
              Report unauthorized activity within 48 hours via the Azawire app
              or email. Failure may void reimbursement rights.
            </li>
            <li>
              Azawire will refund verified unauthorized transactions unless
              caused by your negligence or fraud.
            </li>
          </ul>
          <h3 className="text-lg mt-2">Account Closure</h3>
          <ul className="list-disc pl-6 text-lg mt-2">
            <li>
              Request closure via hello@azawire.africa. Balances will be
              refunded within 30 days.
            </li>
            <li>
              Azawire may freeze accounts during investigations or for legal
              compliance.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[1.6rem] font-semibold">5. Data Privacy</h2>
          <p className="text-lg mt-2">
            We collect and process data per our Privacy Policy, complying with
            Nigeria’s NDPR, Kenya’s Data Protection Act, and other African
            regulations.
          </p>
          <p className="text-lg mt-2">
            Location data and device information may be used for fraud
            prevention and service optimization.
          </p>
        </div>

        <div>
          <h2 className="text-[1.6rem] font-semibold">
            6. Intellectual Property
          </h2>
          <p className="text-lg mt-2">
            Azawire owns all rights to the Services, including logos, content,
            and software. Unauthorized use is prohibited.
          </p>
          <p className="text-lg mt-2">
            You retain ownership of data submitted but grant Azawire a license
            to process it for Service delivery.
          </p>
        </div>

        <div>
          <h2 className="text-[1.6rem] font-semibold">7. Fees & Disputes</h2>
          <p className="text-lg mt-2">
            Transaction fees are disclosed pre-confirmation. You authorize
            Azawire to deduct fees directly.
          </p>
          <p className="text-lg mt-2">
            Disputes resolved via negotiation or arbitration in Lagos, Nigeria,
            under Nigerian law.
          </p>
        </div>

        <div>
          <h2 className="text-[1.6rem] font-semibold">
            8. Amendments & Termination
          </h2>
          <p className="text-lg mt-2">
            Azawire may update these Terms with 30 days’ notice via email or
            in-app alerts. Continued use implies acceptance.
          </p>
          <p className="text-lg mt-2">
            We reserve the right to suspend or terminate accounts for breaches,
            inactivity, or legal requirements.
          </p>
        </div>

        <div>
          <h2 className="text-[1.6rem] font-semibold">
            9. Liability Limitations
          </h2>
          <p className="text-lg mt-2">
            Azawire is not liable for indirect damages (e.g., lost profits) or
            losses from force majeure events (e.g., system outages, regulatory
            changes).
          </p>
          <p className="text-lg mt-2">
            Liability caps at fees paid to Azawire in the preceding 12 months
          </p>
        </div>

        <div>
          <h2 className="text-[1.6rem] font-semibold">10. Contact & Support</h2>
          <ul className="list-disc pl-6 text-lg mt-2">
            <li>Email: hello@azawire.africa</li>
            <li>Phone: +2342033063430</li>
            {/* <li>Address: [Insert Lagos Office Address]</li> */}
          </ul>
        </div>
      </section>
      
    </div>
    <Footer />
    </>
  );
}