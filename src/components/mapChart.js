import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Topojson from https://cartomap.github.io/nl/
const geoUrlNl = "https://cartomap.github.io/nl/wgs84/gemeente_2022.topojson";
const geoGgdNl = "https://cartomap.github.io/nl/wgs84/ggdregio_2021.topojson";

const MapChart = ({ setTooltipContent, ggdChecked, markerChecked }) => {
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
          <Geographies geography={geoUrlNl} stroke="#232129" strokeWidth={0.25}>
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
          <Geographies geography={geoGgdNl} stroke="#232129" strokeWidth={0.25}>
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

        {markerChecked && (
          <>
            <Marker
              key="marker"
              coordinates={[5.1138, 52.0886]}
              onMouseEnter={() => {
                setTooltipContent(
                  "NVVC: Moreelsepark 1, 3511 EP Utrecht, Netherlands (5.1138, 52.0886)"
                );
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
            >
              <circle r={5} fill="#F00" stroke="#fff" strokeWidth={1} />
              <text
                textAnchor="middle"
                y="0"
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              ></text>
            </Marker>
            <Marker
              key="marker"
              coordinates={[4.89513, 52.3651017]}
              onMouseEnter={() => {
                setTooltipContent(
                  "Mecosud: Herengracht 551, 1017 BW Amsterdam, Netherlands (4.89513, 52.3651017)"
                );
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
            >
              <circle r={5} fill="#F00" stroke="#fff" strokeWidth={1} />
              <text
                textAnchor="middle"
                y="0"
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              ></text>
            </Marker>
          </>
        )}
      </ComposableMap>
    </>
  );
};

export default MapChart;
