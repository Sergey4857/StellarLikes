import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
import { gsap } from 'gsap';
import tikTokFollowersIcon from '../../icons/tiktokFolowers.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import TikTokFollowers from './TikTokFollowers';
import CustomQuantity from 'components/CustomQuantiy/CustomQuantity';
import FreeFollowers from 'components/FreeFollowers/FreeFollowers';
import css from './TikTokFollowers.module.css';

const TikTokFollowersPage = () => {
  const linkRef = useRef(null);
  const decorItemRefs = useRef([]);
  const faqsData = [
    {
      question: 'Is it safe to buy TikTok followers?',
      answer:
        "Yes, it's safe if you pick a trusted TikTok follower provider. Make sure they have good reviews and a reliable system. Also, they shouldn't ask for your account password.",
      open: false,
    },
    {
      question: 'How long does it take to get TikTok followers?',
      answer:
        'The time it takes varies by provider. But, many offer followers quickly, in a few hours to a couple of days. Always check their delivery policies first.',
      open: false,
    },
    {
      question: 'Will buying TikTok followers affect my account?',
      answer:
        "Buying followers from trusted providers won't hurt your account. But, fake followers can harm your credibility and break TikTok's rules.",
      open: false,
    },
    {
      question:
        'Can I increase TikTok followers organically after purchasing them?',
      answer:
        'Yes, you can. Buying followers can boost your profile. This can attract more followers naturally by making your profile more credible and visible.',
      open: false,
    },
    {
      question: 'Are there affordable options to buy TikTok followers?',
      answer:
        'Yes, there are many affordable packages. Just make sure the cheap options are from a trusted source to keep your account safe.',
      open: false,
    },
    {
      question: 'What are the benefits of buying real TikTok followers?',
      answer:
        'Real followers offer real engagement and better interaction rates. They also show your profile is popular, helping TikTok promote your content more.',
      open: false,
    },
    {
      question: 'How can I find the best site to buy TikTok followers?',
      answer:
        'Look for sites with good reviews and fast delivery. Compare prices to find a reliable and affordable provider.',
      open: false,
    },
    {
      question: 'What should I avoid when buying TikTok followers?',
      answer:
        'Stay away from fake followers and providers that ask for your password. Choose trusted providers to keep your account safe and credible.',
      open: false,
    },
    {
      question: 'How can I ensure privacy when purchasing TikTok fans?',
      answer:
        "Pick providers with clear privacy policies and secure payments. Don't share personal info or passwords unless necessary.",
      open: false,
    },
    {
      question:
        'What are the common mistakes to avoid when buying TikTok followers?',
      answer:
        'Is there a difference between expensive and affordable TikTok follower packages?',
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
  const [tiktokFollowers, setTiktokFollowers] = useState([
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

  const [selectedPrice, setSelectedPrice] = useState(tiktokFollowers[0]);
  const toggleFollowers = index => {
    setTiktokFollowers(
      tiktokFollowers.map((Followers, i) => {
        return {
          ...Followers,
          active: i === index,
        };
      })
    );
    setSelectedPrice(tiktokFollowers[index]);
  };

  return (
    <>
      <section className={css.buyFollowers}>
        <div className={css.buyFollowersTitle}>
          Buy TikTok <span className="orangeText">Followers</span>
          <img
            className={css.buyFollowersImg}
            src={tikTokFollowersIcon}
            alt="buyFollowersImg"
          />
          with Instant Delivery
        </div>
        <div className={css.buyFollowersWrapper}>
          <p className={css.buyFollowersText}>
            We offer top-notch quality TikTok Followers at the best prices!
            Check our deals below, choose best Followers package and make an
            order now!
          </p>

          <div className={css.buyFollowersBenefits}>
            <div className={css.buyFollowersBenefit}>24/7 support</div>
            <div className={css.buyFollowersBenefit}>Quick Delivery Start</div>
            <div className={css.buyFollowersBenefit}>No password required</div>
          </div>

          {showPackages && (
            <div className={css.buyFollowersCustomWrap}>
              <div
                className={css.buyFollowersCustomLink}
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
            <div className={css.buyFollowersCustomWrap}>
              <div
                className={css.buyFollowersCustomLink}
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
            <div className={css.buyFollowersQuantityBlock}>
              {tiktokFollowers.map((data, index) => (
                <TikTokFollowers
                  data={data}
                  index={index}
                  key={index}
                  toggleFollowers={toggleFollowers}
                  color="violet"
                />
              ))}
            </div>
          )}

          {showCustomQuantity && (
            <CustomQuantity
              blockColor="orange"
              textColor="orangeText"
              discountColor="orangeDiscount"
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
                <span className={css.savingsPrice}>
                  ${selectedPrice.savings}
                </span>
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
        </div>
      </section>
      <FreeFollowers />
      <Benefits />
      <Rating />
      <Features />
      <Customers />
      <FaqBlock faqsData={faqsData} />
    </>
  );
};

export default TikTokFollowersPage;
