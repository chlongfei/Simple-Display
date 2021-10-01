import './landing.css';

export default function Landing(){
    return(
        <div id="landing">
            <div className="dialog">
                <div className="buttons">
                    <h1>Simple Display</h1>
                    <div id="viewerBtn" onClick={()=>{window.location.assign("/manager")}}>
                        Manager Mode
                    </div>
                    <div id="viewerBtn" onClick={()=>{window.location.assign("/viewer")}}>
                        Viewer Mode
                    </div>
                    <sub>Note: Viewer Mode will result in 404 error if no file is on display.</sub>
                </div>
            </div>
        </div>
    )
}