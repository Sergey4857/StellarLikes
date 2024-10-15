import axios from 'axios';
const consumer_key = process.env.REACT_APP_TEST_CHECKOUT_CONSUMER_KEY;
const consumer_secret = process.env.REACT_APP_TEST_CHECKOUT_CONSUMER_SECRET_KEY;

export const payCheckout = async data => {
  try {
    const response = await axios.post(
      `https://testgraming.net/wp-json/wc-graming/pay_checkout?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
      data
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw new Error('Произошла ошибка при запросе.');
  }
};
