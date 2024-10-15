import css from '../PrivacyPolicy/PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <section className={css.privacyWrap}>
      <h1 className={css.privacyTitle}>Privacy Policy</h1>
      <div className={css.privacyData}>Last updated: 30.10.2024</div>
      <p>
        At Stellarlikes, we prioritize the protection of your privacy and have
        implemented measures to safeguard your personal information. This Policy
        is designed to help you understand how we collect, use, communicate, and
        disclose your personal information. Rest assured, any personal
        information you provide will be used exclusively to fulfill your order,
        and we commit to neither selling nor redistributing your information to
        third parties. Our commitment to maintaining the confidentiality of
        personal information is paramount, and we adhere to the following
        principles in conducting our business:
      </p>
      <h2 className={css.subTitle}>The Basics</h2>
      <ul className={css.subList}>
        <li>
          Before collecting personal information, we will clearly identify the
          purposes for which the information is being collected.
        </li>
        <li>
          We collect and use personal information solely for specified purposes
          and other compatible purposes, with the consent of the individual
          concerned or as required by law.
        </li>
        <li>
          Personal information will only be retained for as long as necessary to
          fulfill the specified purposes.
        </li>
        <li>
          Collection of personal information will be done by lawful and fair
          means, with the knowledge or consent of the individual concerned.
        </li>
        <li>
          Personal data will be relevant to the intended purposes, accurate,
          complete, and up-to-date as needed.
        </li>
        <li>
          We will protect personal information through reasonable security
          safeguards to prevent loss, theft, unauthorized access, disclosure,
          copying, use, or modification.
        </li>
        <li>
          Information about our policies and practices regarding personal
          information management will be readily available to customers.
        </li>
      </ul>
      <h2 className={css.subTitle}>Payment Processing</h2>
      <ul>
        <li>
          Some payments are processed securely using Apple Pay’s system, while
          others use a secure payment gateway, ensuring no sensitive financial
          information is input through our website.
        </li>
        <li>
          Limited payment information may be collected and stored, such as
          payment card type, expiration date, and the last four digits of the
          payment card number. However, full payment card numbers are not
          collected or stored, and all transactions are processed by our
          third-party payment processor.
        </li>
      </ul>
      <h2 className={css.subTitle}>Use of Information</h2>
      <p>
        We use information to provide, analyze, administer, enhance, and
        personalize our services and marketing efforts. This includes processing
        registrations, orders, and payments, as well as communicating with you
        on relevant topics. Information is also used to prevent, detect, and
        investigate potentially prohibited or illegal activities, analyze
        audience demographics, and improve our service.
      </p>
      <h2 className={css.subTitle}>Google Analytics</h2>
      <ul>
        <li>
          This website utilizes Google Analytics to analyze user behavior.
        </li>
        <li>
          Google Analytics uses cookies to collect information about website
          activity.
        </li>
        <li>
          Users may refuse the use of cookies by adjusting browser settings;
          however, this may limit website functionality.
        </li>
        <li>
          For more information, refer to Google’s privacy policies and terms.
        </li>
      </ul>
      <h2 className={css.subTitle}>Google Analytics Advertising</h2>
      <ul>
        <li>
          Advertising features, including Remarketing, Display Network
          Impression Reporting, Demographics, and Interest Reporting, may be
          enabled on this website.
        </li>
        <li>
          By enabling these features, users consent to Google Analytics
          collecting data for advertising purposes.
        </li>
        <li>
          We commit not to identify users or merge personally identifiable
          information with non-personally identifiable information unless with
          user consent.
        </li>
      </ul>
      <h2 className={css.subTitle}>Disclosure of Information</h2>
      <p>
        We may engage Service Providers to perform services on our behalf, such
        as marketing, advertising, IT services, and customer service. These
        Service Providers may have access to personal information only for the
        purpose of providing their services and are not authorized to use or
        disclose the information for any other purpose.
      </p>
      <h2 className={css.subTitle}>Cookies</h2>
      <ul className={css.subLastList}>
        <li>Cookies are used to enhance the website experience.</li>
        <li>
          You can set your browser to notify you of received cookies, allowing
          you to decide whether to accept them.
        </li>
        <li>
          No Personal Information is stored in these cookies; they simply
          identify you as you navigate the site.
        </li>
      </ul>
      <p>
        By using Stellarlikes’s services, you acknowledge and agree to the terms
        outlined in this Privacy Policy. We may update this policy without prior
        notice, and it is your responsibility to review any changes.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
