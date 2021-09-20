import './preview.css';

export default function Preview(){
    return(
        <div id="preview">
            <h5>Preview:</h5>
            <iframe title="preview" src="http://localhost:8000/show" sandbox=""/>
        </div>
    )
}