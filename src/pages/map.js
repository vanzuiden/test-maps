import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "../components/mapChart";

const MapPage = () => {
  const [content, setContent] = useState("");
  return (
    <main>
      <title>Map Page</title>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </main>
  );
};

export default MapPage;
