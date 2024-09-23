//SOLO SIRVE PARA PREVIEW DE SPACE, NO DE ROUTING FORMS NI OTM
import React, { useState, useEffect, useRef } from "react";
import { StructureFinalUrl } from "../helpers/helpers";
import "./../react-calendu.css";

export default function DirectPreviewEmbed({
  url,
  styles,
  populateForm,
  tracking,
  extraData,
  layoutOptions,
  iframeTitle,
  saveWasHit,
  setSaveWasHit,
}) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef(null);
  const currentUrl = useRef(
    StructureFinalUrl(url, populateForm, tracking, extraData, layoutOptions)
  );

  useEffect(() => {
    // Generate the current URL with query parameters
    const newUrl = StructureFinalUrl(
      url,
      populateForm,
      tracking,
      extraData,
      layoutOptions
    );

    // Check if it's the initial render
    // Check if the URL has changed
    if (newUrl !== currentUrl.current) {
      currentUrl.current = newUrl; // Update the current URL
      iframeRef.current.contentWindow.location.replace(newUrl);
      setIframeLoaded(false); // Reset loaded state to show the spinner
    }

    // Reload the iframe when saveWasHit is true
    if (saveWasHit) {
      setSaveWasHit(false); // Update the state before triggering the reload
      iframeRef.current.contentWindow.location.reload(true);
      setIframeLoaded(false); // Reset loaded state to show the spinner
    }
  }, [
    url,
    populateForm,
    tracking,
    extraData,
    layoutOptions,
    saveWasHit,
    setSaveWasHit,
  ]);

  const defaultCSS = {
    minWidth: 330,
    height: 790,
    position: "relative", // for spinner to be centered
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
        ref={iframeRef}
        title={iframeTitle}
        width="100%"
        height="100%"
        frameBorder="0"
        src={currentUrl.current}
        onLoad={() => setIframeLoaded(true)}
      ></iframe>
    </div>
  );
}
