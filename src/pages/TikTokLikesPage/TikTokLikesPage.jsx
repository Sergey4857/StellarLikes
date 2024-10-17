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
import ImportansBlock from 'components/Importans/ImportansBlock';
import importansLikes1 from '../../icons/importansLikes1.svg';
import importansLikes2 from '../../icons/importansLikes2.svg';

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

  const importansData = [
    {
      title: "Buy TikTok Likes: Boost Your Content's",
      image: importansLikes1,
      content: (
        <>
          <h3>Reach</h3>
          <p>
            In today's fast-paced social media world, buying TikTok likes can
            really help. It boosts your online presence and makes your content
            more seen. This is great for those who want to grow on TikTok.
            Buying likes is a simple way to get quick results. It helps creators
            grow their online presence fast and well.
          </p>
          <h3>Why You Should Buy TikTok Likes</h3>
          <p>
            Buying TikTok likes can really boost your presence on the platform.
            It has many benefits that help your account grow and stay popular.
            Here are three key reasons why getting TikTok likes is a good idea.
          </p>
          <h4>Increased Visibility</h4>
          <p>
            Buying TikTok likes can make your content more visible. The TikTok
            algorithm likes content with more engagement. This means posts with
            more likes are more likely to show up on others' 'For You' pages.
          </p>
          <p>
            This can help you grow your audience naturally and get more
            interactions.
          </p>
          <h4>Building Credibility</h4>
          <p>
            Having a lot of likes helps build your online credibility. When
            people see content with lots of likes, they think it's valuable and
            trustworthy. This can make your reputation stronger and attract more
            followers who want to see reliable content.
          </p>
          <h4>Jump-starting Engagement</h4>
          <p>
            Buying TikTok likes can also kickstart your engagement. This can
            lead to a chain reaction where more users want to engage TikTok
            followers. The initial boost in likes can encourage others to like,
            comment, and share your content. This can increase your online
            interactions even more.
          </p>
          <h3>How to Buy TikTok Likes Safely</h3>
          <p>
            Buying TikTok likes can help you get more views and likes. But, you
            must be careful. To buy likes safely, pick a reputable TikTok
            service and make sure your transactions are secure. This keeps your
            account and personal info safe.
          </p>
          <h3>Choosing a Reputable Service</h3>
          <p>
            When you want to buy TikTok likes, choose a reputable TikTok service
            carefully. Look for services with good reviews and real stories from
            users. Good services give you real likes from real people, making
            your engagement look better.
          </p>
          <p>
            Stay away from services that use fake accounts or bots. They can
            harm your account's trustworthiness.
          </p>
          <h4>Ensuring Secure Transactions</h4>
          <p>
            For a safe TikTok likes purchase, make sure your transactions are
            secure. Choose services that use safe payment systems to protect
            your money. Also, check if they have strong privacy rules to keep
            your info safe.
          </p>
          <p>
            These steps are key to keeping your account safe and avoiding
            problems on TikTok.
          </p>
          <h3>Benefits of Purchasing TikTok Likes</h3>
          <p>
            Knowing the benefits of buying TikTok likes is key for those wanting
            to use the platform well. Buying likes can help creators reach more
            people and grow faster on TikTok.
          </p>
          <h4>Enhanced Content Reach</h4>
          <p>
            Buying TikTok likes helps your content get seen by more people. When
            your videos get lots of likes, TikTok's algorithm shows them to more
            folks. This helps you reach new viewers and grow your audience.
          </p>
          <h4>Accelerated Growth</h4>
          <p>
            Buying likes also speeds up your growth on TikTok. It makes your
            videos more popular, which is hard to do naturally. As your likes go
            up, so does your follower count. This makes your TikTok presence
            bigger and can make your content go viral.
          </p>
        </>
      ),
    },
    {
      title: 'Tips for Maximizing Your Investment',
      image: importansLikes2,
      content: (
        <>
          <p>
            Using TikTok likes wisely is key. Mix them with quality TikTok
            content and audience engagement strategies for growth. Here are tips
            to boost your TikTok likes.
          </p>
          <h4>Combining Likes with Quality Content</h4>
          <p>
            Buying likes helps, but your videos must be top-notch. Make sure
            your quality TikTok content keeps viewers coming back. Use great
            visuals, interesting stories, and popular music to grab attention.
          </p>
          <h4>Engaging with Your Audience</h4>
          <p>
            Interacting with your viewers is crucial. Use audience engagement
            strategies like replying to comments and hosting live videos. This
            builds a loyal community. Regularly talking to your audience keeps
            them interested in your content.
          </p>
          <ul>
            <li>
              Create Interactive Content: Videos that ask viewers to like,
              share, and comment boost engagement.
            </li>
            <li>
              Regular Updates: Posting often keeps your audience eager for more.
            </li>
          </ul>
          <h3>Risks involved with Fake TikTok Likes</h3>
          <p>
            Many influencers and content creators want to be famous on social
            media. They might buy fake TikTok likes to get more attention. But,
            the risks of fake TikTok likes are much bigger than any short-term
            gains.
          </p>
          <p>
            One big worry is TikTok authenticity issues. Fake likes from bots or
            inactive accounts don't show real interest in your work. This lowers
            your engagement and hurts your credibility with real followers.
          </p>
          <p>
            Also, TikTok's algorithms watch for fake activities. They check
            where likes come from. If your account looks suspicious, you could
            face penalties or even get banned. So, avoiding TikTok bots is key
            to keeping your account real and safe.
          </p>
          <p>
            The temptation to get more likes quickly is strong. But, the dangers
            of fake TikTok likes can harm you for a long time. Choosing real
            engagement and avoiding fake practices helps grow a true follower
            base. It keeps your online image and reputation safe.
          </p>
          <h3>Buy Cheap TikTok Likes Without Compromising Quality</h3>
          <p>
            Boosting your TikTok presence doesn't have to cost a lot. When you
            buy cheap TikTok likes, make sure they're real. This way, you get
            both good value and real interaction.
          </p>
          <h4>Affordable Yet Authentic</h4>
          <p>
            Looking for cheap options? Focus on authentic TikTok engagement.
            Real likes from real accounts make your profile look better. They
            also help you get noticed without losing quality.
          </p>
          <h4>Finding the Best Deals</h4>
          Getting the best TikTok like deals is about smart shopping. Look for
          services with good reviews and a history of real engagement. By
          comparing and understanding what each offers, you can find great deals
          that are both affordable and high-quality.
          <h3>Buy TikTok Likes Instantly and See the Difference</h3>
          <p>
            Buying TikTok likes instantly can change your social media game. It
            gives you quick, real results. Your content gets the boost it needs
            to reach more people.
          </p>
          <h4>Immediate Results</h4>
          <p>
            Buying TikTok likes instantly gives you immediate results. This
            quick increase in likes makes your videos more attractive. It also
            helps your content get seen more on TikTok's algorithm. The benefits
            of instant TikTok growth are many:
          </p>
          <ul>
            <li>More visibility on TikTok's "For You" page.</li>
            <li>More interaction and engagement with your audience.</li>
            <li>More credibility and social proof.</li>
          </ul>
          <p>
            Using TikTok's instant like feature can really boost your presence.
            It helps you get a bigger, more engaged following.
          </p>
          <h3>Order TikTok Likes to Stay Ahead of Your Competitors</h3>
          <p>
            In the fast-paced world of TikTok, staying ahead is key. Ordering
            TikTok likes boosts your content's visibility. This makes it easier
            to stand out among many creators.
          </p>
          <p>
            With more likes, you gain credibility. This gives you an edge over
            others. It's a big help in a crowded space.
          </p>
          <h4>Competitive Edge</h4>
          <p>
            Being seen and engaging on TikTok is crucial. Ordering TikTok likes
            helps your videos show up on For You pages. This increases your
            reach and followers.
          </p>
          <p>
            This move boosts your profile's appeal. It makes it more likely for
            people to watch and follow your videos. A strong like count puts you
            at the top of engagement metrics.
          </p>
          <h4>Influencing Trends</h4>
          <p>
            Ordering TikTok likes can also shape trends. As your likes grow, so
            does your chance to start new trends. Your videos can become viral
            hits.
          </p>
          <p>
            This boosts your status as a creator and influencer. It opens doors
            to collaborations and more followers. You become a key player in
            TikTok's trends.
          </p>
        </>
      ),
    },
  ];

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
      <FreeLikes data={tiktokLikesData} />
      <section className={css.buyLikes}>
        <h3 className={css.buyLikesTitle}>
          Buy TikTok <span className="pinkText">Likes</span>
          <img
            className={css.buyLikesImg}
            src={tikTokLikesIcon}
            alt="buyLikesImg"
          />
          starting from <span className="pinkText">$0.99</span>
        </h3>
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
                setShowCustomQuantity(!showCustomQuantity);
                setShowPackages(!showPackages);
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
                setCustomQuantity(0);
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
      <ImportansBlock importansData={importansData} />;
      <FaqBlock faqsData={faqsData} />
    </>
  );
};

export default TikTokLikesPage;
