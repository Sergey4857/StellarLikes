const GetUserIPAndCountry = async () => {
  try {
    const response = await fetch(
      'http://stellarlikes.test/api.php?action=GetUserIPAndCountry'
    );
    const data = await response.json();
    return { ip: data.ip, country: data.country_code };
  } catch (error) {
    console.error('Ошибка при получении IP и страны:', error);
    return null;
  }
};

export default GetUserIPAndCountry;
