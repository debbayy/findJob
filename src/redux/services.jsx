import axios from "axios";

const api = axios.create({
  baseURL: "https://todo.api.devcode.gethired.id/",
});

const services = {
  getList: async (idUser, document) => {
    try {
      const response = await api.get(
        `activity-groups?email=yoga%2B1%40skyshi.io` /* , {
                params: {
                    idUser,
                    document
                } */
        // }
      );
      return response;
    } catch (err) {
      return err;
    }
  },

  postData: async (data) => {
    try {
      const response = await api.post("activity-groups", data);

      return response;
    } catch (err) {
      return err;
    }
  },
  deleteActivity: async (id) => {
    try {
      const response = await api.delete(`activity-groups`);

      return response;
    } catch (err) {
      return err;
    }
  },
};

export default services;
