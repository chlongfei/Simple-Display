import "./viewer.css";
import { io } from "socket.io-client";
import React, {useState} from "react";
import { Alert } from "react-bootstrap";

export default function Viewer(){
    
    const socket = io();
    socket.on("reload",()=>{
        window.location.reload();
    })
    

    return(
        <div id="viewer">
            <iframe id="viewerFrame" title="viewerFrame" src="../../uploads/active.html"></iframe>
        </div>
    )
}