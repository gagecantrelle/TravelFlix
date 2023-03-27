import React from "react"
import { ComposableMap, Geographies, Geography} from "react-simple-maps"

const geoUrl ="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

class Map extends React.Component{
    constructor(){
        super()
    }

render(){
    return (
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA"/>
              ))
            }
          </Geographies>
        </ComposableMap>
      
      )  
}    
}

export default Map