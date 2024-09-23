import Head from 'next/head';
import styles from './Disclaimer.module.scss';

const Disclaimer = () => {
  return (
    <div className={styles.disclaimerContainer}>
      <Head>
        <title>Raido Disclaimer</title>
        <meta name="description" content="Disclaimer for Raido's ride-hailing services" />
      </Head>
      <main className={styles.disclaimerMain}>
        <h1>Raido Disclaimer</h1>
        <p>Welcome to Raido, your reliable ride-hailing service. By using our website, mobile application, and services, you agree to the following disclaimers. If you do not agree with any part of these disclaimers, please do not use our services.</p>

        <h2>1. General Disclaimer</h2>
        <p>Raido provides its services as is and as available without any warranties, express or implied, regarding the website, app, or services. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

        <h2>2. Accuracy of Information</h2>
        <p>While we strive to provide accurate and up-to-date information on our website and app, we do not guarantee the completeness, accuracy, or reliability of any information provided. Any reliance you place on such information is strictly at your own risk.</p>

        <h2>3. Limitation of Liability</h2>
        <p>Raido, its affiliates, directors, officers, employees, agents, and partners will not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses resulting from:</p>
        <ul>
          <li>Your use or inability to use our services.</li>
          <li>Unauthorized access to or alteration of your transmissions or data.</li>
          <li>Statements or conduct of any third party on the service.</li>
          <li>Any other matter related to the service.</li>
        </ul>

        <h2>4. No Professional Advice</h2>
        <p>Any information provided by Raido, including but not limited to blog posts, articles, and customer support, is for informational purposes only and does not constitute professional advice. Users should seek independent professional advice before making any decisions based on such information.</p>

        <h2>5. Third-Party Links</h2>
        <p>Our website and app may contain links to third-party websites or services that are not owned or controlled by Raido. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. Accessing these links is at your own risk.</p>

        <h2>6. User Responsibilities</h2>
        <p>Users are responsible for their own actions while using Raido's services. This includes, but is not limited to, complying with all applicable laws and regulations, maintaining the confidentiality of their account information, and ensuring their own safety and the safety of others.</p>

        <h2>7. Changes to Services</h2>
        <p>Raido reserves the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We are not liable for any modification, suspension, or discontinuation of our services.</p>

        <h2>8. Governing Law</h2>
        <p>These disclaimers and any disputes arising out of or relating to them will be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions or concerns about these disclaimers, please contact us at:</p>
        <ul>
          <li>Phone: +918667728057</li>
          <li>Email: admin@raidotaxi.com</li>
        </ul>

        <p>By using Raido's services, you acknowledge that you have read, understood, and agree to be bound by these disclaimers.</p>
      </main>
    </div>
  );
};

export default Disclaimer;
