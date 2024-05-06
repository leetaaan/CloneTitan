import { linkSocial } from "../enum/EnumApi";

export const convertObjToQueryString = function(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
}

export const queryString = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(obj[p]));
    }
  return str.join("/");
}

export const convertDate = (inputDate) => {
  let date = new Date(inputDate);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return day + '/' + month + '/' + year;
}
export const splitUrl = (url) => {
  url.split("/").slice(-3).join("/")
}
export const splitIcon = (url) => {
  return (
    url === linkSocial.twitter ?
    url.split("//")[1].split(".")[0]
    : url.split("/").slice(-3).join("/").split(".")[1]
  )
}