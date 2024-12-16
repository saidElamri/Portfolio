import React, { useState } from "react";
import "../styles/Certificate.css";

const certificates = [
  {
    title: "Google Security Certificate",
    description: "Earned for completing advanced security training.",
    files: ["./coursera.jpg"],
  },
  {
    title: "ODC Orange MERN Bootcamp",
    description: "4-month bootcamp on MERN stack and Agile methodologies.",
    files: ["./odc.jpg"],
  },
  {
    title: "freeCodeCamp Certificates",
    description: "Certificates in web development, JavaScript, and more.",
    files: ["./js.png", "./responsive.png"], // Includes both certificates
  },
  {
    title: "ALX AI Career Essentials",
    description: "The ALX AI Career Essentials Program",
    files: ["./alx.jpeg"],
  },
];

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="certificate-page">
      <h1>My Achievements</h1>
      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h2>{cert.title}</h2>
            <p>{cert.description}</p>
            <div className="certificate-files">
              {cert.files.map((file, fileIndex) => (
                <img
                  key={fileIndex}
                  src={file}
                  alt={`${cert.title} - ${fileIndex + 1}`}
                  className="certificate-image"
                  onClick={() => openModal(file)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected Certificate" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
