import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col, NavItem } from "react-bootstrap";
import { useSearchParams } from "react-router";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    // let url = `http://localhost:5000/products/?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/hong-free/shopping-mall/products?q=${searchQuery}`;

    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProduct();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} sm={12}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
