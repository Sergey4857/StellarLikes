
import HeroHome from 'components/HeroHome/HeroHome';
import Available from 'components/Available/Available';
import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
const HomePage = () => {
  return (
    <>
      <HeroHome />
      <Available />
      <Benefits />
      <Rating />
      <Features />
      <Customers />
      <FaqBlock />
    </>
  );
};

export default HomePage;
