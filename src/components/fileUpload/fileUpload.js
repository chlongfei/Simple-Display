import "./fileUpload.css";

import axios from 'axios';

import React, {useState} from 'react';

export default function FileUpload(){
    const [file, setFile] = useState(null);


    function onChangeHandler(e){
        setFile(e.target.files[0])
    }

    function onClickHandler(e, url){
        const data = new FormData();
        data.append('file', file);
        console.log("uploading...");
        axios.post(url, data, {})
        .then(res => {
            //console.log(res.statusText);
        })
    }

    return(
        <div id="upload" className="container">
                <form method="post" action="#" id="#">
                    <div class="form-group files color">
                        <h2>Upload Excel (.xlsx) file </h2>
                        <br/>
                        <input type="file" name="file" className="form-control" accept=".xlsx" onChange={(e)=>{onChangeHandler(e)}}/>
                        <br/>
                        <input type="button" className="btn btn-success btn-block" value="Upload" onClick={(e)=>{onClickHandler(e, "http://localhost:8000/upload")}}/>
                    </div>                    
                </form>
        </div>
    )
}