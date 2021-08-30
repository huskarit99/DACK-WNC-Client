import React, { Fragment, useEffect, useState } from "react";

import Lesson from "./components/Lesson/Lesson";
import { getVideosByCourseId } from "../../../../../services/api/videoApi";

const ListVideo = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideosByCourseId(props.id).then((result) => {
      setVideos(result);
    });
  }, []);

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
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {videos &&
                    videos.length > 0 &&
                    videos.map((video, index) => {
                      return <Lesson video={video} index={index} key={index} />;
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ListVideo;
