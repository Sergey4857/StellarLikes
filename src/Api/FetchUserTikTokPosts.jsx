import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const FetchUserTiktokPosts = async (uniqueId, cursor) => {
  try {
    const response = await axios.get(
      'https://tiktok-scraper7.p.rapidapi.com/user/posts',
      {
        params: {
          unique_id: uniqueId,
          count: 9,
          cursor: cursor,
        },
        headers: {
          'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
          'x-rapidapi-key': API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching TikTok posts:', error);
    return 'Error';
  }
};

export default FetchUserTiktokPosts;
