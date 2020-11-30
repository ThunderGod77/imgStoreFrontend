import React, {useState} from 'react';
import Axios from 'axios';
import FormData from 'form-data';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from './Components/NavBar.js'


import './App.css';

function App() {

  const [title, updateTitle] = useState("");
  const [content, updateContent] = useState("");
  const [image, updateImage] = useState(null);
  const changeTitle = (e) => {
    updateTitle(e.target.value);
  }
  const changeContent = (e) => {
    updateContent(e.target.value);
  }
  const changeImage = (e) => {
    updateImage(e.target.files[0]);
  }
  const url = "http://localhost:3000/upload"
  const imgSubmit = async (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("lol", image);
    form.append('foo', 'bar');
    form.append('name', title);
    form.append('description', content);

    const response = await Axios.post(url, form);
    console.log(response);

  }

  return (<div className="App">
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path={"/upload"} exact="exact">
          <form onSubmit={imgSubmit}>
            <p>
              <input type="text" placeholder='Title' id='title' value={title} onChange={changeTitle} required="required"/>
            </p>
            <p>
              <input type="text" placeholder='Content' id='content' value={content} onChange={changeContent} required="required"/>

            </p>
            <p>
              <input type="file" id="image" accept="image/png, image/jpeg" onChange={changeImage} required="required"/>
            </p>
            <input type="submit"/>
          </form>
        </Route>
      </Switch>
    </BrowserRouter>

  </div>);
}

export default App;
