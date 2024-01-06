import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';
const filter =
  '?fields=flags,name,population,area,region,independent,unMember,subregion,borders,capital,languages,currencies,continents';

const all = async () => {
  const endPoint = 'all';

  try {
    const res = await axios.get(BASE_URL + endPoint + filter);
    return res.data;
  } catch (error) {
    console.error('Error in fetching all countries', error);
    throw error;
  }
};

const findByName = async (name) => {
  const endPoint = `/name/${name}`;

  try {
    const res = await axios.get(BASE_URL + endPoint + filter);
    return res.data;
  } catch (error) {
    console.error(`Error in fetching country by Name ${error}`);
    throw error;
  }
};

const getNeighboringCountries = async (codes) => {
  if (!codes || (Array.isArray(codes) && codes.length === 0)) return [];
  const endpoint = `alpha?codes=${codes.join()}`;

  try {
    const res = await axios.get(BASE_URL + endpoint + filter);
    return res.data;
  } catch (error) {
    console.error('Error in getting Neighboring countries ', error);
    throw error;
  }
};

export { all, findByName, getNeighboringCountries };
