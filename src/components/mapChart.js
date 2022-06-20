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
                    fill: "#5ecc62",
                    outline: "none",
                  },
                  hover: {
                    fill: "#00ad45",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#00ad45",
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
