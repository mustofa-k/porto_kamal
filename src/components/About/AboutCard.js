import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hallo semuanya, Saya <span className="purple">Mustofa Kamal </span>
            Saya dari<span className="purple"> Tangerang ,indonesia </span>
            Saya adalah mahasiswa Universitas Raharja, jurusan Sistem Komputer, dengan fokus di bidang IT dan pemrograman. Di Frontend, saya mahir menggunakan HTML, CSS, Bootstrap, Tailwind, React JS, dan Next JS untuk merancang antarmuka
            responsif, interaktif, dan estetis. Di Backend, saya menguasai Express JS, phpMyAdmin, dan Firebase untuk mengelola logika server, basis data, dan integrasi API. Saya juga memiliki kemampuan dalam bekerja tim, memecahkan
            masalah secara kreatif, dan belajar teknologi baru dengan cepat. Siap untuk memberikan kontribusi terbaik dalam industri teknologi.
          </p>

          {/* <p style={{ color: "rgb(155 126 172)" }}>"Strive to build things that make a difference!" </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
