import axios from 'axios';

export const getBarCodes = async (url, token) => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://devapi.dcr-support.com/mobile/BarcodeDecodes",
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
