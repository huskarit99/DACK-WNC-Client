import React from 'react'
import ReactPlayer from 'react-player'
const Lesson = ({ video, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{video.title}</td>
      <td>{video.is_previewed ? <a href="#" data-toggle="modal" data-target={`#lesson` + index}>Xem trước</a> : 'Mua khóa học'}</td>
      {/* <div id={"lesson" + index} className="modal modal-edu-general default-popup-PrimaryModal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-close-area modal-close-df">
              <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
            </div>
            <div className="modal-body" style={{ alignItems: 'center' }}>
              <ReactPlayer url='/videos/1.mp4' controls width="500px" height="300px" />
            </div>
            <div className="modal-footer">
              <button data-dismiss="modal" className="btn" style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px", marginRight: "10px" }}>Trở về</button>
              <button
                className="btn"
                style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px" }}
                onClick={handleClick} data-dismiss="modal"
              >Có</button>
            </div>
          </div>
        </div>
      </div> */}
    </tr>
  )
}

export default Lesson
