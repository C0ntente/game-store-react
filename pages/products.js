import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';

export default function Products({ products }) {
  return (
    <Container className="p-3">
      <Row>
        {products.map((product) => {
          return (
            <Col md="4" lg="3" className="pb-3" fluid="sm" key={product.id}>
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
      <main className={styles.main}>
        <h1 className={styles.title}>Products</h1>
      </main>
    </Container>
  );
}
export async function getStaticProps() {
  const res = await fetch('http://localhost:8080/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
