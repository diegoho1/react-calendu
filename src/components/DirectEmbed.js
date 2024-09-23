import React, { useState } from "react";
import { StructureFinalUrl } from "../helpers/helpers";
import "./../react-calendu.css";

export default function DirectEmbed({
  url,
  styles,
  populateForm,
  tracking,
  extraData,
  layoutOptions,
  iframeTitle,
}) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const src = StructureFinalUrl(
    url,
    populateForm,
    tracking,
    extraData,
    layoutOptions
  );

  const defaultCSS = {
    minWidth: 330,
    height: 790,
    position: "relative", //for sppiner to be centered
  };

  return (
    <div className="calendu-direct-embed" style={{ ...defaultCSS, ...styles }}>
      {!iframeLoaded && (
        <div className="calendu-spinner-ring-container-absolute">
          <div className="calendu-spinner-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title={iframeTitle}
        src={src}
        onLoad={() => setIframeLoaded(true)}
      ></iframe>
    </div>
  );
}
