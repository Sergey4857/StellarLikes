const API_KEY = process.env.REACT_APP_API_KEY;

const TikTokUserDetails = async username => {
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
        const originalData = json.data;

        const newItem = {
          pk: username,
          id: originalData.user.id,
          username: originalData.user.nickname,
          full_name: originalData.user.nickname,
          profile_pic_url: originalData.user.avatarThumb,
          local_image_path: originalData.user.avatarThumb,
          uniqueId: originalData.user.uniqueId,
        };

        return [newItem];
      } else {
        throw new Error(
          'User not found. Please check the correctness of the entered username.'
        );
      }
    } else {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default TikTokUserDetails;
