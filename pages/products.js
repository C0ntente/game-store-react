import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import ProductsFilter from '../components/ProductsFilter';

export default function Products(props) {
  const [products, setProducts] = useState(props.products);
  async function handleSort(value) {
    const url = `http://localhost:8080/products${
      value === '0' ? '' : `?orderBy=${value}`
    }`;
    const res = await fetch(url);
    setProducts(await res.json());
  }
  return (
    <Container className="p-3">
      <Row className="mb-3">
        <ProductsFilter onSort={handleSort}></ProductsFilter>
      </Row>
      <Row>
        {products.map((product) => {
          return (
            <Col md="4" lg="3" className="pb-3" fluid="sm" key={product.id}>
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
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
