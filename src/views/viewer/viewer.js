import "./viewer.css";
import { io } from "socket.io-client";
import {useState} from 'react';

export default function Viewer(){
    const [type, setType] = useState(0);
    
    const socket = io();

    socket.on("pdf",()=>{
        setType(1);
    })
    socket.on("xls",()=>{
        setType(0);
        window.location.reload();
    })

    return(
        <div id="viewer">
            {(type === 0)? <iframe id="viewerFrame" title="viewerFrame" src="../../uploads/active.html"></iframe>:<iframe id="viewerFrame" title="viewerFrame" src="../../uploads/active.pdf#toolbar=0"></iframe>}
        </div>
    )
}