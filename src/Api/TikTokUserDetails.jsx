const API_KEY = process.env.REACT_APP_API_KEY;

const TikTokUserDetails = async (username, setUserInfo) => {
  try {
    const response = await fetch(
      `https://tiktok-scraper7.p.rapidapi.com/user/info?unique_id=${username}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
          'x-rapidapi-key': API_KEY,
        },
      }
    );

    if (response.status === 200) {
      const json = await response.json();

      if (json.data) {
        const originalArray = json.data;
        const newArray = [];

        const newItem = {
          pk: username,
          id: originalArray.user.id,
          username: originalArray.user.nickname,
          full_name: originalArray.user.nickname,
          profile_pic_url: originalArray.user.avatarThumb,
          local_image_path: originalArray.user.avatarThumb,
          uniqueId: originalArray.user.uniqueId,
        };

        newArray.push(newItem);
        setUserInfo(newArray);
        return newArray;
      } else {
        console.error('Ошибка данных TikTok: ', json);
        return [];
      }
    } else {
      return `Ошибка: ${response.status}`;
    }
  } catch (error) {
    return `Ошибка: ${error.message}`;
  }
};

export default TikTokUserDetails;
