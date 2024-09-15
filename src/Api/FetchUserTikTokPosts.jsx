import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const FetchUserTiktokPosts = async (uniqueId, setTikTokPosts) => {
  console.log(uniqueId);

  try {
    const response = await axios.get(
      'https://tiktok-scraper7.p.rapidapi.com/user/posts',
      {
        params: {
          unique_id: uniqueId,
          count: 9,
          cursor: 0,
        },
        headers: {
          'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
          'x-rapidapi-key': API_KEY,
        },
      }
    );

    console.log(response.data); // у axios данные будут в response.data
    setTikTokPosts(response.data); // если вам нужно обновить состояние
  } catch (error) {
    console.error('Error fetching TikTok posts:', error);
    return 'Error';
  }
};

export default FetchUserTiktokPosts;
