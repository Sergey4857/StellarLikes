import axios from 'axios';

export const FetchAllCoupons = async () => {
  try {
    const response = await axios.get('http://stellarlikes.test/api.php', {
      params: { action: 'FetchAllCoupons' },
    });

    return response.data;
  } catch (error) {
    console.error('Request error:', error);
    throw new Error('An error occurred during the request.');
  }
};
