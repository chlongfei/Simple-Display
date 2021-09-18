import "./fileUpload.css";

import axios from 'axios';

import React, {useState} from 'react';

export default function FileUpload(){
    const [file, setFile] = useState(null);
    const [uploading, setBtn] = useState(false);


    function onChangeHandler(e){
        setFile(e.target.files[0])
    }

    function onClickHandler(e, url){
        const data = new FormData();
        data.append('file', file);
        console.log("uploading...");
        setBtn(true);
        document.getElementById("loadingBar").style.display = "block";
        axios.post(url, data, {})
        .then(res => {
            console.log(res);
            document.getElementById("uploadBtn").style.display = "none";
            document.getElementById("loadingBar").style.display = "none";
            document.getElementById("uploadForm").style.display = "none";
            document.getElementById("uploadComplete").style.display = "block";

        })
    }

    return(
        <div id="upload" className="container">
            <h2>Upload Excel (.xlsx) file </h2>
                <form method="post" action="#" id="uploadForm">
                    <div class="form-group files color">
                        <br/>
                        <input type="file" name="file" className="form-control" accept=".xlsx" onChange={(e)=>{onChangeHandler(e)}}/>
                        <br/>
                        <input id="uploadBtn" type="button" className="btn btn-success btn-block" value="Upload" disabled={uploading} onClick={(e)=>{onClickHandler(e, process.env.PUBLIC_URL + "/upload")}}/>
                    </div>                    
                </form>
            <div id="loadingBar">Uploading file...</div>
            <div id="uploadComplete">
                Upload Complete! - You may close this window.<br/>
                (<a href={process.env.PUBLIC_URL+"/show"}>Preview</a>)
                </div>
        </div>
    )
}