import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
import TikTokFollowers from './TikTokFollowers';
import CustomQuantity from 'components/CustomQuantiy/CustomQuantity';
import FreeFollowers from 'components/FreeFollowers/FreeFollowers';
import Available from 'components/Available/Available';
import CalculatePrice from 'components/CalculatePrice/CalculatePrice';
import css from './TikTokFollowers.module.css';
import tikTokFollowersIcon from '../../icons/tiktokFolowers.svg';

const TikTokFollowersPage = ({ tiktokFollowersData }) => {
  const navigate = useNavigate();
  const linkRef = useRef(null);
  const decorItemRefs = useRef([]);
  const [showCustomQuantity, setShowCustomQuantity] = useState(false);
  const [showPackages, setShowPackages] = useState(true);
  const [tiktokfollowers, setTiktokfollowers] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [customQuantity, setCustomQuantity] = useState(0);
  const [priceDetails, setPriceDetails] = useState({
    oldPrice: 0,
    newPrice: 0,
    savings: 0,
    discountPercent: 0,
  });
  const faqsData = [
    {
      question: 'What are the benefits of buying TikTok followers?',
      answer:
        'Buying TikTok followers can make your content more visible. It helps build your credibility and boosts engagement, which can lead to more growth and influence on TikTok.',
      open: false,
    },
    {
      question: 'How do I choose a reputable service to buy TikTok followers?',
      answer:
        'Look for services that offer real followers from real accounts. Check user reviews and testimonials. Ensure they have secure payment methods and protect your data.',
      open: false,
    },
    {
      question: 'Are there risks involved with buying TikTok followers?',
      answer:
        'Yes, buying fake followers can damage your credibility and might even get you banned. Always buy from trusted providers to avoid these problems.',
      open: false,
    },
    {
      question:
        'Can I buy cheap TikTok followers without compromising quality?',
      answer:
        'Yes, you can find affordable, authentic TikTok followers. Look for deals that offer real engagement to invest wisely in your TikTok growth.',
      open: false,
    },
    {
      question: 'How quickly will I see results after buying TikTok followers?',
      answer:
        "Buying TikTok followers instantly boosts your engagement. You'll see more followers quickly, increasing the chances of your content appearing on the 'For You' page and growing your reach fast.",
      open: false,
    },
    {
      question:
        'Why should I order TikTok followers to stay ahead of competitors?',
      answer:
        "Ordering TikTok followers makes your content more popular, helping you influence trends and establish your presence. It's a way to stay ahead in a crowded market.",
      open: false,
    },
    {
      question: 'How can I maximize my investment in TikTok followers?',
      answer:
        'Mix purchased followers with high-quality content. Also, engage with your audience by responding to comments and joining trends. This builds loyalty and sustained growth.',
      open: false,
    },
    {
      question:
        'Where can I find trusted platforms to buy real TikTok followers?',
      answer:
        "Look for platforms with good user reviews and testimonials. These insights help ensure you get real followers that boost your account's credibility.",
      open: false,
    },
    {
      question: 'What should I consider for a safe TikTok followers purchase?',
      answer:
        'Choose a service with secure payments and a clear privacy policy. Ensure they offer real followers from real accounts to protect your account and maintain your integrity on TikTok.',
      open: false,
    },
    {
      question: 'How can buying TikTok followers enhance my content reach?',
      answer:
        "Buying TikTok followers increases your content's chance to be on the 'For You' page. This wider exposure attracts more viewers and boosts your content's visibility.",
      open: false,
    },
  ];

  console.log(priceDetails);
  const basePricePerUnit = tiktokFollowersData
    ? parseFloat(tiktokFollowersData.price)
    : 0;

  const productId = tiktokFollowersData?.id;
  const productService = tiktokFollowersData?.name;
  const discountLevels = useMemo(() => {
    return tiktokFollowersData
      ? tiktokFollowersData.discount_levels
          .slice()
          .sort((a, b) => a.quantity - b.quantity)
      : [];
  }, [tiktokFollowersData]);

  useEffect(() => {
    if (tiktokFollowersData && tiktokFollowersData.preset_packages.length > 0) {
      const packages = tiktokFollowersData.preset_packages.map(
        (pkg, index) => ({
          ...pkg,
          quantity: parseInt(pkg.quantity),
          discountPercent: parseFloat(pkg.discount.replace('%', '')) / 100,
          active: index === 0,
        })
      );
      setTiktokfollowers(packages);
      setSelectedPrice(packages[0]);
    }
  }, [tiktokFollowersData]);

  const toggleFollowers = index => {
    setTiktokfollowers(prevFollowers =>
      prevFollowers.map((followers, i) => ({
        ...followers,
        active: i === index,
      }))
    );
    setSelectedPrice(tiktokfollowers[index]);
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

      <section className={css.buyFollowers}>
        <div className={css.buyFollowersTitle}>
          Buy TikTok <span className="orangeText">Followers</span>
          <img
            className={css.buyFollowersImg}
            src={tikTokFollowersIcon}
            alt="buyFollowersImg"
          />{' '}
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
                onClick={() => {
                  setShowCustomQuantity(false);
                  setShowPackages(true);
                }}
              >
                Packages
              </div>
            </div>
          )}
          {showPackages && tiktokfollowers.length > 0 && (
            <div className={css.buyFollowersQuantityBlock}>
              {tiktokfollowers.map((data, index) => (
                <TikTokFollowers
                  data={data}
                  index={index}
                  key={index}
                  color="violet"
                  toggleFollowers={toggleFollowers}
                />
              ))}
            </div>
          )}
          {showCustomQuantity && (
            <CustomQuantity
              discountLevels={discountLevels}
              basePricePerUnit={basePricePerUnit}
              onQuantityChange={handleCustomQuantityChange}
              customQuantity={customQuantity}
              blockColor="orange"
              textColor="orangeText"
              discountColor="orangeDiscount"
            />
          )}
          <div className={css.priceBlock}>
            {(showPackages && selectedPrice) ||
            (showCustomQuantity && customQuantity > 0) ? (
              <CalculatePrice
                basePricePerUnit={basePricePerUnit}
                quantity={
                  showPackages ? selectedPrice.quantity : customQuantity
                }
                presetDiscountPercent={
                  showPackages ? selectedPrice.discountPercent : null
                }
                discountLevels={discountLevels}
                showPackages={showPackages}
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
        </div>
      </section>
      <FreeFollowers />
      <Available />
      <Benefits />
      <Rating />
      <Features />
      <Customers />
      <FaqBlock faqsData={faqsData} />
    </>
  );
};

export default TikTokFollowersPage;
