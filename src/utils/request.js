import axios from 'axios';
//import { Loading } from 'element-ui';

//let loadingInstance;

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 600000
});

// request interceptor
service.interceptors.request.use(
  config => {
  //  loadingInstance=Loading.service({ fullscreen: true,background:'rgba(0, 0, 0, 0.4)' });
  //  console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
  // loadingInstance.close();
  //  console.log(response);
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;

// export const getRequest = (url, data = {}) => {
//   return service({
//     url,
//     method: 'get',
//     params: data
//   });
// };

// export const postRequest = (url, data = {}) => {
//   return service({
//     url,
//     method: 'post',
//     data
//   });
// };

// export const postFormData = (url, data = {}) => {
//   return service({
//     url,
//     method: 'post',
//     transformRequest: [
//       function(oldData){
//         let newStr = '';
//         for (let item in oldData){
//           if (oldData[item] != null) {
//             newStr += encodeURIComponent(item) + '=' + encodeURIComponent(oldData[item]) + '&';
//           }
//         }
//         newStr = newStr.slice(0, -1);
//         return newStr;
//       }
//     ],
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     data
//   });
// };

// export const uploadFileRequest = (url, params = {}) => {
//   return service({
//     method: 'post',
//     url: url,
//     data: params,
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   });
// };
