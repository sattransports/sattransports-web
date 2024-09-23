import Head from 'next/head';
import styles from './CookiesPolicy.module.scss';

const CookiesPolicy = () => {
  return (
    <div className={styles.cookiesContainer}>
      <Head>
        <title>Raido Cookies Policy</title>
        <meta name="description" content="Cookies Policy for Raido&apos;s services" />
      </Head>
      <main className={styles.cookiesMain}>
        <h1>Raido Cookies Policy</h1>
        <p>This Cookies Policy explains how Raido uses cookies and similar technologies on our website and mobile application. By using our services, you consent to the use of cookies in accordance with this policy.</p>

        <h2>1. What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device (computer, tablet, or mobile) by your web browser when you visit a website. Cookies allow websites to recognize your device, store preferences, and understand your interactions with the site.</p>

        <h2>2. Types of Cookies We Use</h2>
        <h3>Essential Cookies</h3>
        <p>These cookies are necessary for the website to function properly. They enable core functionalities such as security, network management, and accessibility. You can set your browser to block or alert you about these cookies, but some parts of the site may not work as intended.</p>

        <h3>Performance and Analytics Cookies</h3>
        <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the performance and user experience of our site.</p>

        <h3>Functionality Cookies</h3>
        <p>These cookies allow our website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features.</p>

        <h3>Targeting or Advertising Cookies</h3>
        <p>These cookies are used to deliver content that is more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.</p>

        <h2>3. How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li><strong>Remember your preferences and settings:</strong> This helps us provide you with a more personalized experience.</li>
          <li><strong>Understand user behavior:</strong> By analyzing how users interact with our website, we can improve its performance and functionality.</li>
          <li><strong>Provide relevant content and advertisements:</strong> We use cookies to deliver content and advertisements that are tailored to your interests.</li>
        </ul>

        <h2>4. Managing Cookies</h2>
        <p>You can manage your cookie preferences through your web browser settings. Most browsers allow you to:</p>
        <ul>
          <li>See what cookies are stored and delete them on a per-site basis.</li>
          <li>Block third-party cookies.</li>
          <li>Block cookies from specific websites.</li>
          <li>Block all cookies from being set.</li>
          <li>Delete all cookies when you close your browser.</li>
        </ul>
        <p>For more information on how to manage cookies in your browser, visit the following links:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/help/4027947/windows-delete-cookies" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
        <p>Please note that if you disable cookies, some features of our website or app may not function properly.</p>

        <h2>5. Third-Party Cookies</h2>
        <p>We may allow third-party service providers to place cookies on your device for the purposes mentioned above. These third-party cookies are subject to the respective privacy policies of these external services, and we encourage you to review those policies.</p>

        <h2>6. Changes to This Cookies Policy</h2>
        <p>We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on our website. You are advised to review this Cookies Policy periodically for any changes. Changes to this Cookies Policy are effective when they are posted on this page.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions or concerns about this Cookies Policy, please contact us at:</p>
        <ul>
          <li>Phone: +918667728057</li>
          <li>Email: admin@raidotaxi.com</li>
        </ul>

        <p>By using Raido&apos;s services, you acknowledge that you have read, understood, and agree to be bound by this Cookies Policy.</p>
      </main>
    </div>
  );
};

export default CookiesPolicy;
