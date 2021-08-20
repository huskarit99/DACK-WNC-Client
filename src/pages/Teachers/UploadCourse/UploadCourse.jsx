import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import { useHistory } from "react-router-dom";
import { DropzoneArea } from "material-ui-dropzone";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState, useEffect, useRef } from "react";

import "./style.css";
import { addOne } from "../../../services/api/courseApi";
import colorAlertEnum from "../../../utils/enums/colorAlertEnum";
import { getCategoriesForTeacherApi } from "../../../services/api/categoryApi";

const UploadCourse = () => {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const history = useHistory();
  const [image, setImage] = useState("");
  const [detail, setDetail] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [messageAlert, setMessageAlert] = useState("");
  const [detailState, setDetailState] = useState(EditorState.createEmpty());
  const [descriptionState, setDescriptionState] = useState(
    EditorState.createEmpty()
  );

  useEffect(() => {
    getCategoriesForTeacherApi().then((result) => {
      if (result.isSuccess) {
        setCategoryId(result.categories[0]._id);
        setCategories(result.categories);
      }
    });
  }, []);

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

  const handleUpload = () => {
    addOne({
      name: nameRef.current.value,
      categoryId: categoryId,
      price: priceRef.current.value,
      image: image,
      detail: detail,
      description: description,
    }).then((result) => {
      if (result.isSuccess) {
        history.push("/teacher/courses");
      } else {
        setMessageAlert(
          <p style={{ color: colorAlertEnum.ERROR }}>{result.message}</p>
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
                  <a href="#description">Thêm khóa học</a>
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
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input
                                name="coursename"
                                type="text"
                                className="form-control"
                                placeholder="Tên khóa học"
                                ref={nameRef}
                              />
                            </div>
                            <div className="form-group">
                              <div className="form-select-list">
                                <select
                                  onClick={(e) => setCategoryId(e.target.value)}
                                  className="form-control custom-select-value"
                                  name="account"
                                >
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
                                name="price"
                                type="number"
                                className="form-control"
                                placeholder="Giá khóa học"
                                ref={priceRef}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <DropzoneArea
                              acceptedFiles={["image/*"]}
                              dropzoneText={
                                "Drag and drop an image here or click"
                              }
                              filesLimit="1"
                              onChange={(files) => {
                                if (files && files.length > 0)
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
                        {messageAlert}
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="payment-adress">
                              <button
                                className="btn btn-primary waves-effect waves-light"
                                onClick={handleUpload}
                              >
                                {"Đăng khóa học"}
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

export default UploadCourse;
