// import { useLocation } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import css from './SelectPost.module.css';
import { useEffect, useState } from 'react';

import avatarImage from '../../images/avatar.png';
import FetchUserTiktokPosts from 'Api/FetchUserTikTokPosts';

const SelectPost = () => {
  const location = useLocation();
  const { uniqueId } = location.state;
  const [tiktokPosts, setTikTokPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await FetchUserTiktokPosts(uniqueId, setTikTokPosts);
    };

    fetchData();
  }, [uniqueId]);

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
          {tiktokPosts?.data?.videos &&
            tiktokPosts?.data?.videos.map(({ cover, video_id, author }) => (
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
        <button className={css.loadMore}>
          <span>Load more posts</span>
        </button>
      </div>
      <div className={css.selectPostsSecond}>
        <div className={css.selectedInfo}>
          <img className={css.selectedImage} src={avatarImage} alt="avatar" />
          <div className={css.selectedName}>@k_gntv</div>
        </div>
        <Link
          className={css.selectedLink}
          to="/checkout"
          state={{ selectedPost: selectedOption }}
        >
          Continue to checkout
        </Link>
      </div>
    </div>
  );
};

export default SelectPost;
