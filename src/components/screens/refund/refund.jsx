import Head from 'next/head';
import styles from './RefundPolicy.module.scss';

const RefundPolicy = () => {
  return (
    <div className={styles.refundContainer}>
      <Head>
        <title>Raido Refund Policy</title>
        <meta name="description" content="Refund Policy for Raido's ride-hailing services" />
      </Head>
      <main className={styles.refundMain}>
        <h1>Raido Refund Policy</h1>
        <p>At Raido, we strive to provide the best ride-hailing service possible. However, we understand that there may be instances where a refund is necessary. This Refund Policy outlines the conditions under which refunds are provided and the process for requesting a refund.</p>

        <h2>1. Eligibility for Refunds</h2>
        <h3>1.1. Cancellations</h3>
        <ul>
          <li><strong>Passenger Cancellations:</strong> If a passenger cancels a ride within the free cancellation window specified in the app, they are eligible for a full refund of any advance payment.</li>
          <li><strong>Driver Cancellations:</strong> If a driver cancels a ride, the passenger is eligible for a full refund of any advance payment made for that ride.</li>
        </ul>

        <h3>1.2. Service Issues</h3>
        <ul>
          <li><strong>Driver No-Show:</strong> If the assigned driver fails to arrive at the pickup location without proper notification, the passenger is eligible for a full refund.</li>
          <li><strong>Significant Delays:</strong> If the driver is significantly delayed beyond the estimated arrival time without notifying the passenger, a partial or full refund may be granted based on the delay duration and inconvenience caused.</li>
          <li><strong>Safety Concerns:</strong> If a ride is terminated early due to legitimate safety concerns raised by the passenger, a partial or full refund may be granted.</li>
        </ul>

        <h3>1.3. Payment Errors</h3>
        <ul>
          <li><strong>Overcharging:</strong> If a passenger is charged more than the fare displayed at the end of the ride, they are eligible for a refund of the overcharged amount.</li>
          <li><strong>Duplicate Charges:</strong> If a passenger is charged multiple times for the same ride, the duplicate charges will be refunded.</li>
        </ul>

        <h2>2. Non-Refundable Situations</h2>
        <p>Refunds will not be provided in the following situations:</p>
        <ul>
          <li><strong>Passenger No-Show:</strong> If the passenger is not present at the pickup location without prior cancellation, no refund will be provided.</li>
          <li><strong>Cancellation After Free Window:</strong> If a passenger cancels a ride after the free cancellation window has expired, cancellation fees may apply, and no refund will be provided.</li>
          <li><strong>Misconduct:</strong> If a ride is terminated due to passenger misconduct or violation of our terms and conditions, no refund will be provided.</li>
        </ul>

        <h2>3. Refund Request Process</h2>
        <h3>3.1. Contact Customer Support</h3>
        <ul>
          <li><strong>Phone:</strong> Call our customer support at +918667728057.</li>
          <li><strong>Email:</strong> Send an email to <a href="mailto:admin@raidotaxi.com?subject=Refund Request">admin@raidotaxi.com</a> with the subject line "Refund Request."</li>
        </ul>

        <h3>3.2. Provide Necessary Details</h3>
        <p>In the refund request, please include the following details:</p>
        <ul>
          <li>Full name and contact information.</li>
          <li>Ride details (date, time, pickup and drop-off locations).</li>
          <li>Reason for the refund request.</li>
          <li>Any additional relevant information or documentation (e.g., screenshots, receipts).</li>
        </ul>

        <h3>3.3. Refund Review</h3>
        <p>Our customer support team will review the refund request and respond within 7-10 business days. During this review, we may contact you for additional information or clarification.</p>

        <h3>3.4. Refund Processing</h3>
        <p>If the refund request is approved, the refund will be processed within 3-5 business days. The refund will be credited to the original payment method used for the booking.</p>

        <h2>4. Changes to This Refund Policy</h2>
        <p>Raido reserves the right to update this Refund Policy at any time. Changes will be posted on our website and will take effect immediately upon posting. Users are encouraged to review this policy periodically to stay informed about any changes.</p>

        <h2>5. Contact Us</h2>
        <p>If you have any questions or concerns about this Refund Policy, please contact us at:</p>
        <ul>
          <li>Phone: +918667728057</li>
          <li>Email: admin@raidotaxi.com</li>
        </ul>

        <p>By using Raido&apos;s services, you acknowledge that you have read, understood, and agree to be bound by this Refund Policy.</p>
      </main>
    </div>
  );
};

export default RefundPolicy;
