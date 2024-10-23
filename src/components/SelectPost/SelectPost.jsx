import { useLocation, useNavigate } from 'react-router-dom';
import css from './SelectPost.module.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import FetchUserTiktokPosts from 'Api/FetchUserTikTokPosts';
import GetFreeGoodsBtn from 'components/GetFreeGoodsBtn/GetFreeGoodsBtn';

const SelectPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const {
    country,
    price,
    productService,
    quantity,
    productId,
    uniqueId,
    userInfo,
    userEmail,
    customLink,
    shop_name,
    email,
    page_link,
    service_type,
  } = location.state || {};

  const [{ full_name, profile_pic_url }] = userInfo;

  const linkRef = useRef(null);
  const decorItemRefs = useRef([]);

  const [tiktokPosts, setTikTokPosts] = useState([]);
  const cursorRef = useRef('0');
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  const loadMorePosts = useCallback(async () => {
    setLoading(true);
    const newPosts = await FetchUserTiktokPosts(uniqueId, cursorRef.current);

    console.log('Fetched Posts:', newPosts);

    if (
      newPosts !== 'Error' &&
      newPosts.data &&
      Array.isArray(newPosts.data.videos)
    ) {
      setTikTokPosts(prevPosts => [...prevPosts, ...newPosts.data.videos]);
      cursorRef.current = newPosts.data.cursor;
    } else {
      console.error('No videos found in the response');
    }
    setLoading(false);
  }, [uniqueId]);

  useEffect(() => {
    cursorRef.current = '0';
    setTikTokPosts([]);
    loadMorePosts();
  }, [uniqueId, loadMorePosts]);

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
    <div className={css.selectPostsWrap}>
      <div className={css.selectPostsFirst}>
        <h1 className={css.selectTitle}>
          Select<span className={css.selectPostsSpn}>Post</span>
        </h1>
        <div className={css.selectPostsInfo}>
          Select{' '}
          <span className={css.selectPostsInfoSpn}>
            1 Post / 50 likes per post
          </span>
        </div>

        <div className={css.selectPosts}>
          {tiktokPosts.length > 0
            ? tiktokPosts.map(({ cover, video_id }) => (
                <label
                  key={video_id}
                  className={`${css.radioLabel} ${
                    selectedOption === video_id ? css.active : ''
                  } ${css.radioCrypto}`}
                >
                  <input
                    type="radio"
                    name="option"
                    value={video_id}
                    checked={selectedOption === video_id}
                    onChange={handleOptionChange}
                    className={css.radioInput}
                  />
                  <span className={css.radioCustom}></span>
                  <img className={css.selectedPostImg} src={cover} alt="" />
                </label>
              ))
            : !loading && (
                <div className={css.noPostsFound}>No posts found</div>
              )}
        </div>

        <button
          className={css.loadMore}
          onClick={loadMorePosts}
          disabled={loading}
        >
          <span>{loading ? 'Loading...' : 'Load more posts'}</span>
        </button>
      </div>
      <div className={css.selectPostsSecond}>
        <div className={css.selectedInfo}>
          <img
            className={css.selectedImage}
            src={profile_pic_url}
            alt="avatar"
          />
          <div className={css.selectedName}>{full_name}</div>
        </div>
        {!service_type && (
          <button
            ref={linkRef}
            className={css.selectedLink}
            onClick={() =>
              navigate('/checkout', {
                state: {
                  country,
                  price,
                  productService,
                  quantity,
                  productId,
                  userEmail,
                  customLink: `${customLink}/video/${selectedOption}`,
                  shop_name,
                },
              })
            }
            disabled={!selectedOption}
          >
            <span className={css.linkText}>Continue to checkout</span>
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
        )}
        {service_type && (
          <GetFreeGoodsBtn
            fields={{
              custom_link: `${customLink}/video/${selectedOption}`,
              email,
              product_id: productId,
              quantity,
              page_link,
              service_type,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SelectPost;
