import { Container, Col, Row } from "react-bootstrap"
import Sidebar from "./components/Sidebar"



const App = () => {

  return (
    <Container fluid>
      <Row>
        <Col md={11} className="mt-5">
          <h1 className="text-center fs-6">خانه</h1>
        </Col>
        <Col className="bg-primary vh-100" md={1}>
          <Sidebar />
        </Col>

      </Row>
    </Container>
  )
}

export default App
