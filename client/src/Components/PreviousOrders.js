import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";

const PreviousOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/models/Order");
      setOrders(response.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  return (
    <Container>
      <h2>Previous Orders</h2>
      {orders.map((order) => (
        <Card key={order._id} className="mb-4">
          <Card.Body>
            <Card.Title>Date/Time: {order.dateTime}</Card.Title>
            <Card.Text>
              <strong>Items:</strong>{" "}
              {order.items.map((item) => item.name).join(", ")}
            </Card.Text>
            <Card.Text>
              <strong>Total Price:</strong> {order.totalPrice}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default PreviousOrders;
