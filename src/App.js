import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {

  const [archivos,setArchivos]= useState(null);

  const subirArchivos = e=>{
    setArchivos(e);
  }

  const insertarArchivos = async()=>{
    const f = new FormData()

    for(let index =0; index<archivos.length; index++){
      f.append("files",archivos[index]);

    }

    await axios.post("/cm_upload_file",f/*,{headers: {'content-type': 'multipart/form-data'}}*/)
    .then(response=>{
      console.log(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  return (
    <div className="App">
      <br></br>
      <input type = "file" name="files" multiple accept=".csv" onChange={(e)=>subirArchivos(e.target.files)}/>
      <br></br>
      <button className="btn btn-primary" onClick={()=>insertarArchivos()}>Insertar archivos</button>


    </div>
  );
}

export default App;
