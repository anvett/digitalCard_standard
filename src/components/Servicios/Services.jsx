import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

import Image from "next/image";
import styles from "./services.module.scss";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const Services = ({ services }) => {
  const [show, setShow] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);

  const handleShow = (exp) => {
    setSelectedExp(exp);
    setShow(true);
  };

  return (
    <Container className={styles.container}>
      {services.map((exp, index) => (
        <Row key={index} className={styles.serviceItem} onClick={() => handleShow(exp)}>
          <Col>
            <h3 className={styles.serviceName}>{exp.service}</h3>
          </Col>
        </Row>
      ))}

      {/* Modal para mostrar detalles */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header className={styles.modalHeader} closeButton>
          <div className={styles.serviceImageContainer}>
            <Image
              src={selectedExp?.imageUrl}
              alt="Service Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Modal.Title>{selectedExp?.service}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.whatsappModalBody}>
          {selectedExp?.description}
          <WhatsAppButton
            phone="+593986850295"
            message="Hola, me gustaría saber más sobre tus servicios"
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Services;
