import './manage.css';

import { Container, Row, Col, Button} from 'react-bootstrap';
import FileUploader from '../../components/file/file';
import Preview from '../../components/preview/preview';

export default function Manage(){
    return(
        <div id="manage">
            <header>
                <Row>
                    <Col sm={1}>
                        <Button variant="secondary" onClick={()=>{window.location.assign("/")}}>{"< "}Back</Button>
                    </Col>
                    <Col>
                        <h2>
                            Simple Display MANAGER
                        </h2>
                    </Col>
                </Row>
            </header>
            <Container>
                <Row>
                    <Col>
                        <FileUploader/>
                    </Col>
                    <Col>
                        <Preview/>
                        <sub>If display does not show content, re-upload file</sub>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}