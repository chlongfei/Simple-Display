import React, {useState} from 'react';
import './file.css';

export default function FileUploader(){
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [statMsg, setStatMsg] = useState("");

    function handleSendFile(){
        setUploading(true);
        const data = new FormData();
        data.append('file', file);

        var xmlHttp = new XMLHttpRequest();
        httpEventListener(xmlHttp);
        xmlHttp.open('POST', '/upload', true);
        xmlHttp.onloadend = ()=>{
            if(xmlHttp.status !== 200){
                setError(true);
                setStatMsg(xmlHttp.status + " - " + xmlHttp.statusText);
                xmlHttp.abort();
            }
        }
        xmlHttp.send(data);
    }

    function httpEventListener(xmlHttp){
        xmlHttp.addEventListener('loadstart',handleHttpStatusMsg);
        xmlHttp.addEventListener('load', handleHttpStatusMsg);
        xmlHttp.addEventListener('loadend', handleHttpStatusMsg);
        xmlHttp.addEventListener('progress', handleHttpStatusMsg);
        xmlHttp.addEventListener('error', handleHttpStatusMsg);
        xmlHttp.addEventListener('abort', handleHttpStatusMsg);
    }

    function handleHttpStatusMsg(e){
        if(e.type === 'error'){
            setError(true);
            setStatMsg("ERROR! " + e.loaded + " of " + e.total + " bytes uploaded");
        }else{
            setStatMsg(e.loaded + " of " + e.total + " bytes uploaded...");
            if(e.type === 'loadend' && !error){
                setUploading("DONE");
                setStatMsg("DONE! ( " + e.loaded + " bytes uploaded)");
            }
        }
    }

    function fileValid(){
        return file !== null;
    }

    function ConditionalForm(){
        if(!uploading){
            return <></>
        }else if (uploading && !error){
            return(
                <div id="uploading">
                    <h4>{statMsg}</h4>
                    <button className="btn btn-secondary reload" onClick={()=>{window.location.reload()}}>update preview -></button>
                </div>
            )
        }else{
            return(
                <div id="uploadError">
                    <h2>{statMsg}</h2>
                    <button className="btn btn-secondary reload" onClick={()=>{window.location.reload()}}>reset</button>
                </div>
            )
        }
    }

    return(
        <div id="fileUploader">
            <h5>Upload Microsoft Excel file below:</h5>
            <div>
                <form>
                    <input id="formFileUpload" type="file" accept=".xlsx" onChange={(e)=>{setFile(e.target.files[0])}}/>
                    <br/>
                    <input id="uploadBtn" className="btn btn-success btn-block" type="button" value="Upload" disabled={!fileValid()} onClick={(e)=>{handleSendFile(e)}}/>
                </form>
                <br/>
                <ConditionalForm/>
            </div>
        </div>
    )
}