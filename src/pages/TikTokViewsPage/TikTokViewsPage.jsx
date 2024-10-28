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
import ImportansBlock from 'components/Importans/ImportansBlock';
import importansViews1 from '../../icons/importansViews1.svg';
import importansViews2 from '../../icons/importansViews2.svg';

const TikTokViewsPage = ({ tiktokViewsData, tiktokFreeViewsData }) => {
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
  const importansData = [
    {
      title: 'Boost Your TikTok: Buy Views for Instant Impact',
      image: importansViews1,
      content: (
        <>
          <p>
            In today's digital age, having a strong TikTok presence is key. If
            you want to get more TikTok views fast, buying them is a smart move.
            This can make your content more visible, drawing in more people.
          </p>
          <p>
            Buying views can also make your profile look more appealing. It
            shows others that your content is interesting. This can help your
            profile grow and get more people involved.
          </p>
          <p>
            Some might doubt the idea of buying views. But, many successful
            creators use this method. Find out how it can help your content
            stand out on TikTok.
          </p>

          <h3>Why Buying TikTok Views Can Boost Your Profile</h3>
          <p>
            TikTok is all about being seen and getting people to interact. When
            you buy real TikTok views, your content gets more eyes on it. This
            makes your profile look more popular and trustworthy.
          </p>

          <p>
            A profile with lots of views gets even more attention. This helps
            you get more people to watch and interact with your videos. TikTok's
            algorithm likes content that gets lots of views fast. This means you
            have a better chance of being seen by more people
          </p>
          <p>
            Getting lots of views makes your videos seem more interesting.
            People think, "If lots of people are watching it, it must be good!"
            This leads to even more views for you.
          </p>

          <p>
            So, when you buy real TikTok views, you start a snowball effect. The
            more views you get, the more people interact, increasing your
            chances of going viral on TikTok.
          </p>

          <h3>Choosing the Best Site to Buy TikTok Views</h3>
          <p>
            When looking for the best site to buy TikTok views, there are
            important factors to consider. These ensure a good experience and
            effective results.
          </p>
          <h4>Top criteria for selecting a site</h4>
          <p>
            Finding the right site to buy TikTok views is more than just looking
            for a good price. You should also consider:
          </p>

          <ul>
            <li>
              <strong>Reliability:</strong> Make sure the site has good reviews
              and feedback from actual users.
            </li>
            <li>
              <strong>Customer Support:</strong> Choose sites with live chat or
              quick email support for any assistance you might need.
            </li>
            <li>
              <strong>Quality of Views:</strong> Check if the views come from
              real accounts, not bots, to maintain engagement and trust.
            </li>
            <li>
              <strong>Privacy and Security:</strong> Pick sites that keep your
              payment secure and don't ask for sensitive account details.
            </li>
          </ul>

          <h3>Affordable TikTok Views: Getting the Best Deals</h3>
          <p>
            Looking for affordable TikTok views means finding the right balance
            between cost and quality. Comparing packages helps you get the most
            value for your money.
          </p>

          <h4>What to Look for in Affordable Packages</h4>

          <p>When searching for cheap TikTok views, look for these things:</p>

          <ul>
            <li>Real views to ensure genuine engagement.</li>
            <li>Fast delivery to boost your profile quickly.</li>
            <li>Reliable customer support for any questions or concerns.</li>
          </ul>

          <p>
            By comparing prices and features, you can choose a package that fits
            your budget while enhancing your TikTok presence.
          </p>

          <h3>How Buying Views Enhances Organic TikTok Views</h3>
          <p>
            Buying TikTok views can improve your organic reach by aligning with
            TikTok's algorithm. Learning how the algorithm works ensures better
            results.
          </p>

          <h4>The Impact on the TikTok Algorithm</h4>
          <p>
            The <strong>TikTok algorithm</strong> likes profiles with lots of
            engagement. Buying views can give your profile a boost. This makes
            your content more likely to show up on users' For You Pages (FYP).
            The algorithm favors videos with lots of interaction. This means
            more chances for <strong>organic TikTok views</strong> from more
            people.
          </p>

          <h4>Tips to Convert Bought Views to Organic Growth</h4>
          <ul>
            <li>
              <strong>Engage with your audience:</strong> Respond to comments
              and make your profile welcoming to encourage real interactions.
            </li>
            <li>
              <strong>Create quality content:</strong> Post engaging videos to
              retain viewers and encourage sharing.
            </li>
            <li>
              <strong>Utilize trending hashtags:</strong> Use popular hashtags
              to make your content easier to discover.
            </li>
            <li>
              <strong>Collaborate with influencers:</strong> Partner with
              popular creators to extend your reach and gain real followers.
            </li>
          </ul>

          <p>
            By buying views smartly and knowing the{' '}
            <strong>TikTok algorithm</strong>, creators can grow their views.
            Using these tips will make sure bought views lead to lasting{' '}
            <strong> organic TikTok views</strong>.
          </p>

          <h4>Is Buying TikTok Views Legal and Safe?</h4>
          <p>
            Many TikTok users wonder if it's legal to buy views. TikTok's rules
            don't say you can't buy views, but they stress real engagement.
            Breaking these rules can get your account suspended or banned
            forever.
          </p>

          <p>
            It's tempting to get more views fast. But, it's important to know
            the risks. Buying views safely means choosing a reliable service.
            This way, you get real views and avoid fake ones.
          </p>
          <p>
            Looking for a safe TikTok view purchase? Look for providers that are
            open, secure, and have good reviews. These things help avoid
            problems and ensure you get quality views.
          </p>
          <p>
            Knowing the legality of buying TikTok views and making a safe TikTok
            view purchase is key. It keeps your account safe and helps you get
            more views.
          </p>

          <h3>Buy TikTok Views: Step-by-Step Guide</h3>
          <p>
            Learning how to <strong>buy TikTok views</strong> is key to getting
            the most out of your money. This guide will walk you through the
            important steps. You'll learn from researching to tracking your
            TikTok engagement after buying.
          </p>

          <ul>
            <li>
              <strong>Initial Research and Selection:</strong> Start by doing
              your homework. Look for trusted sites that offer good services.
              Read reviews, check their offerings, and see how reliable they
              are. This step is vital to pick the right package for you.
            </li>
            <li>
              <strong>Purchasing and Activating Views:</strong> After picking a
              provider, it's time to buy the views. Choose a package that
              matches your goals and budget. Then, follow the provider's guide
              to put the views on your videos.
            </li>
            <li>
              <strong>Monitoring Results and Engagement:</strong> After putting
              the views on your videos, watch how they do. Use TikTok's
              analytics to monitor TikTok engagement. This lets you see how the
              views affect your reach and engagement. Keep an eye on your
              numbers to tweak your strategy as needed.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Boost TikTok Engagement with Quality Content',
      image: importansViews2,
      content: (
        <>
          <p>
            Buying views can help your TikTok profile a lot. But, it's also key
            to have great content. Good content keeps people interested and
            helps your views grow.
          </p>

          <h4>Creating Viral-Worthy TikTok Videos</h4>
          <p>
            To make viral TikTok videos, find out what's trending. Join in on
            popular hashtags. Use catchy music and cool effects.
          </p>

          <p>
            Keep your videos short and fun. TikTok loves quick, fun videos. Make
            sure your videos are worth watching, whether they're funny, teach
            something, or are creative.
          </p>

          <ul>
            <li>
              Trend Analysis: Keep up with trending hashtags and challenges.
            </li>
            <li>Visual Appeal: Use TikTok's filters, stickers, and effects.</li>
            <li>
              Catchy Music: Pick popular songs to make your videos more
              engaging.
            </li>
          </ul>

          <h4>Engaging with Your Audience Effectively</h4>
          <p>
            Engagement goes both ways. To get more people involved, talk to your
            followers often. Reply to comments and join in on duets or
            collaborations.
          </p>

          <p>
            Thank people for their content. Live streaming is great for
            real-time interaction. It makes your followers feel special.
          </p>

          <ul>
            <li>
              Comment Interaction: Talk back to comments to build a community.
            </li>
            <li>
              Duets/Collabs: Work with other creators to reach more people.
            </li>
            <li>Live Streams: Connect with your audience live.</li>
          </ul>

          <h3>Real vs. Fake TikTok Views: Know the Difference</h3>
          <p>
            It's key to know the difference between real TikTok views and fake
            TikTok views. Real views help your content grow naturally. Fake
            views can harm your account.
          </p>

          <h4>Identifying Real TikTok Views</h4>
          <p>
            <strong>Real TikTok views</strong> come from real people who watch
            your videos. They show up in likes, shares, and comments. Look for
            these signs to spot real views:
          </p>

          <ul>
            <li>
              High engagement rate: A good mix of likes, comments, and shares.
            </li>
            <li>Progressive increase: Views grow slowly and naturally.</li>
            <li>
              Authentic user interaction: Real comments and reactions from
              users.
            </li>
          </ul>

          <h4>Risks of Purchasing Fake Views</h4>
          <p>
            Buying <strong>fake TikTok views</strong> might seem like a quick
            fix. But it's risky. Fake views come from bots and don't offer real
            interaction. The dangers include:
          </p>

          <ul>
            <li>
              Account suspension or ban: TikTok might catch fake activities and
              punish you.
            </li>
            <li>
              Damage to reputation: People can tell if views are fake, hurting
              your image.
            </li>
            <li>
              Ineffective growth: Fake views don't bring real followers or
              engagement.
            </li>
          </ul>

          <p>
            Stick to getting real TikTok views the right way. This ensures your
            account grows in a healthy and trustworthy way.
          </p>

          <h3>Case Studies: Success Stories of Buying TikTok Views</h3>
          <p>
            Looking into successful TikTok view purchases shows amazing stories
            and big business wins. People and companies use this tactic to grow
            their TikTok following.
          </p>

          <p>
            One notable instance is the case of e.l.f. Cosmetics. By buying
            TikTok views, they made their TikTok campaigns huge, getting lots of
            attention and going viral.
          </p>

          <p>
            Also, Chipotle, a well-known fast-food chain, bought TikTok views to
            tell their brand story. This made their "Guac Dance" campaign a huge
            hit.
          </p>
          <p>
            Looking closer at these TikTok case studies, we see big wins for
            e.l.f. Cosmetics and Chipotle:
          </p>

          <ul>
            <li>More people saw their brand</li>
            <li>They got more people to interact with their content</li>
            <li>Their brand became more trusted and respected</li>
            <li>They got a lot more followers naturally</li>
          </ul>

          <p>
            These success stories show how buying TikTok views can really help.
            They prove that this strategy can lead to big growth on TikTok.
          </p>

          <h3>The Ethics of Buying TikTok Views</h3>
          <p>
            In the fast-changing world of social media, it's key to understand
            the ethics of buying TikTok views. This topic is hotly debated among
            influencers, marketers, and users. It's a big issue in{' '}
            <strong>social media ethics</strong>.
          </p>

          <p>
            Some say buying views is okay. They compare it to boosting posts or
            using SEO. They think it helps small creators get noticed. This way,
            they can grow their audience. But others disagree. They say buying
            views makes things seem fake. It's a big problem in{' '}
            <strong>social media ethics.</strong> It can hurt trust and the hard
            work of other creators.
          </p>

          <p>
            Transparency and authenticity should be the cornerstones of any
            social media strategy. So, it's important to think carefully about
            this. We need to decide if more views are worth the risk to our
            reputation. It's a big choice.
          </p>

          <p>
            Finding a balance is hard. But, being honest and creating real
            content is always the right way. It guides us in{' '}
            <strong>social media ethics</strong>.
          </p>

          <h3>Future of TikTok Growth Strategies</h3>
          <p>
            TikTok's digital world is changing fast. This is thanks to new tech
            and how people use it. Buying TikTok views will change a lot as
            TikTok grows.
          </p>

          <p>
            Soon, we'll see new ways to mix bought views with real engagement.
            This mix will help get more eyes on content and make users interact
            more.
          </p>

          <p>
            New tools will soon give us better data and smarter ways to target
            views. AI and machine learning will help us understand TikTok trends
            better. This means we can make content that people really want to
            see.
          </p>

          <p>
            Analytics will get even better, giving us insights in real time.
            This could even predict what's going to be big before it happens.
            Creators can then make plans ahead of time.
          </p>

          <p>
            Brands and influencers will have to be quick to change their plans.
            They'll need to make good content that people want to watch. This
            will help them keep viewers even after the initial boost from bought
            views.
          </p>

          <p>
            By keeping up with TikTok's changes, users can make the most of it.
            They'll be ready for whatever comes next in the fast-paced world of
            TikTok.
          </p>
        </>
      ),
    },
  ];
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
  const productService = tiktokViewsData?.name;

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
        <h1 className={css.buyViewsTitle}>
          Buy TikTok <span className="pinkText">Views</span>
          <img
            className={css.buyViewsImg}
            src={tikTokViewsIcon}
            alt="buyViewsImg"
          />
          starting from <span className="pinkText">$0.99</span>
        </h1>
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
                setCustomQuantity(0);
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
            initialQuantity={550}
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
      </section>
      <FreeViews data={tiktokFreeViewsData} />
      <Available />
      <Benefits />
      <Rating />
      <Features />

      <ImportansBlock importansData={importansData} />
      <FaqBlock faqsData={faqsData} />
    </>
  );
};

export default TikTokViewsPage;
