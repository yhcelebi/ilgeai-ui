import React from 'react';
import "./CameraCarousel.css";
import { Camera } from "../camera/camera";

export function CameraCarousel({ numberOfCameras }) {
  // Generate an array with a length equal to numberOfCameras
  const cameraItems = Array.from({ length: numberOfCameras }, (_, index) => (
    <div key={index} className="carousel-item">
      <Camera className="border-2"/>
    </div>
  ));

  return (
    <>
      <div className="carousel rounded-none border-2">
        {cameraItems}
      </div>
    </>
  );
}

