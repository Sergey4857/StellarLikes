import axios from 'axios';

const instagramDetailsUrl = process.env.REACT_APP_INSTAGRAM_DETAILS;

const API_KEY = process.env.REACT_APP_API_KEY;

const FetchInstagramDetails = async (username, setUserInfo) => {
  const options = {
    method: 'GET',
    url: instagramDetailsUrl,
    params: {
      username: username,
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host':
        'instagram-scrapper-posts-reels-stories-downloader.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    setUserInfo(response.data);
    console.log(response.data);
  } catch (error) {}
};

export default FetchInstagramDetails;
