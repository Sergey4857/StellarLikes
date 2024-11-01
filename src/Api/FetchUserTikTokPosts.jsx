import axios from 'axios';

const FetchUserTiktokPosts = async (uniqueId, cursor) => {
  try {
    const response = await axios.get('https://stellarlikes.com/api.php', {
      params: {
        action: 'FetchUserTiktokPosts',
        unique_id: uniqueId,
        cursor: cursor,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка при получении постов TikTok:', error);
    return 'Error';
  }
};

export default FetchUserTiktokPosts;
