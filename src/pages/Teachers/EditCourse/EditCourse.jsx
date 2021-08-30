import draftToHtml from "draftjs-to-html";
import { useParams, useHistory } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { DropzoneArea } from "material-ui-dropzone";
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState, useEffect, useRef, useReducer } from "react";

import "./style.css";
import ListVideo from "./containers/ListVideo/ListVideo";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import colorAlertEnum from "../../../utils/enums/colorAlertEnum";
import { updateOne, getCourseByIdApi } from "../../../services/api/courseApi";
import { getCategoriesForTeacherApi } from "../../../services/api/categoryApi";

const EditCourse = () => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
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
  const [updateDay, setUpdateDay] = useState(new Date());

  useEffect(() => {
    getCategoriesForTeacherApi().then((result) => {
      if (result.isSuccess) {
        setCategories(result.categories);
      }
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
        setUpdateDay(new Date(result.data.updatedAt));
      }
    });
  }, [ignored]);

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
    updateOne({
      id: course._id,
      name: nameRef.current.value,
      categoryId: categoryId,
      price: priceRef.current.value,
      image: image,
      detail: detail,
      description: description,
      discount: discountRef.current.value,
      isCompleted: isCompletedRef.current.checked,
    }).then((result) => {
      if (result.isSuccess) {
        forceUpdate();
        setMessageAlert(
          <p
            style={{
              color: colorAlertEnum.SUCCESS,
              fontSize: "1.25rem",
            }}
          >
            <strong>{"Chỉnh sửa thành công !!!"}</strong>
          </p>
        );
      } else {
        setMessageAlert(
          <p
            style={{
              color: colorAlertEnum.ERROR,
              fontSize: "1.25rem",
            }}
          >
            <strong>{"Chỉnh sửa thất bại !!!"}</strong>
          </p>
        );
      }
    });
  };

  return (
    <div className="single-pro-review-area mt-t-30 mg-b-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-payment-inner-st">
              <ul id="myTabedu1" className="tab-review-design">
                <li className="active">
                  <a href="#description">Chỉnh sửa chi tiết khóa học</a>
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
                            <div
                              className="form-group"
                              style={{ display: "inline-flex" }}
                            >
                              <div
                                style={{
                                  alignSelf: "center",
                                  width: "200px",
                                  height: "100%",
                                  marginRight: "11px",
                                  marginLeft: "16px",
                                }}
                              >
                                <p
                                  style={{
                                    margin: "0",
                                    fontSize: "1rem",
                                    fontWeight: "400",
                                    lineHeight: "1.5",
                                    letterSpacing: "0.00938em",
                                    color: "#333",
                                  }}
                                >
                                  {"Discount (%): "}
                                </p>
                              </div>

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
                                    defaultChecked={
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
                          <div
                            className="form-group"
                            style={{
                              margin: "180px 0 60px 0",
                              padding: "100px 0 0 0",
                            }}
                          >
                            <ListVideo id={id} />
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
                        <div className="row" style={{ textAlign: "center" }}>
                          {messageAlert}
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
