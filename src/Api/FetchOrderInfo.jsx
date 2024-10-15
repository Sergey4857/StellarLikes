import axios from 'axios';
const consumer_key = process.env.REACT_APP_TEST_CHECKOUT_CONSUMER_KEY;
const consumer_secret = process.env.REACT_APP_TEST_CHECKOUT_CONSUMER_SECRET_KEY;

export const FetchOrderInfo = async id => {
  try {
    const response = await axios.post(
      `https://testgraming.net/wp-json/wc/v3/orders/${id}?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw new Error('Произошла ошибка при запросе.');
  }
};
