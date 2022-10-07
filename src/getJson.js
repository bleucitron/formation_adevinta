export default function getJSON(url) {
  return fetch(url).then(function (resp) {
    return resp.json();
  });
}
