const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const API_URL = `${BASE_URL}/faqs`;
import ApiServices from "./shared/Api.service";

const FaqsServices = {
  // ** get all faqs function
  async getAllFaqs() {
    try {
      const response = await ApiServices.get(API_URL);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
  // ** get specific faq
  async getSpecificFaq(faqId) {
    try {
      const response = await ApiServices.get(`${API_URL}/${faqId}`);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
  // ** update specific faq
  async updateSpecificFaq(faqId, data) {
    try {
      const response = await ApiServices.put(`${API_URL}/${faqId}`, data);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
  // ** create new faq
  async createNewFaq(data) {
    try {
      const response = await ApiServices.post(`${API_URL}`, data);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
  // ** delete specific faq
  async deleteSpecificFaq(faqId) {
    try {
      const response = await ApiServices.delete(`${API_URL}/${faqId}`);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default FaqsServices;
