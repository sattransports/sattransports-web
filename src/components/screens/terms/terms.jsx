// pages/terms.js
import Head from 'next/head';
import styles from './terms.module.scss';

const Terms = () => {
  return (
    <div className={styles.termsContainer}>
      <Head>
        <title>Raido Terms and Conditions</title>
        <meta name="description" content="Terms and Conditions for Raido's services" />
      </Head>
      <main className={styles.termsMain}>
        <h1>Raido Terms and Conditions</h1>
        <p>Welcome to Raido! These terms and conditions outline the rules and regulations for the use of Raido's Website and Services.</p>
        <p>By accessing this website and using our services, we assume you accept these terms and conditions. Do not continue to use Raido if you do not agree to all of the terms and conditions stated on this page.</p>
        
        <h2>1. Definitions</h2>
        <ul>
          <li><strong>&quot;Raido&quot;</strong> refers to our company, the owner and operator of the Raido app and website.</li>
          <li><strong>&quot;User&quot;</strong> refers to any individual or entity using our services, including drivers and passengers.</li>
          <li><strong>&quot;Service&quot;</strong> refers to the ride-hailing services provided by Raido, including bike, car, and cab rides.</li>
        </ul>
        
        <h2>2. Eligibility</h2>
        <p>To use Raido, you must be at least 18 years old and capable of forming a binding contract. By using our services, you represent and warrant that you meet this requirement.</p>
        
        <h2>3. User Accounts</h2>
        <ul>
          <li>Users must register for an account to use the Raido services.</li>
          <li>Users are responsible for maintaining the confidentiality of their account information, including their password.</li>
          <li>Users must immediately notify Raido of any unauthorized use of their account or any other security breach.</li>
        </ul>
        
        <h2>4. Use of the Service</h2>
        <ul>
          <li>Users must comply with all applicable laws and regulations while using our services.</li>
          <li>Users agree not to use the service for any unlawful or prohibited activity.</li>
          <li>Raido reserves the right to suspend or terminate user accounts at its discretion, especially in cases of violation of these terms.</li>
        </ul>
        
        <h2>5. Payments and Charges</h2>
        <ul>
          <li>Users agree to pay all charges incurred through their use of the service.</li>
          <li>Payment methods accepted by Raido will be specified during the booking process.</li>
          <li>All payments are non-refundable unless otherwise stated in these terms or required by law.</li>
        </ul>
        
        <h2>6. Cancellations and Refunds</h2>
        <ul>
          <li>Users can cancel their bookings according to the cancellation policy outlined in the app.</li>
          <li>Raido reserves the right to charge cancellation fees as specified in the app.</li>
          <li>Refunds, if applicable, will be processed according to our refund policy.</li>
        </ul>
        
        <h2>7. Driver and Passenger Conduct</h2>
        <ul>
          <li>Both drivers and passengers are expected to conduct themselves respectfully and courteously at all times.</li>
          <li>Harassment, abuse, and any form of discrimination will not be tolerated.</li>
          <li>Users must report any misconduct or safety concerns to Raido immediately.</li>
        </ul>
        
        <h2>8. Limitation of Liability</h2>
        <ul>
          <li>Raido shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use.</li>
          <li>Raido does not guarantee the availability, timeliness, or accuracy of the service.</li>
        </ul>
        
        <h2>9. Privacy</h2>
        <p>Raido is committed to protecting your privacy. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal data.</p>
        
        <h2>10. Changes to Terms and Conditions</h2>
        <p>Raido reserves the right to update these terms and conditions at any time without prior notice. Users are encouraged to review these terms periodically to stay informed of any changes.</p>
        
        <h2>11. Contact Information</h2>
        <p>For any questions or concerns regarding these terms and conditions, you can contact us at:</p>
        <ul>
          <li>Phone: +918667728057</li>
          <li>Email: admin@raidotaxi.com</li>
        </ul>
        
        <p>By using Raido's services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.</p>
        <p>These terms and conditions form a legally binding agreement between you and Raido. If you do not agree with any part of these terms, please refrain from using our services.</p>
      </main>
    </div>
  );
};

export default Terms;
