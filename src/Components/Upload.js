import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import SearchIcon from "@material-ui/icons/Search";
import {
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Col,
  Row,
  Button,
  Alert,
  InputGroupButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import TheContext from "./../TheContext";

function Upload() {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [err, setErr] = useState("");
  const [showErr, setShowErr] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const [title, updateTitle] = useState("");
  const [content, updateContent] = useState("");
  const [image, updateImage] = useState(null);
  const changeTitle = (e) => {
    updateTitle(e.target.value);
  };
  const changeContent = (e) => {
    updateContent(e.target.value);
  };
  const changeImage = (e) => {
    updateImage(e.target.files[0]);
  };
  const [tags, setTags] = useState("");
  const [topicValue, setTopicValue] = useState("Topic");
  const updateTags = (e) => {
    setTags(e.target.value);
  };
  const url = "http://localhost:3000/upload";
  const imgSubmit = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      content === "" ||
      tags === "" ||
      topicValue === "Topic"
    ) {
      setErr("Please fill all the Values.");
      setVisible(true);
      setShowErr(true);
      return;
    }
    let form = new FormData();
    form.append("lol", image);
    form.append("foo", "bar");
    form.append("name", title);
    form.append("description", content);
    form.append("tags", tags);
    form.append("topic", topicValue);

    const response = await Axios.post(url, form);
    console.log(response);
  };

  return (
    <>
      <br />
      <br />
      <h2>Upload</h2>
      <br />
      <Row>
        <Col
          xs="12"
          md={{ size: "6", offset: "3" }}
          lg={{ size: "5", offset: "2" }}
        >
          <form onSubmit={imgSubmit}>
            <p>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Title</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Title"
                  value={title}
                  onChange={changeTitle}
                  required="required"
                />
              </InputGroup>
            </p>

            <p>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Description</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Description"
                  value={content}
                  onChange={changeContent}
                  required="required"
                />
              </InputGroup>
            </p>
            <InputGroupButtonDropdown
              addonType="prepend"
              isOpen={dropdownOpen}
              toggle={toggleDropDown}
            >
              <DropdownToggle caret value={topicValue}>
                {topicValue}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    setTopicValue("Anime");
                  }}
                >
                  Anime
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setTopicValue("VideoGames");
                  }}
                >
                  Video Games
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setTopicValue("Interests");
                  }}
                >
                  Interests
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setTopicValue("Technology");
                  }}
                >
                  Technology
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setTopicValue("Others");
                  }}
                >
                  Others
                </DropdownItem>
              </DropdownMenu>
              &nbsp;
              <Input
                value={tags}
                placeholder={"Enter tags seperated by comma!"}
                onChange={updateTags}
              />
            </InputGroupButtonDropdown>
            <br />
            <InputGroup>
              <p>
                <input
                  type="file"
                  id="image"
                  accept="image/png, image/jpeg"
                  onChange={changeImage}
                  required="required"
                />
              </p>
            </InputGroup>
            <InputGroup>
              <Row>
                <Col
                  xs={{ size: "12" }}
                  md={{ size: "12" }}
                  lg={{ size: "12" }}
                >
                  <Input type="submit">Upload</Input>
                </Col>
              </Row>
            </InputGroup>
            <br />
            <Row>
              <Col xs={{ size: "10" }} md={{ size: "10" }} lg={{ size: "9" }}>
                {showErr && (
                  <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                    {err}
                  </Alert>
                )}
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </>
  );
}

export default Upload;
