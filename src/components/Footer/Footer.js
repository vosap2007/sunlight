import React, { Component } from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";

export default class FooterPage extends Component {
  render() {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 fixed-bottom">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Made by: <a href="https://www.linkedin.com/in/%D0%B2%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D1%83%D0%B4%D0%BE%D0%B2%D0%B8%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-1491721b6/"> Volodymyr Udovychenko </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
  }
}