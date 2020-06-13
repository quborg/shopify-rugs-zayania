import requests
import geoip2.database


response = requests.get('https://httpbin.org/ip')
IP = response.json()['origin']

reader = geoip2.database.Reader('./products-swift-bkp.mmdb')
print(reader.country('105.72.70.195').country.iso_code)

reader.close()
