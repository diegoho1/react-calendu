/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import CalenduModal from "./CalenduModal";
import "./../react-calendu.css";

export default function InlineText({
  url,
  htmlRootElement,
  styles,
  populateForm,
  tracking,
  extraData,
  layoutOptions,
  iframeTitle,
  text,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultCSS = {
    textDecoration: "underline",
    cursor: "pointer",
  };

  const toUseStyles = styles ? { ...styles } : defaultCSS;
  return (
    <>
      {" "}
      <a
        href="#"
        id="calendu-element-identifier"
        onClick={(event) => {
          event.preventDefault();
          setIsModalOpen(true);
        }}
        style={toUseStyles}
      >
        {text}
      </a>{" "}
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
