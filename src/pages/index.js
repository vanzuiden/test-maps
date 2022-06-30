import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "../components/mapChart";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#5ecc62",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const IndexPage = () => {
  const [content, setContent] = useState("");
  const [ggdChecked, setGgdChecked] = useState(false);
  const [markerChecked, setMarkerChecked] = useState(false);
  function toggle(value){
    return !value;
  }

  return (
    <main style={pageStyles}>
      <title>Maps - Dit is een test</title>
      <h1 style={headingStyles}>
        Dit is een test
        <br />
        <span style={headingAccentStyles}>
          Maps{" "}
          <span role="img" aria-label="Nerd face emoji">
            🤓
          </span>
        </span>
      </h1>
      <p style={paragraphStyles}>
        Een eenvoudige map met diverse visualisaties
      </p>
      <p style={paragraphStyles}>
        <b>Toon: </b>
        <input
          type="checkbox"
          checked={ggdChecked}
          onChange={() => setGgdChecked(toggle)}
        />
        GGD Topojson
        <input
          type="checkbox"
          checked={markerChecked}
          onChange={() => setMarkerChecked(toggle)}
        />
        Marker
      </p>
      <MapChart setTooltipContent={setContent} ggdChecked={ggdChecked} markerChecked={markerChecked} />
      <ReactTooltip backgroundColor="#b3dcff" textColor="#232129">
        {content}
      </ReactTooltip>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

export default IndexPage;
