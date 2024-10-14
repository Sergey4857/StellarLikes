import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
import TikTokLikes from './TikTokLikes';
import CustomQuantity from 'components/CustomQuantiy/CustomQuantity';
import HeroHome from 'components/HeroHome/HeroHome';
import FreeLikes from 'components/FreeLikes/FreeLikes';
import Available from 'components/Available/Available';
import CalculatePrice from 'components/CalculatePrice/CalculatePrice';
import css from './TikTokLikesPage.module.css';
import tikTokLikesIcon from '../../icons/tiktokLikes.svg';

const TikTokLikesPage = ({ tiktokLikesData }) => {
  const navigate = useNavigate();
  const linkRef = useRef(null);
  const decorItemRefs = useRef([]);
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
  const [showCustomQuantity, setShowCustomQuantity] = useState(false);
  const [showPackages, setShowPackages] = useState(true);
  const [tiktoklikes, setTiktoklikes] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [customQuantity, setCustomQuantity] = useState(0);
  const [priceDetails, setPriceDetails] = useState({
    oldPrice: 0,
    newPrice: 0,
    savings: 0,
    discountPercent: 0,
  });

  console.log(priceDetails);

  const basePricePerUnit = tiktokLikesData
    ? parseFloat(tiktokLikesData.price)
    : 0;
  const productId = tiktokLikesData?.id;
  const productService = tiktokLikesData?.name;
  console.log(tiktokLikesData);

  const discountLevels = useMemo(() => {
    return tiktokLikesData
      ? tiktokLikesData.discount_levels
          .slice()
          .sort((a, b) => a.quantity - b.quantity)
      : [];
  }, [tiktokLikesData]);

  useEffect(() => {
    if (tiktokLikesData && tiktokLikesData.preset_packages.length > 0) {
      const packages = tiktokLikesData.preset_packages.map((pkg, index) => ({
        ...pkg,
        quantity: parseInt(pkg.quantity),
        discountPercent: parseFloat(pkg.discount.replace('%', '')) / 100,
        active: index === 0,
      }));
      setTiktoklikes(packages);
      setSelectedPrice(packages[0]);
    }
  }, [tiktokLikesData]);

  const toggleLikes = index => {
    setTiktoklikes(prevLikes =>
      prevLikes.map((likes, i) => ({
        ...likes,
        active: i === index,
      }))
    );
    setSelectedPrice(tiktoklikes[index]);
  };

  const handleCustomQuantityChange = useCallback(quantity => {
    setCustomQuantity(quantity);
  }, []);

  const handlePriceCalculated = useCallback(calculatedPriceDetails => {
    setPriceDetails(calculatedPriceDetails);
  }, []);

  // Animations
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

  return (
    <>
      <Outlet />
      <HeroHome />
      <FreeLikes />
      <section className={css.buyLikes}>
        <h2 className={css.buyLikesTitle}>
          Buy TikTok <span className="pinkText">Likes</span>
          <img
            className={css.buyLikesImg}
            src={tikTokLikesIcon}
            alt="buyLikesImg"
          />
          starting from <span className="pinkText">$0.99</span>
        </h2>
        <p className={css.buyLikesText}>
          We offer top-notch quality TikTok likes at the best prices! Check our
          deals below, choose the best likes package, and make an order now!
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
              onClick={() => {
                setShowCustomQuantity(false);
                setShowPackages(true);
              }}
            >
              Packages
            </div>
          </div>
        )}

        {showPackages && tiktoklikes.length > 0 && (
          <div className={css.buyLikesQuantityBlock}>
            {tiktoklikes.map((data, index) => (
              <TikTokLikes
                data={data}
                index={index}
                key={index}
                color="violet"
                toggleLikes={toggleLikes}
              />
            ))}
          </div>
        )}

        {showCustomQuantity && (
          <CustomQuantity
            color="purple"
            discountLevels={discountLevels}
            basePricePerUnit={basePricePerUnit}
            onQuantityChange={handleCustomQuantityChange}
            customQuantity={customQuantity}
          />
        )}

        <div className={css.priceBlock}>
          {(showPackages && selectedPrice) ||
          (showCustomQuantity && customQuantity > 0) ? (
            <CalculatePrice
              basePricePerUnit={basePricePerUnit}
              quantity={showPackages ? selectedPrice.quantity : customQuantity}
              discountLevels={discountLevels}
              showCustomQuantity={showCustomQuantity}
              customQuantity={customQuantity}
              onPriceCalculated={handlePriceCalculated}
            />
          ) : null}

          <button
            className={css.buyLink}
            ref={linkRef}
            onClick={() =>
              navigate('getStarted', {
                state: {
                  quantity: showPackages
                    ? selectedPrice.quantity
                    : customQuantity,
                  productId,
                  price: priceDetails.newPrice.toFixed(2),
                  productService,
                },
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
