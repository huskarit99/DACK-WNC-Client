import { Theaters } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { DropzoneArea } from "material-ui-dropzone";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import React, { useState, useEffect, useRef, Fragment } from "react";
import "./style.css";
import { addVideo } from "../../../../../../../services/api/videoApi";

const AddVideoModal = ({ courseId, forceUpdate }) => {
  const isPreviewedRef = useRef(null);
  const titleRef = useRef(null);
  const [video, setVideo] = useState("");
  const [messageAlert, setMessageAlert] = useState(<Fragment />);

  const handleClick = () => {
    addVideo({
      courseId,
      video,
      title: titleRef.current.value,
      isPreviewed: isPreviewedRef.current.checked,
    }).then((res) => {
      forceUpdate();
    });
  };

  const handlePreviewIcon = (fileObject, classes) => {
    const { type } = fileObject.file;
    const iconProps = {
      className: classes.image,
    };
    if (type.startsWith("video/")) return <Theaters {...iconProps} />;
  };

  return (
    <div
      id="addVideo"
      className="modal modal-edu-general default-popup-PrimaryModal fade"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#">
              <i className="fa fa-close"></i>
            </a>
          </div>
          <div
            className="modal-body"
            style={{ padding: "50px 70px 30px 70px" }}
          >
            <h2>Thêm video bài giảng</h2>
            <div className="form-group">
              <input
                name="title"
                type="text"
                className="form-control"
                placeholder="Tiêu đề video bài giảng"
                required
                ref={titleRef}
              />
            </div>
            <div className="form-group" style={{ textAlign: "left" }}>
              <FormControlLabel
                label="Video được xem trước ?"
                labelPlacement="start"
                control={<Checkbox inputRef={isPreviewedRef} color="primary" />}
              />
            </div>
            <div className="form-group">
              <DropzoneArea
                getPreviewIcon={handlePreviewIcon}
                acceptedFiles={["video/*"]}
                dropzoneText={"Drag and drop an file here or click"}
                filesLimit={1}
                onChange={(files) => {
                  if (files && files.length > 0)
                    return new Promise((resolve) => {
                      let baseURL = "";
                      let reader = new FileReader();
                      reader.readAsDataURL(files[0]);
                      reader.onload = () => {
                        baseURL = reader.result;
                        setVideo(baseURL);
                        resolve(baseURL);
                      };
                    });
                }}
              />
            </div>
            <div className="form-group" style={{ textAlign: "left" }}>
              {messageAlert}
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn"
              data-dismiss="modal"
              style={{
                backgroundColor: "#006DF0",
                color: "white",
                fontSize: "16px",
                marginRight: "10px",
              }}
            >
              Đóng
            </button>
            <button
              className="btn"
              data-dismiss="modal"
              style={{
                backgroundColor: "#006DF0",
                color: "white",
                fontSize: "16px",
                marginRight: "10px",
              }}
              onClick={handleClick}
            >
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVideoModal;
