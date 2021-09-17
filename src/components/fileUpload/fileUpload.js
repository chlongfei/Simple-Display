import "./fileUpload.css";

import axios from 'axios';

import React, {useState} from 'react';

export default function FileUpload(){
    const [file, setFile] = useState(null);


    function onChangeHandler(e){
        setFile(e.target.files[0])
    }

    function onClickHandler(e){
        const data = new FormData();
        data.append('file', file);

        axios.post("http://localhost:8000/upload", data, {})
        .then(res => {
            console.log(res.statusText);
        })
    }

    return(
        <div id="upload">
                <form method="post" action="#" id="#">
                    <div class="form-group files color">
                        <h2>Upload Your File </h2>
                        <br/>
                        <input type="file" name="file" className="form-control" onChange={(e)=>{onChangeHandler(e)}}/>
                        <br/>
                        <input type="button" className="btn btn-success btn-block" value="Upload" onClick={(e)=>{onClickHandler(e)}}/>
                    </div>                    
                </form>
        </div>
    )
}