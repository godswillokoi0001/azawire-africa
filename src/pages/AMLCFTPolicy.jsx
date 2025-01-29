import React from "react";
import NavigationBar2 from "../components/NavigationBar2";

const AMLCFTPolicy = () => {
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
      <div className="bg-gray-50 text-gray-800 px-6 py-10 sm:px-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 sm:text-5xl">
            Azawire Africa’s Anti-Money Laundering And Combating The Financing
            Of Terrorism (AML/CFT) Policy
          </h1>

          <section className="mb-10">
            <h2 className="text-4xl font-semibold mb-6">
              1. Framework Structure
            </h2>
            <p className="mb-6 text-lg">
              Azawire Africa (“Azawire”) is committed to combating financial
              crime, including money laundering, terrorism financing,
              corruption, and fraud. Our AML/CFT framework is risk-based,
              ensuring proactive identification, assessment, and mitigation of
              risks aligned with evolving regulatory requirements and global
              best practices.
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li className="mb-3">
                <strong>Policies and Procedures:</strong> Reviewed annually by
                the Board of Directors and updated as needed to reflect changes
                in regulations, technology, or operational risks. All policies
                are accessible to staff via Azawire’s internal portal.
              </li>
              <li>
                <strong>Risk-Based Approach:</strong> Prioritizes resources to
                high-risk areas, moving beyond compliance checklists to dynamic
                risk management.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-4xl font-semibold mb-6">2. Framework Scope</h2>
            <h3 className="text-[1.5rem] font-medium mb-4">
              2.1 Board and Senior Management Responsibilities
            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
                The Board of Directors oversees the AML/CFT framework, ensuring
                adherence to legal and ethical standards.
              </li>
              <li>
                The Board sets a “zero-tolerance” culture for non-compliance and
                approves the appointment of a Chief Compliance Officer (CCO).
              </li>
              <li>
                Senior Management implements policies, allocates resources, and
                ensures staff training and awareness.
              </li>
            </ul>

            <h3 className="text-[1.5rem] font-medium mb-4">2.2 Reporting</h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
                Quarterly Reports: Submitted to the Board, summarizing AML/CFT
                performance, audit outcomes, and regulatory updates.
              </li>
            </ul>

            <h3 className="text-[1.5rem] font-medium mb-4">
              2.3 Customer Due Diligence (CDD) & Know Your Customer (KYC)
            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
                Account Onboarding: Requires verified identity (e.g., national
                ID, passport), proof of address, and source of funds/wealth.
              </li>
              <li>
                Enhanced Due Diligence (EDD): Mandatory for high-risk customers
                (e.g., Politically Exposed Persons (PEPs), cross-border
                transactions, or clients from high-risk jurisdictions).
              </li>
              <li>
                Ultimate Beneficial Ownership (UBO): Identification of
                individuals owning/controlling ≥10% of business entities.
              </li>
              <li>
                Sanctions Screening: Real-time checks against UN, AU, EU, OFAC,
                and other relevant sanctions lists.
              </li>
            </ul>

            <h3 className="text-[1.5rem] font-medium mb-4">
              2.4 Transaction Monitoring
            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
                Automated Tools: Flags unusual patterns (e.g., rapid large
                transfers, structuring).
              </li>
              <li>
                Manual Reviews: Staff escalates suspicious activity to the
                Compliance Unit using predefined red flags (e.g., mismatched
                customer profiles).
              </li>
              <li>
                Suspicious Activity Reports (SARs): Filed with national
                Financial Intelligence Units (FIUs) within 24-48 hours of
                detection.
              </li>
            </ul>

            <h3 className="text-[1.5rem] font-medium mb-4">
              2.5 Prohibited Relationships
            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
                No accounts for anonymous/pseudonymous clients, shell banks, or
                sanctioned entities.
              </li>
              <li>
                Termination of relationships with clients linked to criminal
                activity or non-cooperation in CDD.
              </li>
            </ul>

            <h3 className="text-[1.5rem] font-medium mb-4">
              2.6 Sanctions Compliance
            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
                Real-Time Screening: At onboarding and for all transactions.
              </li>
              <li>
                Escalation Process: Immediate freezing of assets and reporting
                to regulators for confirmed matches.
              </li>
            </ul>
            <h3 className="text-[1.5rem] font-medium mb-4">
            2.7 PEPs and High-Risk Jurisdictions
            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
              PEP relationships require pre-approval by the CCO and Senior Management.
              </li>
              <li>
              Enhanced monitoring for clients in FATF-listed high-risk jurisdictions (e.g., weak AML regimes).
              </li>
            </ul>
            <h3 className="text-[1.5rem] font-medium mb-4">
            2.8 Correspondent Banking
            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
              Due diligence on partner institutions, including annual reviews of their AML/CFT controls.
              </li>
              <li>
              Prohibition of nested accounts or relationships with non-regulated entities.
              </li>
            </ul>
            <h3 className="text-[1.5rem] font-medium mb-4">
            2.9 Anti-Bribery, Corruption, and Fraud
            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
              Strict prohibition of gifts, favors, or payments to influence business decisions.              </li>
              <li>
              Whistleblower protections for employees reporting unethical conduct
              </li>
            </ul>
            <h3 className="text-[1.5rem] font-medium mb-4">
            2.10 Training            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
              Mandatory Annual Training: Covers AML/CFT regulations, red flags, and reporting protocols.              </li>
              <li>
              Role-Specific Training: Advanced modules for Compliance, Risk, and Frontline teams.
              </li>
            </ul>
            <h3 className="text-[1.5rem] font-medium mb-4">
            2.11 Record Retention            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
              Customer records retained for 7 years post-account closure.              </li>
              <li>
              Transaction records stored for 7 years from execution date
              </li>
            </ul>
            <h3 className="text-[1.5rem] font-medium mb-4">
            2.12 Data Protection            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
              Compliance with the African Union Convention on Cyber Security and Personal Data Protection and local laws (e.g., Nigeria’s NDPR, Kenya’s Data Protection Act).
              </li>
              <li>
              Encryption and access controls for sensitive customer data
              </li>
            </ul>
            <h3 className="text-[1.5rem] font-medium mb-4">
            2.13 Internal Audit & Compliance Testing
            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
              Quarterly Audits: Independent reviews of AML/CFT controls, with findings reported to the Board.
              </li>
              <li>
              Remediation Plans: Implemented within 30 days of audit completion
              </li>
            </ul>
            <h3 className="text-[1.5rem] font-medium mb-4">
            2.14 Regulatory Collaboration
            </h3>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
              Proactive engagement with FIUs, central banks, and bodies like GIABA or ESAAMLG.
              </li>
              <li>
              Timely responses to information requests from law enforcement.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-4xl font-semibold mb-6">3. Risk Assessment</h2>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>
                Customer Risk: Categorized as Low, Medium, or High based on
                factors like geography, occupation, and transaction behavior.
              </li>
              <li>
                Product/Service Risk: Higher scrutiny for crypto-assets,
                remittances, and bulk cash handling.
              </li>
              <li>
                Enterprise-Wide Risk Assessment: Conducted annually to update
                controls and resource allocation.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-4xl font-semibold mb-6">
              4. Policy Governance
            </h2>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li>Approval: Board-approved annually.</li>
              <li>Exceptions: Requires CCO and Board approval.</li>
              <li>
                Violations: Disciplinary action, including termination and
                regulatory reporting.
              </li>
            </ul>

            <p className="mt-8 text-lg  text-gray-600">
              Azawire Africa reserves the right to amend this policy in response
              to regulatory changes or operational risks. All staff are
              responsible for compliance.
            </p>
            <p className="text-lg text-gray-600 mt-4">
             <strong> Chief Compliance Officer: </strong> [Insert Name]
              <br />
              <strong> Contact: </strong> [Insert Email/Phone]
              <br />
              <strong> Board Approval Date: </strong> [Insert Date]
            </p>
          </section>

          <footer className="mt-16">
            <p className="text-lg text-gray-600">
              This policy aligns with the Financial Action Task Force (FATF)
              Recommendations, the AU’s AML/CFT Strategy, and local regulations
              in Azawire’s jurisdictions of operation.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AMLCFTPolicy;
