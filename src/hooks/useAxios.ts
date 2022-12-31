import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const useAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
});

useAxios.interceptors.request.use(
  async (request: AxiosRequestConfig<AxiosRequestHeaders>) => {
    try {
      const access = localStorage.getItem("access_token");
      request.headers!.Authorization = `Bearer ${access}`;
      console.log("request", request);
      return request;
    } catch (error) {
      return console.log(error);
    }
  },
  (e) => {
    return Promise.reject(e);
  }
);

useAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (e) => {
    const {
      config,
      response: { status },
    } = e;
    if (status === 403) {
      alert("해당 글의 수정/삭제 권한이 없습니다.");
      return new Promise(() => {});
    }
    if (status === 401) {
      const access = localStorage.getItem("access_token");
      if (access === null) {
        alert("인증에 실패했습니다. 다시 로그인해주세요");
        window.location.replace("/client/login");
      }
      const originalRequest = config;
      const refresh = localStorage.getItem("refresh_token");
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER}/auth/refresh`,
          {
            refresh_token: refresh,
          }
        );
        const { access_token: new_access, refresh_token: new_refresh } = data;
        localStorage.setItem("access_token", new_access);
        localStorage.setItem("refresh_token", new_refresh);
        axios.defaults.headers.common.Authorization = `Bearer ${new_access}`;
        originalRequest.headers.Authorization = `Bearer ${new_access}`;
      } catch (e) {
        alert("잘못된 접근입니다.");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.replace("/client/login");
      }

      return axios(originalRequest);
    }
  }
);

export default useAxios;
