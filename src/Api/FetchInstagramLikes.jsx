import axios from 'axios';

const baseInstagramUrl = process.env.REACT_APP_BASE_INSTAGRAM_URL;
const consumer_key = process.env.REACT_APP_CONSUMER_KEY;
const consumer_secret = process.env.REACT_APP_CONSUMER_SECRET;

const FetchInstagramLikes = async (setTiktoklikes, setIsLoading, setError) => {
  try {
    const response = await axios.get(
      `${baseInstagramUrl}/wp-json/wc/v3/products?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
    );

    const TikTokLikesData = response.data
      .filter(product => product.name === 'Buy Instagram Likes')
      .map(product => product.meta_data)
      .flat();

    console.log(TikTokLikesData);

    const result = [];
    let currentOptionSet = {};

    // Проходим по каждому элементу массива
    TikTokLikesData.forEach(item => {
      const quantityMatch =
        item.key && item.key.match(/quantity_options_(\d+)_quantity/);
      const priceMatch =
        item.key && item.key.match(/quantity_options_(\d+)_price/);
      const discountMatch =
        item.key && item.key.match(/quantity_options_(\d+)_discount/);

      if (quantityMatch) {
        const index = quantityMatch[1];
        if (!currentOptionSet[index]) {
          currentOptionSet[index] = {};
        }
        currentOptionSet[index].quantity = item.value; // Добавляем количество
      }

      if (priceMatch) {
        const index = priceMatch[1];
        if (!currentOptionSet[index]) {
          currentOptionSet[index] = {};
        }
        currentOptionSet[index].price = item.value; // Добавляем цену
      }

      if (discountMatch) {
        const index = discountMatch[1];
        if (!currentOptionSet[index]) {
          currentOptionSet[index] = {};
        }
        currentOptionSet[index].discount = item.value; // Добавляем скидку
      }
    });

    for (const key in currentOptionSet) {
      result.push(currentOptionSet[key]);
    }

    console.log(result); // Выводим результат в консоль
    return result;
  } catch (error) {
    console.error('Error fetching data:', error); // Выводим ошибку в консоль
  }
};

export default FetchInstagramLikes;
