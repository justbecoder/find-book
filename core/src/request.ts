/**
 * @description 封装fetch请求
 */

export const request = (url: string) => {
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("Network Error");
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};
