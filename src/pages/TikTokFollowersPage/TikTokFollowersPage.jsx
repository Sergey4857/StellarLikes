import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';

import FaqBlock from 'components/Faq/FaqBlock';
import TikTokFollowers from './TikTokFollowers';
import CustomQuantity from 'components/CustomQuantiy/CustomQuantity';
import FreeFollowers from 'components/FreeFollowers/FreeFollowers';
import Available from 'components/Available/Available';
import CalculatePrice from 'components/CalculatePrice/CalculatePrice';
import css from './TikTokFollowers.module.css';
import tikTokFollowersIcon from '../../icons/tiktokFolowers.svg';
import ImportansBlock from 'components/Importans/ImportansBlock';
import importansFollowers1 from '../../icons/importansFollowers1.svg';
import importansFollowers2 from '../../icons/importansFollowers2.svg';

const TikTokFollowersPage = ({
  tiktokFollowersData,
  tiktokFreeFollowersData,
}) => {
  console.log(tiktokFreeFollowersData);
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
        "Don't buy fake followers or choose untrusted providers. Always research the provider before buying. Buy real followers from reputable sources.",
      open: false,
    },
    {
      question:
        'Is there a difference between expensive and affordable TikTok follower packages?',
      answer:
        "Yes, prices and what you get differ. Affordable options might be good value, but check the provider's reputation. More expensive packages might offer extra features or faster delivery.",
      open: false,
    },
  ];
  const importansData = [
    {
      title: 'Buy TikTok Followers: Boost Your Social Presence',
      image: importansFollowers1,
      content: (
        <>
          <p>
            In today's fast world, being seen on TikTok is key. Buying TikTok
            followers is a smart move. It can boost your TikTok following fast,
            making you seem popular. This draws more people to your content.
          </p>
          <p>
            Choosing to purchase TikTok fans helps your audience grow fast. Your
            content will reach more people. A bigger following makes your
            content more believable. This encourages others to trust and
            interact with it.
          </p>
          <p>
            Want a strong start on TikTok? Buying followers is a great strategy.
            It's a powerful tool for your social media plan.
          </p>

          <h3>Why Buying TikTok Followers Can Boost Your Social Presence</h3>
          <p>
            Buying TikTok followers can really help your social media game. It
            can make you more popular right away and help you succeed for a long
            time. Here are the main reasons why getting TikTok followers fast is
            a big deal for your online image.
          </p>

          <ul>
            <li>
              <h4>Enhance Your Credibility:</h4> Having more followers makes
              your TikTok look more credible. First impressions are key, and
              lots of followers can make your account seem more trustworthy. By
              getting TikTok followers fast, you show you're professional and
              reliable.
            </li>
            <li>
              <h4>Increase Your Reach:</h4> More followers mean your videos can
              reach more people. Popular accounts get seen more, especially on
              the "For You" page. This means more people might see and interact
              with your videos, making your followers more active and engaged.
            </li>
            <li>
              <h4>Grow Organically:</h4> Buying followers can give your profile
              a boost to help it grow naturally. With more followers, others
              might see your content as worth following. This can lead to real
              engagement and help your profile grow over time, making it a smart
              way to get more TikTok followers fast.
            </li>
          </ul>

          <h3>Benefits of Buying Real TikTok Followers</h3>
          <p>
            Buying real TikTok followers has many benefits. They make your
            content more engaging. This boosts your performance on the platform.
          </p>

          <ul>
            <li>
              <h4>Authentic Engagement:</h4> Real TikTok followers offer
              authentic engagement. They like, comment, and share your posts.
              This activity shows TikTok your content is valuable. With real
              followers, your content can reach more people. TikTok will show
              your videos to more users.
            </li>
            <li>
              <h4>Social Proof:</h4> A big follower count is key social proof.
              It shows you're popular and trustworthy. Buying real followers
              makes your profile more attractive. Having many followers makes
              you stand out. It makes your profile appealing to new visitors and
              partners.
            </li>
          </ul>

          <h3>How to Choose the Best Site to Buy TikTok Followers</h3>
          <p>
            Choosing the right site to buy TikTok followers is key to boosting
            your social media. It's important to look at several factors to get
            the most value for your money.
          </p>

          <ul>
            <li>
              <h4>Check Reviews and Testimonials:</h4> Before you buy, make sure
              to thoroughly vet your options. Reading reviews and testimonials
              can give you a good idea of a service's reliability and results.
              Look for real feedback from others who have bought followers. This
              helps you find the best site by seeing how others have done.
            </li>
            <li>
              <h4>Ensure Fast TikTok Follower Delivery:</h4> How fast you get
              followers is very important. Choose providers that promise fast
              TikTok follower delivery. Quick delivery means your account gets
              more followers fast, which helps with credibility and engagement.
              Slow delivery can make your growth seem fake.
            </li>
            <li>
              <h4>Look for Affordable Options:</h4> You don't have to spend a
              lot to get quality followers. Look for providers that offer good
              prices without cutting corners on follower quality. Find packages
              that are affordable but still offer real engagement. It's
              important to find a balance between cost and value for your social
              media strategy.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Top Strategies to Safely Purchase TikTok Fans',
      image: importansFollowers2,
      content: (
        <>
          <p>
            Getting safe TikTok follower acquisition is key for your account's
            safety. Here are some tips to help you buy TikTok fans safely and
            confidently.
          </p>

          <ul>
            <li>
              {' '}
              <h4>Utilize Secure Payment Methods</h4>
              <p>
                Make sure the places you buy TikTok fans from use safe payment
                options like credit cards or PayPal. This keeps your money safe
                and stops scams.
              </p>
            </li>
            <li>
              {' '}
              <h4>Review Privacy Policies</h4>
              <p>
                Check the privacy policy of the seller before you buy. A good
                service will tell you how they keep your info safe and won't
                share it with others.
              </p>
            </li>
            <li>
              {' '}
              <h4>Avoid Services Requiring Password Sharing</h4>
              <p>
                Don't give out your account passwords or personal info. Real
                services for safe TikTok follower acquisition don't ask for
                these. They just add followers without risking your account.
              </p>
            </li>
          </ul>

          <p>
            Following these tips helps you buy TikTok fans safely. It keeps your
            account and personal info safe. By doing this, you make your TikTok
            growth journey safer and more rewarding.
          </p>

          <h3>Common Mistakes to Avoid When You Buy TikTok Followers</h3>
          <p>
            To grow your TikTok presence, it's key to know and avoid common
            mistakes. These errors can harm your account's growth. They can make
            your account less valuable.
          </p>

          <ul>
            <li>
              <h4>Avoid Fake Followers:</h4> Choosing fake followers is a big
              mistake. These are often bots that don't interact with your
              content. This can hurt your profile's trustworthiness and reach.
            </li>
            <li>
              <h4>Steer Clear of Unreliable Providers:</h4> Choosing the wrong
              TikTok follower providers can also be bad. These providers might
              give you low-quality followers that don't help your profile.
            </li>
          </ul>

          <p>
            TikTok has smart algorithms to spot and punish fake accounts. So,
            it's vital to steer clear of fake followers. This keeps your profile
            engaging and real.
          </p>
          <p>
            Protecting your TikTok account from these common mistakes is crucial
            for sustainable growth and genuine engagement.
          </p>

          <h3>
            Buy TikTok Followers: Getting Started with Your First Purchase
          </h3>
          <p>
            Starting your TikTok journey is exciting, especially with followers
            to boost your profile. Follow this easy guide to make your journey
            smooth and effective.
          </p>

          <ul>
            <li>
              <strong>Step 1: Compare Packages:</strong> Providers have various
              packages for followers. Compare them by follower number, price,
              and extra features like support or guarantees. Choose a package
              that fits your budget and goals.
            </li>
            <li>
              <strong>Step 2: Secure Payment Methods:</strong> Choose providers
              with secure payment options. Use encrypted platforms or trusted
              services like PayPal to keep your info safe.
            </li>
            <li>
              <strong>Step 3: Check All Details:</strong> After picking a
              reliable provider and package, make your purchase. Check all
              details for a smooth transaction. This step starts your TikTok
              growth journey.
            </li>
            <li>
              <strong>Step 4: Monitor Your Growth:</strong> Watch your follower
              count grow after buying. Engage with your new followers to build a
              lively TikTok community. Welcome to a new era of social growth!
            </li>
          </ul>

          <p>
            By following these steps, you'll start your TikTok journey
            confidently. You'll quickly see your profile's visibility and
            engagement grow.
          </p>

          <h3>
            Comparing Costs: Affordable TikTok Followers vs. Expensive Packages
          </h3>
          <p>
            When you look into buying TikTok followers, it's key to know the
            difference. There are affordable options and more expensive ones.
            Each has its own benefits and costs, fitting different budgets and
            needs.
          </p>

          <h4>Understanding Pricing Models</h4>
          <p>
            There are many pricing models to choose from. Affordable TikTok
            followers are great for those on a budget. They help increase your
            followers without costing too much. These are perfect for beginners
            or those just starting out.
          </p>

          <p>
            On the other hand, expensive TikTok follower packages offer more.
            They include extra features like better engagement and faster
            growth. These are best for those who want a big impact fast.
          </p>

          <h4>Weighing the Pros and Cons</h4>
          <p>
            Choosing between affordable and expensive TikTok followers needs
            careful thought. Here's a comparison to help you decide:
          </p>

          <p>
            Choosing depends on your goals and what you can afford. Think about
            these carefully to pick the best for your TikTok growth.
          </p>

          <h3>Reputable TikTok Follower Providers: Who to Trust</h3>
          <p>
            Choosing a good TikTok follower provider is important. You need to
            look at several key factors. This ensures you get a reliable
            service. Trust in TikTok growth services is key, and it starts with
            checking providers.
          </p>

          <p>
            User testimonials are a strong sign of a provider's trustworthiness.
            Look for real reviews from users who are happy. They should talk
            about the quality of followers, how fast they get them, and the
            customer service.
          </p>
          <p>
            Also, a good provider follows industry standards. This includes
            keeping your data safe and making sure buying is easy and secure.
            They should be clear about how they work and not make big promises
            without proof.
          </p>
          <p>
            Lastly, check the provider's reputation. Brands like SocialBuddy and
            TokMatik are known for good results. By doing your research, you can
            pick a provider you can trust. This will help your TikTok grow
            safely and successfully.
          </p>
        </>
      ),
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
        <h1 className={css.buyFollowersTitle}>
          Buy TikTok <span className="orangeText">Followers</span>
          <img
            className={css.buyFollowersImg}
            src={tikTokFollowersIcon}
            alt="buyFollowersImg"
          />{' '}
          with Instant Delivery
        </h1>
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
                  setCustomQuantity(0);
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
                navigate('get-started', {
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
      <FreeFollowers data={tiktokFreeFollowersData} />
      <Available />
      <Benefits />
      <Rating />
      <Features />

      <ImportansBlock importansData={importansData} />
      <FaqBlock faqsData={faqsData} />
    </>
  );
};

export default TikTokFollowersPage;
