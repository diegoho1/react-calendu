import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { StructureFinalUrl } from "../helpers/helpers";
import "./../react-calendu.css";

export default function CalenduModal({
  isModalOpen,
  setIsModalOpen,
  htmlRootElement,
  iframeTitle,
  url,
  populateForm,
  tracking,
  extraData,
  layoutOptions,
}) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    setTimeout(() => {
      body.classList.add("calendu-mask-is-open");
    }, 100);

    return () => {
      body.classList.remove("calendu-mask-is-open");
    };
  }, []);

  if (!isModalOpen) {
    return null;
  }

  const src = StructureFinalUrl(
    url,
    populateForm,
    tracking,
    extraData,
    layoutOptions
  );

  return ReactDOM.createPortal(
    <div className="calendu-mask">
      <div className="calendu-close-mask"></div>
      <div className="calendu-pop-modal">
        <div className="calendu-website-embed calendu-pop-modal-content">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title={iframeTitle}
            src={src}
            onLoad={() => setIframeLoaded(true)}
          ></iframe>
        </div>
        {!iframeLoaded && (
          <div className="calendu-spinner-ring-container">
            <div className="calendu-spinner-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
      <div
        className="calendu-pop-modal-close"
        onClick={() => setIsModalOpen(false)} //modal component will unmount when isModalOpen is false. When the component unmounts, React automatically cleans up the portal created using createPortal
      ></div>
    </div>,
    htmlRootElement
  );
}
