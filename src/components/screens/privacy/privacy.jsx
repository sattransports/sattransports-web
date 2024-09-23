import Head from 'next/head';
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      <Head>
        <title>Raido Privacy Policy</title>
        <meta name="description" content="Privacy Policy for Raido's services" />
      </Head>
      <main className={styles.privacyMain}>
        <h1>Raido Privacy Policy</h1>
        <p>At Raido, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our ride-hailing services via our app and website.</p>
        <p>By using Raido&apos;s services, you agree to the collection and use of your information in accordance with this policy.</p>
        
        <h2>1. Information We Collect</h2>
        <p>We collect various types of information to provide and improve our services for you.</p>
        
        <h3>Personal Information</h3>
        <ul>
          <li><strong>Contact Information:</strong> Name, email address, phone number.</li>
          <li><strong>Identification Information:</strong> Driver’s license, government ID (for drivers).</li>
          <li><strong>Payment Information:</strong> Credit/debit card details, billing address.</li>
        </ul>
        
        <h3>Usage Data</h3>
        <ul>
          <li><strong>Ride Information:</strong> Pickup and drop-off locations, date and time of rides, fare details.</li>
          <li><strong>Device Information:</strong> IP address, browser type, device type, operating system.</li>
          <li><strong>Location Data:</strong> Real-time location information from your device while using the app.</li>
        </ul>
        
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li><strong>To Provide and Maintain Our Services:</strong> To manage your bookings, process payments, and provide customer support.</li>
          <li><strong>To Improve Our Services:</strong> To analyze usage patterns and improve the functionality of our app and website.</li>
          <li><strong>To Communicate With You:</strong> To send you updates, promotional offers, and important information regarding our services.</li>
          <li><strong>To Ensure Safety and Security:</strong> To monitor and enhance the safety of our drivers and passengers.</li>
        </ul>
        
        <h2>3. Sharing Your Information</h2>
        <p>We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
        <ul>
          <li><strong>With Service Providers:</strong> To facilitate our services, we may share your information with third-party service providers who perform services on our behalf.</li>
          <li><strong>For Legal Reasons:</strong> If required by law or to respond to legal processes, we may disclose your information to law enforcement or other authorities.</li>
          <li><strong>To Protect Rights and Safety:</strong> We may disclose your information to protect the rights, property, or safety of Raido, our users, or the public.</li>
        </ul>
        
        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h2>5. Data Retention</h2>
        <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
        
        <h2>6. Your Rights</h2>
        <p>You have the following rights regarding your personal information:</p>
        <ul>
          <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You can request corrections to any inaccurate or incomplete personal information.</li>
          <li><strong>Deletion:</strong> You can request the deletion of your personal information under certain conditions.</li>
          <li><strong>Objection:</strong> You can object to the processing of your personal information under certain conditions.</li>
          <li><strong>Portability:</strong> You can request the transfer of your personal information to another entity under certain conditions.</li>
        </ul>
        <p>To exercise these rights, please contact us using the contact information provided below.</p>
        
        <h2>7. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        
        <h2>8. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <ul>
          <li>Phone: +918667728057</li>
          <li>Email: admin@raidotaxi.com</li>
        </ul>
        
        <p>By using Raido&apos;s services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.</p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
