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
import TikTokViews from './TikTokViews';
import CustomQuantity from 'components/CustomQuantiy/CustomQuantity';
import FreeViews from 'components/FreeViews/FreeViews';
import Available from 'components/Available/Available';
import CalculatePrice from 'components/CalculatePrice/CalculatePrice';
import css from './TikTokViews.module.css';
import tikTokViewsIcon from '../../icons/tiktokViews.svg';

const TikTokViewsPage = ({ tiktokViewsData }) => {
  const navigate = useNavigate();
  const linkRef = useRef(null);
  const decorItemRefs = useRef([]);
  const [showCustomQuantity, setShowCustomQuantity] = useState(false);
  const [showPackages, setShowPackages] = useState(true);
  const [tiktokviews, setTiktokviews] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [customQuantity, setCustomQuantity] = useState(0);
  const [priceDetails, setPriceDetails] = useState({
    oldPrice: 0,
    newPrice: 0,
    savings: 0,
    discountPercent: 0,
  });
  console.log(priceDetails);
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

  const basePricePerUnit = tiktokViewsData
    ? parseFloat(tiktokViewsData.price)
    : 0;
  const productId = tiktokViewsData?.id;

  const discountLevels = useMemo(() => {
    return tiktokViewsData
      ? tiktokViewsData.discount_levels
          .slice()
          .sort((a, b) => a.quantity - b.quantity)
      : [];
  }, [tiktokViewsData]);

  useEffect(() => {
    if (tiktokViewsData && tiktokViewsData.preset_packages.length > 0) {
      const packages = tiktokViewsData.preset_packages.map((pkg, index) => ({
        ...pkg,
        quantity: parseInt(pkg.quantity),
        discountPercent: parseFloat(pkg.discount.replace('%', '')) / 100,
        active: index === 0,
      }));
      setTiktokviews(packages);
      setSelectedPrice(packages[0]);
    }
  }, [tiktokViewsData]);

  const toggleViews = index => {
    setTiktokviews(prevViews =>
      prevViews.map((views, i) => ({
        ...views,
        active: i === index,
      }))
    );
    setSelectedPrice(tiktokviews[index]);
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

      <section className={css.buyViews}>
        <div className={css.buyViewsTitle}>
          Buy TikTok <span className="pinkText">Views</span>
          <img
            className={css.buyViewsImg}
            src={tikTokViewsIcon}
            alt="buyViewsImg"
          />
          starting from <span className="pinkText">$0.99</span>
        </div>
        <p className={css.buyViewsText}>
          We offer top-notch quality TikTok views at the best prices! Check our
          deals below, choose the best views package, and make an order now!
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
              onClick={() => {
                setShowCustomQuantity(false);
                setShowPackages(true);
              }}
            >
              Packages
            </div>
          </div>
        )}

        {showPackages && tiktokviews.length > 0 && (
          <div className={css.buyViewsQuantityBlock}>
            {tiktokviews.map((data, index) => (
              <TikTokViews
                data={data}
                index={index}
                key={index}
                color="violet"
                toggleViews={toggleViews}
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
            blockColor="green"
            textColor="greenText"
            discountColor="greenDiscount"
          />
        )}

        <div className={css.priceBlock}>
          {(showPackages && selectedPrice) ||
          (showCustomQuantity && customQuantity > 0) ? (
            <CalculatePrice
              basePricePerUnit={basePricePerUnit}
              quantity={showPackages ? selectedPrice.quantity : customQuantity}
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
      <FreeViews />
      <Available />
      <Benefits />
      <Rating />
      <Features />
      <Customers />
      <FaqBlock faqsData={faqsData} />
    </>
  );
};

export default TikTokViewsPage;
