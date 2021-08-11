import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { DropzoneArea } from "material-ui-dropzone";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "./style.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Theaters } from "@material-ui/icons";

const AddEditCourse = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handlePreviewIcon = (fileObject, classes) => {
    const { type } = fileObject.file;
    const iconProps = {
      className: classes.image,
    };
    if (type.startsWith("video/")) return <Theaters {...iconProps} />;
  };

  const onEditorStateChange = (editorState) => {
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setEditorState(editorState);
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
                        <form action="/upload">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <input
                                  name="coursename"
                                  type="text"
                                  className="form-control"
                                  placeholder="Tên khóa học"
                                />
                              </div>
                              <div className="form-group">
                                <div className="form-select-list">
                                  <select
                                    className="form-control custom-select-value"
                                    name="account"
                                  >
                                    <option>Lập trình Web</option>
                                    <option>Lập trình Android</option>
                                    <option>Lập trình Ios</option>
                                    <option>Select 4</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group">
                                <input
                                  name="price"
                                  type="number"
                                  className="form-control"
                                  placeholder="Giá khóa học"
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
                                        console.log(baseURL);
                                        resolve(baseURL);
                                      };
                                    });
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
                                filesLimit="1"
                                onChange={(files) => {
                                  if (files && files.length > 0)
                                    return new Promise((resolve) => {
                                      let baseURL = "";
                                      let reader = new FileReader();
                                      reader.readAsDataURL(files[0]);
                                      reader.onload = () => {
                                        baseURL = reader.result;
                                        console.log(baseURL);
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
                                  editorState={editorState}
                                  wrapperClassName="demo-wrapper"
                                  editorClassName="demo-editor"
                                  onEditorStateChange={onEditorStateChange}
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
                                  // editorState={editorState}
                                  wrapperClassName="demo-wrapper"
                                  editorClassName="demo-editor"
                                  // onEditorStateChange={onEditorStateChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="alert-title">
                              <h2>Đăng bài giảng</h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="payment-adress">
                                <button
                                  type="submit"
                                  className="btn btn-primary waves-effect waves-light"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
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

export default AddEditCourse;
