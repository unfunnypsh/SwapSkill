import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

export const getProfile = async (userId) => {
  const response = await apiClient.get(`/profile/${userId}`);
  return response.data;
};

export const updateProfile = async (userId, section, data) => {
  const response = await apiClient.put(`/profile/${userId}`, { section, data });
  return response.data;
};
