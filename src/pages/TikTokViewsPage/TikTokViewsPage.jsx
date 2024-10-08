import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
import css from './TikTokViews.module.css';
import tikTokViews from '../../icons/tiktokViews.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import TikTokViews from './TikTokViews';
import CustomQuantity from 'components/CustomQuantiy/CustomQuantity';
import FreeViews from 'components/FreeViews/FreeViews';
import { gsap } from 'gsap';

const TikTokViewsPage = () => {
  const linkRef = useRef(null);
  const decorItemRefs = useRef([]);
  const faqsData = [
    {
      question: 'Is it safe to buy TikTok views?',
      answer:
        'Yes, buying TikTok views is safe if you choose trusted providers. Make sure they offer real views. This way, you avoid risks to your account.',
      open: false,
    },
    {
      question: 'How can purchasing TikTok views increase my engagement?',
      answer:
        "Buying TikTok views makes your videos more visible. This leads to more likes, shares, and comments. It's because more people see your content.",
      open: false,
    },
    {
      question:
        'What are the benefits of buying real TikTok views compared to fake views?',
      answer:
        "Real TikTok views boost your profile's credibility. Fake views can harm your account. TikTok might detect them and penalize you.",
      open: false,
    },
    {
      question: 'How do I choose the best site to buy TikTok views from?',
      answer:
        'Look for sites with good customer reviews and quality views. Check their pricing and support too. Reliable sites have a solid reputation.',
      open: false,
    },
    {
      question: 'Are there affordable options for buying TikTok views?',
      answer:
        'Yes, many sites offer different price plans. Compare these to find the best value for your money. Quality is key.',
      open: false,
    },
    {
      question: 'Can buying TikTok views help my videos go viral?',
      answer:
        "Buying views can make your video more visible. But, creating great content is crucial. It's the best way to go viral on TikTok.",
      open: false,
    },
    {
      question: 'How does buying views impact the TikTok algorithm?',
      answer:
        'Buying views can help your video rank better. It shows TikTok that your content is popular. This can lead to more people seeing your videos.',
      open: false,
    },
    {
      question: 'What are the steps to buy TikTok views?',
      answer:
        'First, find a trusted provider. Then, pick a package and buy it. Finally, watch how your views and engagement change.',
      open: false,
    },
    {
      question:
        'What ethical considerations should be taken into account when buying TikTok views?',
      answer:
        "There's a debate on buying views. Some see it as unfair. But, it can help grow your account. Just be true to yourself and your audience.",
      open: false,
    },
    {
      question: 'How can I convert bought views into organic growth?',
      answer:
        "To turn bought views into real growth, make great content. Talk to your followers and use TikTok's features. This keeps your momentum going.",
      open: false,
    },
  ];
  useEffect(() => {
    const link = linkRef.current;
    const decorItems = decorItemRefs.current;

    const handleMouseEnter = () => {
      gsap.to(link, {
        scaleX: 1.03,
        scaleY: 0.98,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      });

      gsap.fromTo(
        decorItems,
        { translateX: '-100%' },
        {
          translateX: 0,
          duration: 0.4,
          stagger: 0.08,
        }
      );
    };

    const handleMouseLeave = () => {
      gsap.to(link, {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      });

      gsap.to(decorItems, {
        translateX: '100%',
        duration: 0.4,
        stagger: 0.08,
      });
    };

    if (link) {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (link) {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  const navigate = useNavigate();
  const [tiktokViews, setTiktokViews] = useState([
    {
      quantity: 100,
      percent: '30%',
      price: 2.99,
      oldPrice: 4.99,
      savings: 2.01,
      active: true,
    },
    {
      quantity: 250,
      percent: '40%',
      price: 3.99,
      oldPrice: 6.99,
      savings: 3.01,
      active: false,
    },
    {
      quantity: 500,
      percent: '50%',
      price: 4.99,
      oldPrice: 8.99,
      savings: 2.01,
      active: false,
    },
    {
      quantity: 1000,
      percent: '65%',
      price: 7.99,
      oldPrice: 8.99,
      savings: 2.01,
      active: false,
    },
    {
      quantity: 2500,
      percent: '70%',
      price: 15.99,
      oldPrice: 18.99,
      savings: 2.01,
      active: false,
    },
    {
      quantity: 5000,
      percent: '75%',
      price: 25.99,
      oldPrice: 28.99,
      savings: 2.01,
      active: false,
    },
    {
      quantity: 10000,
      percent: '80%',
      price: 35.99,
      oldPrice: 38.99,
      savings: 2.01,
      active: false,
    },
    {
      quantity: 20000,
      percent: '85%',
      price: 45.99,
      oldPrice: 48.99,
      savings: 2.01,
      active: false,
    },
  ]);
  const [showCustomQuantity, setShowCustomQuantity] = useState(false);
  const [showPackages, setShowPackages] = useState(true);

  const [selectedPrice, setSelectedPrice] = useState(tiktokViews[0]);
  const toggleViews = index => {
    setTiktokViews(
      tiktokViews.map((Views, i) => {
        return {
          ...Views,
          active: i === index,
        };
      })
    );
    setSelectedPrice(tiktokViews[index]);
  };

  return (
    <>
      <section className={css.buyViews}>
        <div className={css.buyViewsTitle}>
          Buy TikTok <span className="greenText">Views</span>
          <img
            className={css.buyViewsImg}
            src={tikTokViews}
            alt="buyViewsImg"
          />
          with Instant Delivery
        </div>
        <p className={css.buyViewsText}>
          We offer top-notch quality TikTok Views at the best prices! Check our
          deals below, choose best Views package and make an order now!
        </p>
        <div className={css.buyViewsBenefits}>
          <div className={css.buyViewsBenefit}>24/7 support</div>
          <div className={css.buyViewsBenefit}>Quick Delivery Start</div>
          <div className={css.buyViewsBenefit}>No password required</div>
        </div>

        {showPackages && (
          <div className={css.buyViewsCustomWrap}>
            <div
              className={css.buyViewsCustomLink}
              to=""
              onClick={() => {
                setShowCustomQuantity(true);
                setShowPackages(false);
              }}
            >
              Custom Quantity
            </div>
          </div>
        )}

        {showCustomQuantity && (
          <div className={css.buyViewsCustomWrap}>
            <div
              className={css.buyViewsCustomLink}
              to=""
              onClick={() => {
                setShowCustomQuantity(false);
                setShowPackages(true);
              }}
            >
              Packages
            </div>
          </div>
        )}

        {showPackages && (
          <div className={css.buyViewsQuantityBlock}>
            {tiktokViews.map((data, index) => (
              <TikTokViews
                data={data}
                index={index}
                key={index}
                toggleViews={toggleViews}
                color="violet"
              />
            ))}
          </div>
        )}

        {showCustomQuantity && (
          <CustomQuantity
            blockColor="green"
            textColor="greenText"
            discountColor="greenDiscount"
          />
        )}
        <div className={css.priceBlock}>
          <div className={css.priceContent}>
            <div className={css.priceWrap}>
              <div className={css.mainPrice}>${selectedPrice.price}</div>
              <div className={css.oldPrice}>${selectedPrice.oldPrice}</div>
            </div>
            <div className={css.savings}>
              You’re saving{' '}
              <span className={css.savingsPrice}>${selectedPrice.savings}</span>
            </div>
          </div>
          <button
            ref={linkRef}
            className={css.buyLink}
            onClick={() =>
              navigate('getStarted', {
                state: { selectedPrice },
              })
            }
          >
            <span className={css.linkText}> Buy Now</span>
            <span className={css.decor}>
              <span
                ref={el => (decorItemRefs.current[0] = el)}
                className={css.decorItem}
              ></span>
              <span
                ref={el => (decorItemRefs.current[1] = el)}
                className={css.decorItem}
              ></span>
            </span>
          </button>
        </div>
      </section>
      <FreeViews />
      <Benefits />
      <Rating />
      <Features />
      <Customers />
      <FaqBlock faqsData={faqsData} />
    </>
  );
};

export default TikTokViewsPage;
