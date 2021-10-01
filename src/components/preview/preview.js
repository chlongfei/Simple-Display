import './preview.css';

export default function Preview(){
    return(
        <div id="preview">
            <h5>Preview:</h5>
            <iframe title="preview" src="/viewer" sandbox="allow-scripts"/>
        </div>
    )
}