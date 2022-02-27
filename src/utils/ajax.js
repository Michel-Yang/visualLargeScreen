import axios from 'axios';

axios.defaults.timeout = 120000; // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; // 配置请求头

//返回一个Promise(发送get请求)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: param,
      })
      .then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        },
      )
      .catch(error => {
        reject(error);
      });
  });
}

//返回一个Promise(发送post请求)
export function fetchPost(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: params,
      ...config,
    })
      .then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        },
      )
      .catch(error => {
        reject(error);
      });
  });
}
