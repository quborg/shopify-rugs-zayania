import requests
# import geoip2.database


def getCountryISO():
    response = requests.get('https://httpbin.org/ip')
    IP = response.json()['origin']
    print('IP :', IP)
    # return IP
    # reader = geoip2.database.Reader('./products-swift-bkp.mmdb')
    # country_iso = reader.country('105.72.70.195').country.iso_code)

    # reader.close()

    # return country_iso
