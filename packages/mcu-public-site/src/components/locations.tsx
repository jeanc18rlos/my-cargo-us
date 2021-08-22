import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import GoogleMapReact from 'google-map-react'

interface Location {
  name: string
  lat: number
  long: number
}
interface Country {
  country: string
  label: string
  locations: Array<Location>
}
export interface LocationsData {
  content: string
  title: string
  id: string
  locations: Array<Country>
}
interface LocationsProps {
  data: LocationsData
}
const Locations = ({
  data: { content, title, locations, id }
}: LocationsProps) => {
  return (
    <>
      <section className="global-locations">
        <div className="container">
          <h1>{title}</h1>
          {ReactHtmlParser(content)}
          {locations.map((country, countryIndex) => {
            return (
              <div
                key={`${id}-country-${country.country}-${countryIndex}`}
                className="continent"
              >
                <div className="continent-name">
                  <h6>{country.country}</h6>
                </div>
                <div className="continent-offices">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <ul className="list-unstyled">
                        {country.locations.map((location, locationIndex) => (
                          <li
                            key={`${country.country}-${countryIndex}-${locationIndex}`}
                          >
                            <a
                              onClick={() => {
                                console.log('s')
                              }}
                            >
                              <i className="fas fa-map-marker-alt" />
                              {location.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      ,
      <section
        style={{
          height: '600px',
          width: '100%',
          paddingBottom: 0,
          filter:
            'brightness(104%) contrast(99%) saturate(0%) blur(0px) hue-rotate(0deg)'
        }}
        className="map map-3"
        id="map-1"
      >
        <GoogleMapReact
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={11}
        ></GoogleMapReact>
      </section>
    </>
  )
}
export default Locations
