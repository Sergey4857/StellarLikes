import axios from 'axios';

export const payCheckout = async data => {
  try {
    const response = await axios.post(
      'http://stellarlikes.test/api.php?action=payCheckout',
      data
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при обработке оплаты:', error);
    throw new Error('Произошла ошибка при обработке оплаты.');
  }
};
