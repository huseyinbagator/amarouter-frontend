import React from "react";

import { Row, Col, Button, Form } from "react-bootstrap";

import Logo from "../Logo";
import Header from "../header/Header";

function Section1() {
  return (
    <div className="App-section mb-5">
      <div className="container-fluid">
        <Row className="mb-5">
          <Header />
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={4}>
            <Row>
              <Logo />
            </Row>
            <br></br>
            <Form id="formLogin">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="E-posta veya Kullanıcı Adı"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Şifre" />
              </Form.Group>
              <Button
                variant="primary"
                className="ama-bg-primary mb-3"
                type="submit"
                id="btnGirisYap"
              >
                Giriş Yap
              </Button>
              <a id="aForgotPassword" href="#">Şifreni mi Unuttun?</a>
            </Form>
            <br></br>
            <Row className="justify-content-md-center">
              <Button variant="secondary" id="btnHesapOlustur">Yeni Hesap Oluştur</Button>
            </Row>
          </Col>
          <Col sm={7}></Col>
        </Row>
      </div>
    </div>
  );
}

export default Section1;
