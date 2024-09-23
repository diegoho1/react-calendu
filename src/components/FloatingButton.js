import React, { useState } from "react";
import CalenduModal from "./CalenduModal";
import "./../react-calendu.css";

//{ url, iframeTitle, buttonText }
export default function FloatingButton({
  url,
  htmlRootElement,
  styles,
  populateForm,
  tracking,
  extraData,
  layoutOptions,
  iframeTitle,
  buttonText,
  alighToRightBottom = true,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div
        className={`calendu-floating-button ${
          !alighToRightBottom && "calendu-button-to-bottom-left"
        }`}
        id="calendu-element-identifier"
        style={{ ...styles }}
        onClick={() => setIsModalOpen(true)}
      >
        {buttonText}
      </div>
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
    //asdf
    // <script>
    //   window.onload = function() {
    //     startFloatingButton({
    //       url: 'http://localhost:3003/luisa12/luisa-1o1/?bg_color=ffffff&text_color=000000&main_color=196cff',
    //       text: 'Schedule time with me',
    //       backgroundColor: '#196cff',
    //       color: '#FFFFFF'
    //     });
    //   };
    // </script>
  );
}
