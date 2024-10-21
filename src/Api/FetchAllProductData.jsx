import axios from 'axios';

const FetchAllProductData = async (
  setTiktokLikesData,
  setTiktokViewsData,
  setTiktokFollowersData
) => {
  try {
    const response = await axios.get('/api.php', {
      params: { action: 'FetchAllProductData' },
    });

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
