import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Topojson from https://cartomap.github.io/nl/
const geoUrlNl = "https://cartomap.github.io/nl/wgs84/gemeente_2022.topojson";
const geoGgdNl = "https://cartomap.github.io/nl/wgs84/ggdregio_2021.topojson";

const MapChart = ({ setTooltipContent, ggdChecked }) => {
  return (
    <>
      <ComposableMap
        data-tip=""
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-6, -52.0, 0],
          scale: 10000,
        }}
      >
        {!ggdChecked && (
        <Geographies
          geography={geoUrlNl}
          stroke="#232129"
          strokeWidth={0.25}
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
        )}
        {ggdChecked && (
          <Geographies
            geography={geoGgdNl}
            stroke="#232129"
            strokeWidth={0.25}
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
        )}
      </ComposableMap>
    </>
  );
};

export default MapChart;
