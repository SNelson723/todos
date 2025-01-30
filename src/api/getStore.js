import axios from 'axios';

export const getStoresByCategory = async (category, token) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://devapi.dcr-support.com/mobile/DCRStores/${category}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
