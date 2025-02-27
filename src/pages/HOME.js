import Image from 'react-bootstrap/Image';

function FluidExample() {
  return <Image src="holder.js/100px250" fluid />;
}

export default FluidExample;
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;