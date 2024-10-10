import AboutHero from 'components/AboutHero/AboutHero';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
import TeamCompound from 'components/TeamCompound/TeamCompound';

const AboutUs = () => {
  const faqsData = [
    {
      question: 'What services does StellarLikes offer?',
      answer:
        'StellarLikes provides options to buy TikTok likes, followers, and views, helping to boost your profile visibility and engagement on the platform.',
      open: false,
    },
    {
      question: 'Are the followers and likes real?',
      answer:
        'Yes, StellarLikes aims to deliver authentic engagement from real accounts to maintain quality and authenticity on your TikTok profile.',
      open: false,
    },
    {
      question: 'How quickly will I see results after purchase?',
      answer:
        'Orders typically start processing within a few minutes, with full delivery within 15-30 minutes, depending on the package size.',
      open: false,
    },
    {
      question: 'Is it safe to buy TikTok likes and followers?',
      answer:
        'Absolutely. StellarLikes uses secure, compliant methods to enhance your profile without risk to your account’s safety.',
      open: false,
    },
    {
      question: 'Can I customize my order?',
      answer:
        'Yes, we offer custom packages to meet your unique engagement needs. Contact support for more details.',
      open: false,
    },
    {
      question: 'Do you offer refunds?',
      answer:
        'If there’s an issue with your order, reach out to our support team for a resolution. Refunds are provided based on our refund policy.',
      open: false,
    },
    {
      question: 'How does customer support work?',
      answer:
        'Our support team is available via chat and email to assist with any questions or issues you may encounter.',
      open: false,
    },
  ];
  return (
    <>
      <AboutHero />
      <TeamCompound />
      <Customers />
      <FaqBlock faqsData={faqsData} />
    </>
  );
};

export default AboutUs;
