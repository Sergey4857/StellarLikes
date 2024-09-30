import AboutHero from 'components/AboutHero/AboutHero';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
import TeamCompound from 'components/TeamCompound/TeamCompound';

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <TeamCompound />
      <Customers />
      <FaqBlock />
    </>
  );
};

export default AboutUs;
