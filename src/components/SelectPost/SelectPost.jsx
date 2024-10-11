import { useLocation, useNavigate } from 'react-router-dom';
import css from './SelectPost.module.css';
import { useEffect, useState, useRef, useCallback } from 'react'; // Import useRef
import { gsap } from 'gsap';
import FetchUserTiktokPosts from 'Api/FetchUserTikTokPosts';

const SelectPost = () => {
  const location = useLocation();
  console.log(location.state);
  const {
    quantity,
    productId,
    uniqueId,
    userInfo,
    userEmail,
    customLink,
    shop_name,
  } = location.state || {};

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
  const [{ full_name, profile_pic_url }] = userInfo;

  const [tiktokPosts, setTikTokPosts] = useState([]);
  const cursorRef = useRef('0');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loadMorePosts = useCallback(async () => {
    setLoading(true);
    const newPosts = await FetchUserTiktokPosts(uniqueId, cursorRef.current);

    console.log(newPosts);

    if (newPosts !== 'Error') {
      setTikTokPosts(prevPosts => [...prevPosts, ...newPosts.data.videos]);
      cursorRef.current = newPosts.data.cursor;
    }
    setLoading(false);
  }, [uniqueId]);

  useEffect(() => {
    cursorRef.current = '0';
    setTikTokPosts([]);
    loadMorePosts();
  }, [uniqueId, loadMorePosts]);

  const [selectedOption, setSelectedOption] = useState('1');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={css.selectPostsWrap}>
      <div className={css.selectPostsFirst}>
        <h1 className={css.selectTitle}>
          Select<span className={css.selectPostsSpn}>Post</span>
        </h1>
        <div className={css.selectPostsInfo}>
          Select{' '}
          <span className={css.selectPostsInfoSpn}>
            1 Post / 50 likes per post
          </span>
        </div>

        <div className={css.selectPosts}>
          {tiktokPosts.map(({ cover, video_id, author }) => (
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
          ))}
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

        <button
          ref={linkRef}
          className={css.selectedLink}
          onClick={() =>
            navigate('/checkout', {
              state: {
                quantity,
                productId,
                userEmail,
                customLink: `${customLink}/video/${selectedOption}`,
                shop_name,
              },
            })
          }
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
      </div>
    </div>
  );
};

export default SelectPost;
