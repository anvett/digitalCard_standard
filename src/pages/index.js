import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import styles from "../styles/testPage.module.scss";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";
import Services from "@/components/Servicios/Services";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function testpage() {
  const service = [
    {
      service: "Diagnóstico y Reparación de Laptops",
      description:
        " Diagnóstico y reparación de laptops, computadoras de escritorio y dispositivos electrónicos.  Reparación de componentes electrónicos. ",
      imageUrl: "/images/servicio2.png",
    },
    {
      service: "Mantenimiento Preventivo y Correctivo de Laptops",
      description:
        "Mantenimiento preventivo y correctivo de laptops, computadoras de escritorio y dispositivos electrónicos. Atención a hogares y empresas ",
      imageUrl: "/images/servicio4.png",
    },

    {
      service: "Reparación Electrónica de Computadoras",
      description:
        "Reparación de componentes electrónicos de computadoras, laptops y dispositivos electrónicos. Reballing de chips gráficos y procesadores. ",
      imageUrl: "/images/servicio3.png",
    },
    {
      service: "Mantenimiento y Reparación de Impresoras",
      description:
        "Mantenimiento y reparación de impresoras, multifuncionales y dispositivos de impresión. Atención a hogares y empresas.",
      imageUrl: "/images/servicio1.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Carlos Cano</title>
        <meta name="description" content="Carlos Cano Digital Card" />
        <link rel="icon" href="/icons/logo.ico" />

        {/* Open Graph */}
        <meta property="og:url" content="https://carloscano.businessdigicards.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business digital card Carlos Cano" />
        <meta property="og:description" content="Tarjeta de presentación digital" />
        <meta
          property="og:image"
          content="https://carloscano.businessdigicards.com/images/shared_image.png"
        />
      </Head>
      <Layout>
        <Container fluid className={styles.mainContainer}>
          <Row className={styles.mainRow}>
            {/* Columna con imagen de perfil, informacón general, redes sociales e imagen informativa */}
            <Col xs={10} className={styles.infoCol}>
              <section id="profile">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <ProfileImage src="/images/logo.jpg" alt="Carlos Cano O." size={250} />
                </motion.div>
              </section>
              <section>
                <PersonalInfo
                  name="CANORD INFORMATIC SOLUTIONS"
                  title="Técnicos en Electrónica de Laptops"
                  description="Especialistas en electrónica de laptops. Ofrecemos servicios expertos en reparación y mantenimiento combinando técnica avanzada con atención personalizada."
                />
              </section>
              <section className={styles.socialMediaSection}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <SocialMediaIcons
                    facebook="https://www.facebook.com/Canordinfsolutions"
                    instagram="https://www.instagram.com/canordinformatic/"
                    //linkedin="https://www.linkedin.com/in/carlos-ivan-veintimilla-tinoco-msc-md-facs-12364973/"
                    tiktok="https://www.tiktok.com/@canordinf"
                    //twitter="https://twitter.com/CarlosIvanVein1"
                  />
                  <div className={styles.whatsappContactSection}>
                  <WhatsAppButton
                    phone="+593985794253"
                    message="Hola, me gustaría saber más sobre tus servicios"
                    stylesButton={styles.whatsappContactButton}
                  />
                </div>
                </motion.div>
              </section>
              <section className={styles.imageSection}>
                <Image
                  src="/images/empresa.jpg"
                  alt="Médico con los brazos cruzados"
                  width={1024}
                  height={768}
                  layout="responsive"
                  className={styles.backgroundImage}
                />
              </section>
            </Col>
            {/* Columna con información de contacto */}
            <Col xs={2} className={styles.infoCol2}>
              <section>
                <ContactIcons
                  phone="+593985794253"
                  email="canordinfsolutions@outlook.com"
                  whatsapp="+593985794253"
                  telegram="+593985794253"
                  location={["Canord informatic Solutions"]}
                />
              </section>
            </Col>
          </Row>

          {/* Componente de educación y certificaciones */}

          {/* <Row>
          <Col className={styles.educationSection}>
            <section id="education">
              <div className={styles.educationTitle}>
                <h2>Educación y Certificaciones</h2>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className={styles.educationInfo}>
                  <EducationAndCertifications
                    items={[
                      {
                        title: "Técnico informático",
                        institution: "Netec",
                        year: "2017",
                        description:
                          "Formado en Soporte Técnico y Electrónica, Carlos Cano posee una sólida base en diagnóstico y reparación de sistemas informáticos y dispositivos electrónicos. Su educación abarca desde fundamentos de hardware y software hasta técnicas avanzadas en electrónica, preparándolo para enfrentar una amplia gama de desafíos técnicos con eficacia y precisión.",
                        logo: "/images/logo.jpg",
                      },
                     
                    ]}
                  />
                </div>
              </motion.div>
            </section>
          </Col>
        </Row> */}

          {/* Componente de experiencia laboral */}

          {/* <Row>
          <Col className={styles.workExperience}>
            <section id="experience">
              <WorkExperience
                experiences={[
                  {
                    company: "Anvetcorp SAS",
                    role: "Technical Support",
                    description:
                      "Durante tres años en Anvetcorp, Carlos Cano se destacó como Técnico en Soporte, donde aplicó sus habilidades en informática y electrónica para resolver eficientemente una variedad de problemas técnicos. Su rol incluyó el mantenimiento de sistemas, soporte al usuario y la reparación de equipos, contribuyendo significativamente a la optimización de las operaciones tecnológicas de la empresa.",
                  },
                  {
                    company: "Canord informatic Solutions",
                    role: "Gerente General",
                    description:
                      "Como propietario, gerente y técnico principal de Canord, Carlos Cano combina su pasión por la tecnología con habilidades empresariales excepcionales. Bajo su liderazgo, Canord se ha establecido como un referente en servicios de soporte técnico y reparación de electrónica, ofreciendo soluciones personalizadas y de alta calidad. Su enfoque integral en la gestión y ejecución técnica garantiza la máxima satisfacción del cliente y la eficiencia operativa.",
                  },
                ]}
              />
            </section>
          </Col>
        </Row> */}

           {/* Componente de servicios y/o especialidades */}

           <Row>
            <Col className={styles.servicesSection}>
              <section id="education">
                <div className={styles.servicesText}>
                  <h2 className={styles.servicesTitle}>Servicios</h2>
                  <span className={styles.servicesInstructions}>
                    Haz clic en el item para ver la información
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.servicesInfo}>
                    <Services services={service} />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de galería de imágenes */}

          <Row>
            <Col className={styles.imageGallery}>
              
                <div className={styles.galleryTitle}>
                  <h2 className={styles.galleryTitulo}>Especialidades</h2>
                  <span className={styles.gallerySlogan}>Especialista en Electrónica y Soporte Técnico</span>
                </div>
              <ImageGallery
                images={[
                  {
                    thumbnail: "/images/mantenimiento.jpg",
                    full: "/images/mantenimiento.jpg",
                    description: "Mantenimiento de laptops",
                    alt: "Mantenimiento de laptops",
                  },
                  {
                    thumbnail: "/images/reparacion_electronica.jpg",
                    full: "/images/reparacion_electronica.jpg",
                    description: "Reparación electrónica",
                    alt: "Reparación electrónica",
                  },
                  {
                    thumbnail: "/images/electronica_1.png",
                    full: "/images/electronica_1.png",
                    description: "Reparación de componentes electrónicos",
                    alt: "Reparación de componentes electrónicos",
                  },
                  {
                    thumbnail: "/images/capacitacion_1.jpg",
                    full: "/images/capacitacion_1.jpg",
                    description: "Capacitación en reparación de laptops",
                    alt: "Capacitación en reparación de laptops",
                  },
                ]}
              />
            </Col>
          </Row>

          {/* Componente de información de pago */}

          <Row>
            <Col className={styles.paymentSection}>
              <section id="payment" className={styles.paymentInfo}>
                <div className={styles.paymentTitle}>
                  <h2 className={styles.paymentTitulo}>Información de Pago</h2>
                  <span className={styles.paymentInstructions}>Haz clic en el logo para acceder a los datos de la cuenta</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.bankInfo}>
                    <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="2204346829"
                      identification="123456789"
                      email="canordinfsolutions@outlook.com"
                      bankLogo="/images/banco_pichincha.jpg"
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de video player */}

          <Row>
            <Col className={styles.videoPlayer}>
              <VideoPlayer videoUrl="/video/reparacion_electronica.mp4" />
            </Col>
          </Row>

          {/* Componente de QR Code */}
          <Row>
            <Col className={styles.qrCode}>
              <section id="qrCode">
                <QRCodeComponent qrCodeImageUrl="/images/qrcode-cc.png" altText="QR Code" />
              </section>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
