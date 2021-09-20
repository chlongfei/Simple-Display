import './manage.css';

import { Container, Row, Col} from 'react-bootstrap';
import FileUploader from '../../components/file/file';
import Preview from '../../components/preview/preview';

export default function Manage(){
    return(
        <div id="manage">
            <header>
                <h2>
                    Simple Display MANAGER
                </h2>
            </header>
            <Container>
                <Row>
                    <Col>
                        <FileUploader/>
                    </Col>
                    <Col>
                        <Preview/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}