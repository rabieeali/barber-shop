import { Link } from "react-router-dom"
import { Container, Col } from "react-bootstrap"

const Sidebar = () => {
    return (
        <Container className="bg-primary text-white">
            <div className="d-flex flex-column justfy-content-center align-items-center gap-3 mt-5">
                <Col>
                    <Link to="/" className="text-white text-decoration-none">خانه</Link>
                </Col>
                <Col>
                    <Link to="/history" className="text-white text-decoration-none">سوابق</Link>
                </Col>
                <Col>
                    <Link to="/receipt" className="text-white text-decoration-none">رسید جدید</Link>
                </Col>
                <Col>
                    <Link to="/" className="text-white text-decoration-none">خروج</Link>
                </Col>
            </div>
        </Container>
    )
}

export default Sidebar