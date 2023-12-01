import "./RecordingButtons.css";

export function RecordingButtons(props) {
  return (
    <>
      <div>
        <div className="grid grid-rows-2 grid-flow-col gap-4 ml-12 w-full my-auto py-auto mt-10">
          <div className="col-span-2 w-auto h-auto bg-red-600 border-2 w-full">
            <p className="text-center">Start</p>
          </div>
          <div className="col-span-2 w-auto h-auto bg-red-600 border-2 w-full">
            <p className="text-center">Stop</p>
          </div>
          <div className="row-span-2 w-32 bg-red-600 border-2 h-full">
            <p className="text-center my-auto mt-5">Reset</p>
          </div>
        </div>
      </div>
    </>
  );
}
