import axios from 'axios';

const TikTokUserDetails = async username => {
  try {
    const response = await axios.get('https://stellarlikes.com/api.php', {
      params: {
        action: 'TikTokUserDetails',
        username: username,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(`Ошибка: ${error.message}`);
  }
};

export default TikTokUserDetails;
