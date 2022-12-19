import { Container, Col, Row } from "react-bootstrap"
import Sidebar from "../components/Sidebar"
import ReceiptForm from "../components/ReceiptForm"

const Receipt = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={11} className="mt-5">
                    <ReceiptForm />
                </Col>
                <Col className="bg-primary vh-100" md={1}>
                    <Sidebar />
                </Col>

            </Row>
        </Container>
    )
}

export default Receipt