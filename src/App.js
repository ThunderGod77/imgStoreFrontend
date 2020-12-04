import React, { useState } from "react";
import Axios from "axios";
import FormData from "form-data";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Registration from "./Components/Registration";
import Home from "./Components/Home.js";
import Upload from "./Components/Upload";
import TheContext from "./TheContext";
import { useImmerReducer } from "immer-reducer";

import "./App.css";

function App() {
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
  const url = "http://localhost:3000/upload";
  const imgSubmit = async (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("lol", image);
    form.append("foo", "bar");
    form.append("name", title);
    form.append("description", content);

    const response = await Axios.post(url, form);
    console.log(response);
  };

  const [messages, setMessages] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const showFlashMessage = async (text) => {
    await setMessages(messages.concat([text]));
    setShowMessage(true);
  };

  return (
    <TheContext.Provider value={{ showFlashMessage: showFlashMessage }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />

          <Switch>
            <Route path={"/upload"} exact="exact">
              <Upload />
            </Route>
            <Route path={"/register"} exact={"exact"}>
              <Registration />
            </Route>
            <Route path={"/"}>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </TheContext.Provider>
  );
}

export default App;
