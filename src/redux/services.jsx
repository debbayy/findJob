import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v2/",
});

const services = {
  login: async (data) => {
    try {
      const response = await api.post("/login", data);
      console.log(response);
      return response;
    } catch (err) {
      return err;
    }
  },

  getJobs: async (description, location, page) => {
    try {
      const token = localStorage.getItem("_token");
      const response = await api.get(`jobs`, {
        params: {
          description,
          location,
          page,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log(response);
      return response;
    } catch (err) {
      return err;
    }
  },
  getJob: async (id) => {
    try {
      const token = localStorage.getItem("_token");
      const response = await api.get(`job/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log(response);
      return response;
    } catch (err) {
      return err;
    }
  },
};

export default services;
