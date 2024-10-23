import axios from 'axios';

export const GetFreeGoods = async data => {
  try {
    const response = await axios.post(
      'http://stellarlikes.com/api.php?action=freeService',
      data
    );

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      let errorMessage = 'An error occurred';

      if (error.response.data.message) {
        errorMessage = error.response.data.message;
      } else if (error.response.data.error) {
        const errorData = error.response.data.error;

        if (typeof errorData === 'string') {
          const jsonString = errorData.replace('Request error: ', '');

          try {
            const parsedError = JSON.parse(jsonString);
            errorMessage = `${parsedError.code}, ${parsedError.message}`;
          } catch (e) {
            errorMessage = errorData;
          }
        } else if (typeof errorData === 'object' && errorData.message) {
          errorMessage = `${errorData.code}, ${errorData.message}`;
        }
      }

      console.log(errorMessage);

      throw new Error(errorMessage);
    } else {
      throw new Error(error.message);
    }
  }
};
