const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const API_URL = `${BASE_URL}/privacyPolices`;
import ApiServices from "./shared/Api.service";

const policesServices = {
  // ** get all polices function
  async getAllPolices() {
    try {
      const response = await ApiServices.get(API_URL);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
  // ** get specific policy
  async getSpecificPolicy(policyId) {
    try {
      const response = await ApiServices.get(`${API_URL}/${policyId}`);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
  // ** update specific policy
  async updateSpecificPolicy(policyId, data) {
    try {
      const response = await ApiServices.put(`${API_URL}/${policyId}`, data);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
  // ** create new policy
  async createNewPolicy(data) {
    try {
      const response = await ApiServices.post(`${API_URL}`, data);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
  // ** delete specific policy
  async deleteSpecificPolicy(policyId) {
    try {
      const response = await ApiServices.delete(`${API_URL}/${policyId}`);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default policesServices;
