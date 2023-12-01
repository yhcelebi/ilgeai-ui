import "./OutputCard.css";

export function OutputCard(props) {
  return (
    <>
      <div className={`card w-96 bg-base-100 shadow-xl border-2 ${props.className}`}>
        <div className="card-body">
          <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div className="border-2">
              <p className="text-center">Time</p>
            </div>
            <div className="border-2">
              <p className="text-center">Sensor</p>
            </div>
            <div className="border-2">
              <p className="text-center">Total Shots</p>
            </div>
            <div className="border-2">
              <p className="text-center">0.0</p>
            </div>
            <div className="border-2">
              <p className="text-center">0.0</p>
            </div>
            <div className="border-2">
              <p className="text-center">0.0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
