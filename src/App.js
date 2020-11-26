import React,{useState} from 'react';

import './App.css';

function App() {
  let handleSubmit = ()=>{
    console.log("kik");
  }
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


  return (
    <div className="App">
      <div className="App">
        <form /**onSubmit={this.handleSubmit}**/>
          <p>
            <input type="text" placeholder='Title' id='title' value={title} onChange={changeTitle} required/>
          </p>
          <p>
            <input type="text" placeholder='Content' id='content' value={content} onChange={changeContent} required/>

          </p>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  /**onChange={this.handleImageChange}**/ required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    </div>
  );
}

export default App;
