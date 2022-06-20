import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Topojson from https://cartomap.github.io/nl/
const geoUrlNl = "https://cartomap.github.io/nl/wgs84/gemeente_2022.topojson";

const MapChart = ({ setTooltipContent }) => {
  return (
    <div>
      <ComposableMap
        data-tip=""
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-6, -52.0, 0],
          scale: 10000,
        }}
      >
        <Geographies
          geography={geoUrlNl}
          fill="#D6D6DA"
          stroke="#000000"
          strokeWidth={0.125}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.properties.statnaam}
                geography={geo}
                onMouseEnter={() => {
                  const { statnaam } = geo.properties;
                  setTooltipContent(`${statnaam}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
