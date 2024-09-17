import { useLocation, useNavigate } from 'react-router-dom';
import css from './SelectPost.module.css';
import { useEffect, useState, useRef, useCallback } from 'react'; // Import useRef

import FetchUserTiktokPosts from 'Api/FetchUserTikTokPosts';

const SelectPost = () => {
  const location = useLocation();
  const { selectedPrice, uniqueId, userInfo } = location.state || {};

  console.log(selectedPrice);
  console.log(uniqueId);
  console.log(userInfo);

  const [{ full_name, profile_pic_url }] = userInfo;

  const [tiktokPosts, setTikTokPosts] = useState([]);
  const cursorRef = useRef('0');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loadMorePosts = useCallback(async () => {
    setLoading(true);
    const newPosts = await FetchUserTiktokPosts(uniqueId, cursorRef.current);
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

        <div
          className={css.selectedLink}
          onClick={() =>
            navigate('/checkout', {
              state: {
                selectedPrice,
                uniqueId,
                userInfo,
                selectedPost: selectedOption,
              },
            })
          }
        >
          Continue to checkout
        </div>
      </div>
    </div>
  );
};

export default SelectPost;
