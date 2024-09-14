import axios from 'axios';

const instagramPostsUrl = process.env.REACT_APP_INSTAGRAM_POSTS_URL;

const API_KEY = process.env.REACT_APP_API_KEY;

const FetchUserInstagramPosts = async id => {
  const options = {
    method: 'GET',
    url: instagramPostsUrl,
    params: {
      user_id: id,
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host':
        'instagram-scrapper-posts-reels-stories-downloader.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default FetchUserInstagramPosts;
