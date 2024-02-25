import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ContactIcons.module.scss";

const ContactIcon = ({ href, src, alt }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.contactIcon}
    >
      <Image src={src} alt={alt} width={50} height={50} />
    </a>
  );
};

const ContactIcons = ({ title, phone, email, whatsapp, telegram, location }) => {
  return (
    <Container fluid className={styles.contactIconsContainer}>
      <Row className={styles.contactIconsRow}>
        <Col>
          <div>
            {title && <h3 className={styles.contactIconsTitle}>{title}</h3>}
          </div>
        </Col>
      </Row>
      <Row className={styles.contactIconsRow}>
        <Col className={styles.contactIconsCol}>
          {phone && (
            <ContactIcon
              href={`tel:${phone}`}
              src="/icons/call_bs.png"
              alt="Phone"
            />
          )}
          {email && (
            <ContactIcon
              href={`mailto:${email}`}
              src="/icons/email_bs.png"
              alt="Email"
            />
          )}
          {whatsapp && (
            <ContactIcon
              href={`https://wa.me/${whatsapp}`}
              src="/icons/whatsapp_bs.png"
              alt="WhatsApp"
              
            />
          )}
          {telegram && (
            <ContactIcon
              href={`https://t.me/${telegram}`}
              src="/icons/telegram_bs.png"
              alt="Telegram"
            />
          )}
          {location && (
            <ContactIcon
              href={`https://maps.google.com/?q=${location}`}
              src="/icons/location_bs.png"
              alt="Location"
            />
          )}
          
        </Col>
      </Row>
    </Container>
  );
};

export default ContactIcons;
