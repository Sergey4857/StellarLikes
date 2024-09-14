// import { useLocation } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import css from './SelectPost.module.css';
import { useEffect, useState } from 'react';

import FetchUserInstagramPosts from 'Api/FetchUserInstagramPosts';
import avatarImage from '../../images/avatar.png';

const SelectPost = () => {
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      await FetchUserInstagramPosts(id);
    };

    fetchData();
  }, [id]);

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
          <label
            className={`${css.radioLabel} ${
              selectedOption === '1' ? css.active : ''
            } ${css.radioCrypto}`}
          >
            <input
              type="radio"
              name="option"
              value="1"
              checked={selectedOption === '1'}
              onChange={handleOptionChange}
              className={css.radioInput}
            />
            <span className={css.radioCustom}></span>
            <img className={css.selectedPostImg} src={avatarImage} alt="" />
          </label>
          <label
            className={`${css.radioLabel} ${
              selectedOption === '2' ? css.active : ''
            } ${css.radioCrypto}`}
          >
            <input
              type="radio"
              name="option"
              value="2"
              checked={selectedOption === '2'}
              onChange={handleOptionChange}
              className={css.radioInput}
            />
            <span className={css.radioCustom}></span>
            <img className={css.selectedPostImg} src={avatarImage} alt="" />
          </label>
          <label
            className={`${css.radioLabel} ${
              selectedOption === '3' ? css.active : ''
            } ${css.radioCrypto}`}
          >
            <input
              type="radio"
              name="option"
              value="3"
              checked={selectedOption === '3'}
              onChange={handleOptionChange}
              className={css.radioInput}
            />
            <span className={css.radioCustom}></span>
            <img className={css.selectedPostImg} src={avatarImage} alt="" />
          </label>
          <label
            className={`${css.radioLabel} ${
              selectedOption === '4' ? css.active : ''
            } ${css.radioCrypto}`}
          >
            <input
              type="radio"
              name="option"
              value="4"
              checked={selectedOption === '4'}
              onChange={handleOptionChange}
              className={css.radioInput}
            />
            <span className={css.radioCustom}></span>
            <img className={css.selectedPostImg} src={avatarImage} alt="" />
          </label>
          <label
            className={`${css.radioLabel} ${
              selectedOption === '5' ? css.active : ''
            } ${css.radioCrypto}`}
          >
            <input
              type="radio"
              name="option"
              value="5"
              checked={selectedOption === '5'}
              onChange={handleOptionChange}
              className={css.radioInput}
            />
            <span className={css.radioCustom}></span>
            <img className={css.selectedPostImg} src={avatarImage} alt="" />
          </label>
          <label
            className={`${css.radioLabel} ${
              selectedOption === '6' ? css.active : ''
            } ${css.radioCrypto}`}
          >
            <input
              type="radio"
              name="option"
              value="6"
              checked={selectedOption === '6'}
              onChange={handleOptionChange}
              className={css.radioInput}
            />
            <span className={css.radioCustom}></span>
            <img className={css.selectedPostImg} src={avatarImage} alt="" />
          </label>
          <label
            className={`${css.radioLabel} ${
              selectedOption === '7' ? css.active : ''
            } ${css.radioCrypto}`}
          >
            <input
              type="radio"
              name="option"
              value="7"
              checked={selectedOption === '7'}
              onChange={handleOptionChange}
              className={css.radioInput}
            />
            <span className={css.radioCustom}></span>
            <img className={css.selectedPostImg} src={avatarImage} alt="" />
          </label>
          <label
            className={`${css.radioLabel} ${
              selectedOption === '8' ? css.active : ''
            } ${css.radioCrypto}`}
          >
            <input
              type="radio"
              name="option"
              value="8"
              checked={selectedOption === '8'}
              onChange={handleOptionChange}
              className={css.radioInput}
            />
            <span className={css.radioCustom}></span>
            <img className={css.selectedPostImg} src={avatarImage} alt="" />
          </label>
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
        <Link className={css.selectedLink} to="/checkout">
          Continue to checkout
        </Link>
      </div>
    </div>
  );
};

export default SelectPost;
