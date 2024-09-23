import React, { useState } from "react";
import CalenduModal from "./CalenduModal";
import "./../react-calendu.css";

export default function CallToActionButton({
  url,
  htmlRootElement,
  styles,
  populateForm,
  tracking,
  extraData,
  layoutOptions,
  iframeTitle,
  buttonText,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultCSS = {
    color: "#FFFFFF",
    backgroundColor: "#6351d9",
    borderRadius: "6px",
    fontFamily: "Helvetica, Arial, sans-serif",
    outline: "none",
    display: "inline-block",
    whiteSpace: "nowrap",
    cursor: "pointer",
    border: "none",
    padding: "4px 15px",
  };

  const mergedStyles = styles ? { ...defaultCSS, ...styles } : defaultCSS;
  return (
    <>
      <button
        id="calendu-element-identifier"
        style={mergedStyles}
        onClick={() => setIsModalOpen(true)}
      >
        {buttonText}
      </button>
      {isModalOpen && (
        <CalenduModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          htmlRootElement={htmlRootElement}
          iframeTitle={iframeTitle}
          url={url}
          populateForm={populateForm}
          tracking={tracking}
          extraData={extraData}
          layoutOptions={layoutOptions}
        />
      )}
    </>
  );
}
