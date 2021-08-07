import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

const Lesson = ({ video, index }) => {
  const videoRef = useRef(null);
  const [show, setShow] = useState(false);
  const getProgress = () => {
    console.log(videoRef.current.getCurrentTime());
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{video.title}</td>
      <td>
        {video.is_previewed ? (
          <a
            href="#"
            data-toggle="modal"
            data-target={`#lesson` + index}
            onClick={() => {
              setShow(true);
            }}
          >
            Xem trước
          </a>
        ) : (
          "Mua khóa học"
        )}
      </td>
      <div
        id={"lesson" + index}
        className="modal modal-edu-general default-popup-PrimaryModal fade"
        role="dialog"
        onClick={() => {
          setShow(false);
        }}
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{ backgroundColor: "rgb(233, 233, 233)" }}
          >
            <div className="modal-close-area modal-close-df">
              <button
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setShow(false);
                  getProgress();
                }}
              >
                <i className="fa fa-close"></i>
              </button>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              paddingTop: "56.25%",
            }}
          >
            <ReactPlayer
              ref={videoRef}
              playing={show}
              style={{ position: "absolute", top: "0", left: "0" }}
              url="/videos/1.mp4"
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </tr>
  );
};

export default Lesson;
