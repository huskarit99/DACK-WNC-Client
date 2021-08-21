import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { useParams } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { useHistory } from "react-router-dom";
import { DropzoneArea } from "material-ui-dropzone";
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
  convertFromRaw,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState, useEffect, useRef } from "react";

import "./style.css";
import { Theaters } from "@material-ui/icons";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { getCourseByIdApi } from "../../../services/api/courseApi";
import { getVideosByCourseId } from "../../../services/api/videoApi";
import { getCategoriesForTeacherApi } from "../../../services/api/categoryApi";

const EditCourse = () => {
  const history = useHistory();
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const discountRef = useRef(null);
  const isCompletedRef = useRef(null);
  const [image, setImage] = useState("/");
  const [detail, setDetail] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [messageAlert, setMessageAlert] = useState("");
  const [detailState, setDetailState] = useState(EditorState.createEmpty());
  const [descriptionState, setDescriptionState] = useState(
    EditorState.createEmpty()
  );

  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState(null);
  const [updateDay, setUpdateDay] = useState(new Date());

  useEffect(() => {
    getCategoriesForTeacherApi().then((result) => {
      if (result.isSuccess) {
        setCategories(result.categories);
      }
    });
    getVideosByCourseId(id).then((result) => {
      setVideos(result);
    });
    getCourseByIdApi(id).then((result) => {
      if (result.isSuccess) {
        setCourse(result.data);
        setCategoryId(result.data.category_id);
        let blocksFromHTML = convertFromHTML(result.data.detail);
        let state = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        );
        setDetailState(EditorState.createWithContent(state));
        blocksFromHTML = convertFromHTML(result.data.description);
        state = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        );
        setDescriptionState(EditorState.createWithContent(state));
        setImage(result.data.image);
        setMessageAlert("");
        setUpdateDay(new Date(result.data.updatedAt));
      }
    });
  }, []);

  const handlePreviewIcon = (fileObject, classes) => {
    const { type } = fileObject.file;
    const iconProps = {
      className: classes.image,
    };
    if (type.startsWith("video/")) return <Theaters {...iconProps} />;
  };

  const onDescriptionStateChange = (descriptionState) => {
    setDescription(
      draftToHtml(convertToRaw(descriptionState.getCurrentContent()))
    );
    setDescriptionState(descriptionState);
  };

  const onDetailStateChange = (detailState) => {
    setDetail(draftToHtml(convertToRaw(detailState.getCurrentContent())));
    setDetailState(detailState);
  };
  const handleSaveChanges = () => {
    console.log(isCompletedRef.current.checked);
  };

  return (
    <div className="single-pro-review-area mt-t-30 mg-b-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-payment-inner-st">
              <ul id="myTabedu1" className="tab-review-design">
                <li className="active">
                  <a href="#description">Chi tiết khóa học</a>
                </li>
              </ul>
              <div
                id="myTabContent"
                className="tab-content custom-product-edit"
              >
                <div
                  className="product-tab-list tab-pane fade active in"
                  id="description"
                >
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="review-content-section">
                        <div className="row" style={{ marginBottom: "50px" }}>
                          <div className="blog-image">
                            {course && (
                              <img
                                src={image}
                                alt=""
                                style={{ width: "1920px", height: "700px" }}
                              />
                            )}

                            <div className="blog-date">
                              {updateDay && (
                                <p style={{ color: "white" }}>
                                  <span className="blog-day">
                                    {updateDay.getDate()}
                                  </span>{" "}
                                  {updateDay.toLocaleString("en-us", {
                                    month: "short",
                                  })}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input
                                name="coursename"
                                type="text"
                                className="form-control"
                                placeholder="Tên khóa học"
                                defaultValue={course ? course.name : ""}
                                ref={nameRef}
                              />
                            </div>
                            <div className="form-group">
                              <div className="form-select-list">
                                <select
                                  onClick={(e) => setCategoryId(e.target.value)}
                                  className="form-control custom-select-value"
                                  value={categoryId ? categoryId : ""}
                                  name="category"
                                >
                                  <option key="">None</option>
                                  {categories.length > 0 &&
                                    categories.map((row) => (
                                      <option key={row._id} value={row._id}>
                                        {row.name}
                                      </option>
                                    ))}
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <input
                                name="courseprice"
                                type="number"
                                className="form-control"
                                placeholder="Giá khóa học"
                                defaultValue={course ? course.price : ""}
                                ref={priceRef}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                name="coursediscount"
                                type="number"
                                className="form-control"
                                placeholder="Khuyến mãi giảm giá khóa học theo phần trăm (VD: 10, 20)"
                                defaultValue={course ? course.discount : ""}
                                ref={discountRef}
                              />
                            </div>
                            <div className="form-group">
                              <FormControlLabel
                                label="Khóa học đã hoàn thành ?"
                                labelPlacement="start"
                                control={
                                  <Checkbox
                                    checked={
                                      course && course.is_completed
                                        ? true
                                        : false
                                    }
                                    inputRef={isCompletedRef}
                                    color="primary"
                                  />
                                }
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <DropzoneArea
                              acceptedFiles={["image/*"]}
                              dropzoneText={
                                "Drag and drop an image here or click"
                              }
                              filesLimit={1}
                              onChange={(files) => {
                                if (files && files.length > 0) {
                                  return new Promise((resolve) => {
                                    let baseURL = "";
                                    let reader = new FileReader();
                                    reader.readAsDataURL(files[0]);
                                    reader.onload = () => {
                                      baseURL = reader.result;
                                      setImage(baseURL);
                                      resolve(baseURL);
                                    };
                                  });
                                } else {
                                  setImage(course ? course.image : "/");
                                }
                              }}
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <DropzoneArea
                              getPreviewIcon={handlePreviewIcon}
                              acceptedFiles={["video/*"]}
                              dropzoneText={
                                "Drag and drop an file here or click"
                              }
                              filesLimit={1}
                              onChange={(files) => {
                                if (files && files.length > 0)
                                  return new Promise((resolve) => {
                                    let baseURL = "";
                                    let reader = new FileReader();
                                    reader.readAsDataURL(files[0]);
                                    reader.onload = () => {
                                      baseURL = reader.result;
                                      resolve(baseURL);
                                    };
                                  });
                              }}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="tinymce-single responsive-mg-b-30">
                            <div className="alert-title">
                              <h2>Mô tả ngắn gọn khóa học</h2>
                            </div>
                            <div className="form-group">
                              <Editor
                                editorState={descriptionState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={onDescriptionStateChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="tinymce-single responsive-mg-b-30">
                            <div className="alert-title">
                              <h2>Mô tả chi tiết khóa học</h2>
                            </div>
                            <div className="form-group">
                              <Editor
                                editorState={detailState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={onDetailStateChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="payment-adress">
                              <button
                                onClick={handleSaveChanges}
                                type="submit"
                                className="btn btn-primary waves-effect waves-light"
                              >
                                {"Chỉnh sửa khóa học"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
