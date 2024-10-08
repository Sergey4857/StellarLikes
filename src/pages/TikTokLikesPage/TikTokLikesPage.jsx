import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
import css from './TikTokLikesPage.module.css';
import tikTokLikes from '../../icons/tiktokLikes.svg';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import TikTokLikes from './TikTokLikes';
import CustomQuantity from 'components/CustomQuantiy/CustomQuantity';
import HeroHome from 'components/HeroHome/HeroHome';
import FreeLikes from 'components/FreeLikes/FreeLikes';
import Available from 'components/Available/Available';
import { gsap } from 'gsap';

const TikTokLikesPage = () => {
  const navigate = useNavigate();
  const [tiktoklikes, setTiktoklikes] = useState([
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
  const faqsData = [
    {
      question: 'What are the benefits of buying TikTok likes?',
      answer:
        'Buying TikTok likes can make your content more visible. It helps build your credibility and boosts engagement, which can lead to more growth and influence on TikTok.',
      open: false,
    },
    {
      question: 'How do I choose a reputable service to buy TikTok likes?',
      answer:
        'Look for services that offer real likes from real accounts. Check user reviews and testimonials. Ensure they have secure payment methods and protect your data.',
      open: false,
    },
    {
      question: 'Are there risks involved with buying TikTok likes?',
      answer:
        'Yes, buying fake likes can damage your credibility and might even get you banned. Always buy from trusted providers to avoid these problems.',
      open: false,
    },
    {
      question: 'Can I buy cheap TikTok likes without compromising quality?',
      answer:
        'Yes, you can find affordable, authentic TikTok likes. Look for deals that offer real engagement to invest wisely in your TikTok growth.',
      open: false,
    },
    {
      question: 'How quickly will I see results after buying TikTok likes?',
      answer:
        "Buying TikTok likes instantly boosts your engagement. You'll see more likes quickly, increasing the chances of your content appearing on the 'For You' page and growing your reach fast.",
      open: false,
    },
    {
      question: 'Why should I order TikTok likes to stay ahead of competitors?',
      answer:
        "Ordering TikTok likes makes your content more popular, helping you influence trends and establish your presence. It's a way to stay ahead in a crowded market.",
      open: false,
    },
    {
      question: 'How can I maximize my investment in TikTok likes?',
      answer:
        'Mix purchased likes with high-quality content. Also, engage with your audience by responding to comments and joining trends. This builds loyalty and sustained growth.',
      open: false,
    },
    {
      question: 'Where can I find trusted platforms to buy real TikTok likes?',
      answer:
        "Look for platforms with good user reviews and testimonials. These insights help ensure you get real likes that boost your account's credibility.",
      open: false,
    },
    {
      question: 'What should I consider for a safe TikTok likes purchase?',
      answer:
        'Choose a service with secure payments and a clear privacy policy. Ensure they offer real likes from real accounts to protect your account and maintain your integrity on TikTok.',
      open: false,
    },
    {
      question: 'How can buying TikTok likes enhance my content reach?',
      answer:
        "Buying TikTok likes increases your content's chance to be on the 'For You' page. This wider exposure attracts more viewers and boosts your content's visibility.",
      open: false,
    },
  ];

  const linkRef = useRef(null);

  const decorItemRefs = useRef([]);

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

  const [showCustomQuantity, setShowCustomQuantity] = useState(false);
  const [showPackages, setShowPackages] = useState(true);

  const [selectedPrice, setSelectedPrice] = useState(tiktoklikes[0]);
  const toggleLikes = index => {
    setTiktoklikes(
      tiktoklikes.map((likes, i) => {
        return {
          ...likes,
          active: i === index,
        };
      })
    );
    setSelectedPrice(tiktoklikes[index]);
  };

  console.log(selectedPrice);

  return (
    <>
      <Outlet />
      <HeroHome />
      <FreeLikes />
      <section className={css.buyLikes}>
        <div className={css.buyLikesTitle}>
          Buy TikTok <span className="pinkText">Likes</span>
          <img
            className={css.buyLikesImg}
            src={tikTokLikes}
            alt="buyLikesImg"
          />
          starting from <span className="pinkText">$0.99</span>
        </div>
        <p className={css.buyLikesText}>
          We offer top-notch quality TikTok likes at the best prices! Check our
          deals below, choose best likes package and make an order now!
        </p>
        <div className={css.buyLikesBenefits}>
          <div className={css.buyLikesBenefit}>24/7 support</div>
          <div className={css.buyLikesBenefit}>Quick Delivery Start</div>
          <div className={css.buyLikesBenefit}>No password required</div>
        </div>

        {showPackages && (
          <div className={css.buyLikesCustomWrap}>
            <div
              className={css.buyLikesCustomLink}
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
          <div className={css.buyLikesCustomWrap}>
            <div
              className={css.buyLikesCustomLink}
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
          <div className={css.buyLikesQuantityBlock}>
            {tiktoklikes.map((data, index) => (
              <TikTokLikes
                data={data}
                index={index}
                key={index}
                toggleLikes={toggleLikes}
                color="violet"
              />
            ))}
          </div>
        )}

        {showCustomQuantity && <CustomQuantity color="purple" />}
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
            className={css.buyLink}
            ref={linkRef}
            onClick={() =>
              navigate('getStarted', {
                state: { selectedPrice },
              })
            }
          >
            <span className={css.linkText}>Buy Now</span>
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
      <Available />
      <Benefits />
      <Rating />
      <Features />
      <Customers />
      <FaqBlock faqsData={faqsData} />
    </>
  );
};

export default TikTokLikesPage;
