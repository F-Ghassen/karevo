import api from "./axios";

export const postConfidenceValues = async (values) => {
  try {
    const response = await api.post("/confidence", values);
    return response.data;
  } catch (error) {
    console.error("Error posting confidence values", error);
    throw error;
  }
};
