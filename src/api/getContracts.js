import axios from "axios";

export const getContractsByContractId = async (id, token) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://devapi.dcr-support.com/mobile/DCRStores/Contracts/${id}`,
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
