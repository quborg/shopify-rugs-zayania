// const WebServiceClient = require('@maxmind/geoip2-node').WebServiceClient;
// // Typescript:
// // import { WebServiceClient } from '@maxmind/geoip2-node';
 
// const client = new WebServiceClient('1234', 'licenseKey');
 
// client.country('142.1.1.1').then(response => {
//   console.log(response.country.isoCode); // 'CA'
// });

// let Reader = require('@maxmind/geoip2-node').Reader;
// Typescript:
import { Reader } from '@maxmind/geoip2-node';

 
Reader.open('./products-swift-bkp.mmdb').then(reader => {
  console.log(reader.country('1.1.1.1'));
});


// const Reader = require('@maxmind/geoip2-node').Reader;
// // Typescript:
// // import { Reader } from '@maxmind/geoip2-node';
 
// Reader.open('/usr/local/share/GeoIP/GeoIP2-City.mmdb').then(reader => {
//   const response = reader.city('128.101.101.101');
 
//   console.log(response.country.isoCode); // 'US'
//   console.log(response.city.names.en); // 'Minneapolis'
//   console.log(response.postal.code); // '55407'
// });