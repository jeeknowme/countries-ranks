import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

const all = async () => {
  const endPoint = 'all';
  const filter = '?fields=flags,name,population,area,region';

  try {
    const res = await axios.get(BASE_URL + endPoint + filter);
    return res.data;
  } catch (error) {
    console.error('Error in fetching all countries', error);
    throw error;
  }
};

export { all };
