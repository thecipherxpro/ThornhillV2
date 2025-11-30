import { useState, useEffect } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import PageHero from '../../components/feature/PageHero';
import { useSEO } from '../../utils/seo';

export default function PrivacyPolicy() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://thornhilltreatment.com';

  useSEO({
    title: 'Privacy Policy | Thornhill Drug-Mart',
    description: 'Privacy policy for Thornhill Drug-Mart. Learn how we collect, use, and protect your personal health information in compliance with Canadian privacy laws.',
    keywords: 'privacy policy, health information privacy, PHIPA compliance, patient confidentiality',
    canonical: `${siteUrl}/privacy-policy`,
    ogType: 'website'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <PageHero 
        title="Privacy Policy"
        description='Last Updated: August 21, 2025 — Thornhill Drug Mart ("we," "our," or "us") operates the Free Naloxone Kit Program under the Ontario Naloxone Program for Pharmacies (ONPP). We are committed to protecting your privacy and safeguarding your personal health information.'
        backgroundImage="https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/5ad93454dd1fa6850f49e4e33b9e76da.jpeg"
      />

      {/* Privacy Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                At Thornhill Drug-Mart, we are committed to protecting your privacy and ensuring the security of your personal information when you use our website. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our online services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website, you consent to the data practices described in this policy. We encourage you to read this policy carefully to understand our views and practices regarding your personal data.
              </p>
            </section>

            {/* Informed Consent */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Informed Consent
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Thornhill Drug-Mart values informed consent, meaning we will ensure that you understand what information we are collecting and why. Under PHIPA and PIPEDA, we are committed to obtaining your consent before collecting any personal or health information. This consent may be implied or explicit depending on the type of data collected.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We ensure that individuals are fully informed about the purpose of the collection, use, and disclosure of their information and understand their rights under these regulations. You will be given an opportunity to provide explicit consent before we collect any personal health information or other sensitive data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Consent may be withdrawn at any time, and you may contact us to modify or revoke your consent.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Use our website or create an account</li>
                <li>Contact us through online forms or inquiries</li>
                <li>Subscribe to our newsletters or promotional materials</li>
                <li>Participate in surveys or feedback forms</li>
                <li>Interact with our online services</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Full name and contact information (address, phone number, email)</li>
                <li>Date of birth (if required for specific services)</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                How We Use Your Information
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Website Operation:</strong> To provide, maintain, and improve our website and online services</li>
                <li><strong>Communication:</strong> To respond to your inquiries, requests, and provide customer support</li>
                <li><strong>Information Delivery:</strong> To send you information about our services, health tips, and updates (with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and professional standards</li>
                <li><strong>Quality Improvement:</strong> To analyze website usage, improve user experience, and develop new features</li>
                <li><strong>Safety and Security:</strong> To protect against fraud, unauthorized access, and ensure the safety of our website users</li>
                <li><strong>Marketing:</strong> To send you promotional offers and newsletters (with your consent, and you may opt out at any time)</li>
              </ul>
            </section>

            {/* Data Storage and Cross-Border Transfer */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Data Storage and Cross-Border Transfer
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We store personal information, including personal health information (PHI), on secure servers located in Canada whenever possible. However, in certain cases, we may temporarily use secure third-party service providers whose infrastructure is located in the United States.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                As a result, some information may be stored or processed outside of Canada and might be subject to the laws of those jurisdictions, including lawful access requests by U.S. government authorities. By using our services, you acknowledge and consent to this potential cross-border transfer and storage of your information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We ensure that any service providers handling personal data on our behalf maintain high standards of privacy, security, and compliance in alignment with our obligations under PHIPA and PIPEDA.
              </p>
            </section>

            {/* Information Sharing and Disclosure */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Information Sharing and Disclosure
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We respect your privacy and do not sell your personal information. We may share your information only in the following circumstances:
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may engage trusted third-party service providers to assist with website operations, such as hosting, analytics, email delivery, and technical support. These providers are contractually obligated to protect your information and use it only for specified purposes.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may disclose your information when required by law, court order, or government regulation, or when necessary to protect the rights, property, or safety of our organization, website users, or others.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Business Transfers</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity, subject to the same privacy protections outlined in this policy.
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Data Security
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Encryption of sensitive data during transmission and storage</li>
                <li>Secure servers and firewalls</li>
                <li>Regular security assessments and updates</li>
                <li>Restricted access to personal information on a need-to-know basis</li>
                <li>Employee training on privacy and security practices</li>
                <li>Physical security measures for our systems and infrastructure</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to using industry-standard practices to safeguard your data.
              </p>
            </section>

            {/* Access and Correction of Personal Information */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Access and Correction of Personal Information
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                You have the right to access the personal information that we collect about you, including any personal health information (PHI), and to request corrections if inaccuracies are found. As part of our compliance with PHIPA and PIPEDA, we will take prompt action to accommodate such requests and ensure the accuracy of your information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Requests for access or corrections can be made using the contact information provided at the end of this policy. We will verify your identity before providing access or making corrections to ensure your data is protected.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We will take prompt action to accommodate such requests as required by applicable privacy laws, such as PHIPA and PIPEDA. To exercise these rights, please reach out to us using the contact information provided at the end of this policy.
              </p>
            </section>

            {/* Your Privacy Rights */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Your Privacy Rights
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Under applicable privacy laws, you have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> You have the right to request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information</li>
                <li><strong>Withdrawal of Consent:</strong> You may withdraw consent for certain uses of your information at any time, subject to legal or contractual restrictions</li>
                <li><strong>Complaint:</strong> You have the right to file a complaint with the Privacy Commissioner if you believe your privacy rights have been violated</li>
                <li><strong>Opt-Out:</strong> You can opt out of receiving marketing communications at any time by using the unsubscribe link in our emails or contacting us directly</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise any of these rights, please contact our Privacy Officer using the contact information provided below.
              </p>
            </section>

            {/* Retention of Information */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Retention of Information
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we securely dispose of it in accordance with our data retention and destruction policies.
              </p>
            </section>

            {/* Cookies and Tracking Technologies */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Cookies and Tracking Technologies
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. Cookies are small text files stored on your device that help us remember your preferences and improve our services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control cookie settings through your browser preferences. However, disabling cookies may limit your ability to use certain features of our website.
              </p>
            </section>

            {/* Third-Party Links */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Third-Party Links
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our website may contain links to third-party websites for your convenience and information. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Children's Privacy
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children without appropriate parental or guardian consent. If you believe we have inadvertently collected information from a child without proper authorization, please contact us immediately.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Changes to This Privacy Policy
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of our website after any changes to this Privacy Policy constitutes your acceptance of the updated terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Contact Information
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our Privacy Officer:
              </p>
              
              <div className="bg-gray-50 border-l-4 border-teal-600 p-6 rounded-lg mb-8">
                <p className="font-bold text-gray-900 mb-3">Thornhill Drug-Mart Privacy Officer</p>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-start">
                    <i className="ri-map-pin-line text-teal-600 mr-3 mt-1"></i>
                    <span>8108 Yonge St Unit 3-4, Thornhill, ON L4J 1W4</span>
                  </p>
                  <p className="flex items-center">
                    <i className="ri-phone-line text-teal-600 mr-3"></i>
                    <a href="tel:9057099985" className="hover:text-teal-600 transition-colors cursor-pointer">(905) 709-9985</a>
                  </p>
                  <p className="flex items-center">
                    <i className="ri-mail-line text-teal-600 mr-3"></i>
                    <a href="mailto:privacy@thornhilltreatment.com" className="hover:text-teal-600 transition-colors cursor-pointer">privacy@thornhilltreatment.com</a>
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-teal-600 p-6 rounded-lg">
                <p className="font-bold text-gray-900 mb-3">Cybersecurity Covered By</p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-gray-900">CipherX Solutions Inc.</p>
                  <p className="flex items-center">
                    <i className="ri-global-line text-teal-600 mr-3"></i>
                    <a href="https://cpxs.ca" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors cursor-pointer">Cpxs.ca</a>
                  </p>
                  <p className="flex items-center">
                    <i className="ri-mail-line text-teal-600 mr-3"></i>
                    <a href="mailto:gouranm@cipherxsolutions.com" className="hover:text-teal-600 transition-colors cursor-pointer">gouranm@cipherxsolutions.com</a>
                  </p>
                </div>
              </div>
            </section>

            {/* Consent */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Consent
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                By using our website, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your personal information as described herein.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to maintaining the trust and confidence of our website visitors. Thank you for choosing Thornhill Drug-Mart.
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
