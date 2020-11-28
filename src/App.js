import React,{useState} from 'react';
import Axios from 'axios';
import FormData from 'form-data';

import './App.css';

function App() {

  const [title,updateTitle] = useState("");
  const [content,updateContent] = useState("");
  const [image,updateImage] = useState(null);
  const changeTitle  = (e)=>{
    updateTitle(e.target.value);
  }
  const changeContent = (e)=>{
    updateContent(e.target.value);
  }
  const changeImage = (e)=>{
    updateImage(e.target.files[0]);
  }
  const url = "http://localhost:3000/upload"
  const imgSubmit = async(e)=>{
    e.preventDefault();
    var form = new FormData();
    form.append("lol", image);
    form.append('foo', 'bar');
    const response = await Axios.post(url, form);
    console.log(response);

  }


  return (

      <div className="App">
        <form onSubmit={imgSubmit}>
          <p>
            <input type="text" placeholder='Title' id='title' value={title} onChange={changeTitle} required/>
          </p>
          <p>
            <input type="text" placeholder='Content' id='content' value={content} onChange={changeContent} required/>

          </p>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={changeImage} required/>
          </p>
          <input type="submit"/>
        </form>
        {/*<div>*/}
        {/*  <img src={"https://myspacelol.fra1.digitaloceanspaces.com/namewater.png"}/>*/}
        {/*</div>*/}
      </div>


  );
}

export default App;
