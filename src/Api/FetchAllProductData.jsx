import axios from 'axios';

const FetchAllProductData = async (
  setTiktokLikesData,
  setTiktokViewsData,
  setTiktokFollowersData,
  setFreeTiktokLikesData,
  setFreeTiktokViewsData,
  setFreeTiktokFollowersData
) => {
  try {
    const response = await axios.get('http://stellarlikestest.test/api.php', {
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
    const tiktokFreeLikesData = response.data.find(
      product => product.name === 'Free TikTok Likes'
    );
    const tiktokFreeViewsData = response.data.find(
      product => product.name === 'Free TikTok Views'
    );
    const tiktokFreeFollowersData = response.data.find(
      product => product.name === 'Free TikTok Followers'
    );

    setTiktokLikesData(tikTokLikesData);
    setTiktokViewsData(tiktokViewsData);
    setTiktokFollowersData(tiktokFollowersData);
    setFreeTiktokLikesData(tiktokFreeLikesData);
    setFreeTiktokViewsData(tiktokFreeViewsData);
    setFreeTiktokFollowersData(tiktokFreeFollowersData);
  } catch (error) {
    console.error(
      'Error fetching data:',
      error.response ? error.response.data : error.message
    );
  }
};

export default FetchAllProductData;
