import "./InputCard.css";

export function InputCard(props) {
  return (
    <>
      <div className={`card w-96 bg-base-100 shadow-xl border-2 ${props.className}`}>
        <div className="card-body">
          <div class="grid grid-rows-2 grid-flow-col gap-4">
            <div className="border-2 px-12">
              <p className="text-center">Delay</p>
            </div>
            <div className="border-2 px-12">
              <p className="text-center">FPS</p>
            </div>
            <div className="border-2">
              <input type="text" className="input-card-css w-full focus:border-white"/>
            </div>
            <div className="border-2">
              <input type="text" className="input-card-css w-full focus:border-white"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
