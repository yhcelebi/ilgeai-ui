import "./Camera.css";

export function Camera(props) {


  return (
    <>
      <div className={props.className}>
        <video width={props.videoWidth} height={props.videoHeight} controls>
          <source src="movie.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
