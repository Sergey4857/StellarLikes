import axios from 'axios';

const baseUrl = 'https://graming.com';
const consumer_key = process.env.REACT_APP_CONSUMER_KEY;
console.log(process);
console.log(process.env.REACT_APP_CONSUMER_KEY);

const consumer_secret = process.env.REACT_APP_CONSUMER_SECRET;

const FetchAllProductData = async (
  setTiktokLikesData,
  setTiktokViewsData,
  setTiktokFollowersData
) => {
  try {
    const response = await axios.get(
      `${baseUrl}/wp-json/wc-graming/products?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
    );

    console.log(response);

    const tikTokLikesData = response.data.find(
      product => product.name === 'Buy TikTok Likes'
    );
    const tiktokViewsData = response.data.find(
      product => product.name === 'Buy TikTok Views'
    );
    const tiktokFollowersData = response.data.find(
      product => product.name === 'Buy TikTok Followers'
    );

    setTiktokLikesData(tikTokLikesData);
    setTiktokViewsData(tiktokViewsData);
    setTiktokFollowersData(tiktokFollowersData);
  } catch (error) {
    console.error(
      'Error fetching data:',
      error.response ? error.response.data : error.message
    );
  }
};

export default FetchAllProductData;
