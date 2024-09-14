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
      .map(product => product.meta_data);

    console.log(TikTokLikesData);

    // let products = [];
    // let currentProduct = {};

    // TikTokLikesData.forEach(item => {
    //   if (
    //     item.key &&
    //     item.key.includes('quantity_options_') &&
    //     item.key.endsWith('_quantity')
    //   ) {
    //     currentProduct = { id: item.id };
    //     currentProduct.quantity = item.value;
    //   } else if (
    //     item.key &&
    //     item.key.includes('quantity_options_') &&
    //     item.key.endsWith('_price')
    //   ) {
    //     currentProduct.price = item.value;
    //   } else if (
    //     item.key &&
    //     item.key.includes('quantity_options_') &&
    //     item.key.endsWith('_discount')
    //   ) {
    //     currentProduct.discount = item.value;
    //     products.push({ ...currentProduct }); // Заканчиваем сбор данных о продукте и добавляем в массив
    //   }
    // });

    // console.log(products);
    // setTiktoklikes(products);

    // // setTiktoklikes(response.data.results);
    // setIsLoading(false);
  } catch (error) {}
};

export default FetchInstagramLikes;
