/*const hasContentType = (res, type) => {
  const contentType = res.headers.get("content-type");
  return contentType ? contentType.includes(type) : false;
};
const parseJSONRes = (res) => {
  return res.text().then(function (text) {
    return text ? JSON.parse(text) : {};
  });
};
const handleErrors = (res) => {
  var isJSONRes = hasContentType(res, "application/json");
  if (res.ok) {
    return isJSONRes ? parseJSONRes(res) : Promise.resolve(res.statusText);
  }
  return new Promise((resolve, reject) => {
    const errorRes = isJSONRes ? parseJSONRes(res) : Promise.resolve({});

    errorRes.then(() => {
      const message = "Endpoint Error" + res.status + " " + res.statusText;
      reject({
        message,
      });
    });
  });
};*/

const getHeaders = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  token: localStorage.getItem("token"),
});

export function requestGet(path) {
  return fetch(path, {
    headers: getHeaders(),
  });
}

export function requestPost(path, opts = {}) {
  return fetch(path, {
    method: "POST",
    headers: getHeaders(),
    body: opts.body,
  });
}

export function requestPut(path, opts = {}) {
  return fetch(path, {
    method: "PUT",
    headers: getHeaders(),
    body: opts.body,
  });
}

export function requestDelete(path, opts = {}) {
  return fetch(path, {
    method: "DELETE",
    headers: getHeaders(),
    body: opts.body,
  });
}
