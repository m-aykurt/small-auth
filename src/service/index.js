import axios from "axios";

export const useCallApi = () => {
  const baseURL = "https://swapi.dev/api";

  const getPeople = async () => {
    const { data } = await axios.get(`${baseURL}/people`);
    return data;
  };

  const getPerson = async (url) => {
    const { data } = await axios.get(`${url}`);
    return data;
  };

  return {
    getPeople,
    getPerson,
  };
};
