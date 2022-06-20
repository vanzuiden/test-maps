import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrlNl = "https://cartomap.github.io/nl/wgs84/gemeente_2022.topojson";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const width = 800;
const height = 600;

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

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
                  const { statnaam, POP_EST } = geo.properties;
                  setTooltipContent(`${statnaam} — ${rounded(POP_EST)}`);
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

export default memo(MapChart);