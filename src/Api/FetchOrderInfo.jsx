import axios from 'axios';

export const FetchOrderInfo = async id => {
  try {
    const response = await axios.get('http://stellarlikes.test/api.php', {
      params: {
        action: 'FetchOrderInfo',
        id: id,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw new Error('Произошла ошибка при запросе.');
  }
};
