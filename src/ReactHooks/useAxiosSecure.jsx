import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "/foods.json",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
