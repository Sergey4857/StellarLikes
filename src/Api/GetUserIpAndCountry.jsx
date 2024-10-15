const GetUserIPAndCountry = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return { ip: data.ip, country: data.country_code };
  } catch (error) {
    console.error('Error fetching IP and country:', error);
    return null;
  }
};

export default GetUserIPAndCountry;
