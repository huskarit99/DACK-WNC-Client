import React, { Fragment, useEffect, useState, useReducer } from "react";
import { Add } from "@material-ui/icons";
import { Button } from "@material-ui/core";

import Lesson from "./components/Lesson/Lesson";
import AddVideoModal from "./components/Modal/AddVideoModal";
import DeleteVideoModal from "./components/Modal/DeleteVideoModal";
import { getVideosByCourseId } from "../../../../../services/api/videoApi";

const ListVideo = (props) => {
  const [videos, setVideos] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    getVideosByCourseId(props.id).then((result) => {
      setVideos(result);
    });
  }, [ignored]);

  return (
    <Fragment>
      {videos && (
        <div className="sparkline8-list">
          <div className="sparkline8-graph">
            <div className="static-table-list">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tên Bài</th>
                    <th style={{ textAlign: "center" }}>Trạng thái</th>
                    <th style={{ textAlign: "center" }}>Chỉnh sửa</th>
                    <th style={{ textAlign: "center" }}>
                      <Button
                        data-toggle="modal"
                        data-target="#addVideo"
                        style={{
                          padding: "0",
                          margin: "0",
                          width: "20px",
                          height: "20px",
                          minWidth: "0",
                        }}
                      >
                        <Add />
                      </Button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {videos &&
                    videos.length > 0 &&
                    videos.map((video, index) => {
                      return (
                        <Fragment>
                          <Lesson video={video} index={index} key={video._id} />
                          <DeleteVideoModal
                            video={video}
                            index={index}
                            forceUpdate={forceUpdate}
                          />
                        </Fragment>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <AddVideoModal courseId={props.id} forceUpdate={forceUpdate} />
    </Fragment>
  );
};

export default ListVideo;
