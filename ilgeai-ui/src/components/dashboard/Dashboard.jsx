import "./Dashboard.css";
import { Navbar } from "../navbar/Navbar";
import { Camera } from "../cameras/camera/camera";
import { InputCard } from "../cards/input-card/InputCard";
import { OutputCard } from "../cards/output-card/OutputCard";
import { CameraCarousel } from "../cameras/camera-carousel/CameraCarousel";
import { RecordingButtons } from "../buttons/recording-buttons/RecordingButtons";

export function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="mx-auto justify-center place-content-center px-auto">
        <div className="flex w-full mx-auto justify-center place-content-center px-auto mt-10">
          <Camera className="relative border-2" videoWidth="720" videoHight="240"/>
          <div className="ml-12">
            <InputCard className="mb-5 rounded-none"/>
            <OutputCard className="mt-2 rounded-none"/>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex w-full mx-auto justify-center place-content-center px-auto">   
            <CameraCarousel numberOfCameras={4} className="border-2"/>
            <RecordingButtons />
        </div>
      </div>
    </>
  );
}
