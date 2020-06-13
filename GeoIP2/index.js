import { Reader } from "@maxmind/geoip2-node";

let ip = "1.1.1.1";

$.get("https://www.cloudflare.com/cdn-cgi/trace", (data) => {
  ip = data
    .split("\n")
    .filter((value) => value.indexOf("ip=") !== -1)[0]
    .slice(3);
});

console.log('ip :', ip);

Reader.open("https://cdn.shopify.com/s/files/1/0131/4127/8779/t/19/assets/products-swift-bkp.mmdb").then((reader) => {
  console.log('country :', reader.country(ip));
});
console.log('ip :', ip);