import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { useRouter } from "next/router";
const Navbar = ({ color }) => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window) {
      
      if (window.scrollY >= 100) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    formEmail: "",
    phone: "",
  });
  const handleFormdataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormDataSubmit = async (e) => {
    e.preventDefault();

    console.log(process.cwd());
    const res2 = await fetch(
      "https://formsubmit.co/ajax/info@mekambio.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    console.log(res2);
    const res = await fetch("/api/googlesheetsFormData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res2.status == 200 && res.status == 200) {
      alert("Form Submitted");
    }
  };
  const { name, formEmail, surname, phone } = formData;

  if (typeof window !== "undefined") {
    // You now have access to `window`
    window.addEventListener("scroll", changeNavbarColor);
  }
  return (
    <div>
      <header
        className={`main-header ${
          colorChange ? "position-fixed bg-white fixed-header" : ""
        }`}
        style={{ animation: "sticky 1s"  }}
      >
        <div className={`header-upper  ${colorChange ? " bg-white" : ""}`}>
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link href="/">
                    <img
                      className="w-50"
                      src="/assets/images/K%20Full%20logo.svg"
                      alt="Logo"
                      title="Logo"
                    />{" "}
                  </Link>
                </div>

                {/* <!-- <select name="select-languages" id="select-languages">
                                            <option value="Spanish">Spanish</option>
                                            <option value="English">English</option>
            
                                        </select> --> */}
              </div>

              <div className="nav-outer clearfix">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo br-10 p-15">
                      <Link href="">
                        <img
                          className="w-100"
                          src="/assets/images/K Full logo.svg"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>

                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                      onClick={(e) => setHamburger(!hamburger)}
                    >
                      <span
                        className={`icon-bar ${
                          colorChange
                            ? "bg-dark"
                            : router.pathname !== "/"
                            ? "bg-white"
                            : "bg-dark"
                        }`}
                      ></span>
                      <span
                        className={`icon-bar ${
                          colorChange
                            ? "bg-dark"
                            : router.pathname !== "/"
                            ? "bg-white"
                            : "bg-dark"
                        }`}
                      ></span>
                      <span
                        className={`icon-bar ${
                          colorChange
                            ? "bg-dark"
                            : router.pathname !== "/"
                            ? "bg-white"
                            :"bg-dark"
                        }`}

                        
                      ></span>
                    </button>
                  </div>

                  <div
                    className={`navbar-collapse collapse clearfix ${
                      hamburger ? "show" : ""
                    }`}
                  >
                    <ul
                      className={`navigation clearfix ${
                        colorChange
                          ? "text-dark"
                          : router.pathname !== "/"
                          ? "text-white"
                          : "text-dark"
                      }`}
                    >
                      <li>
                        <Link
                          className="text-decoration-none mobile-text-dark"
                          href="https://experts.mekambio.com/s?q="
                        >
                          Acceso a la Plataforma
                        </Link>
                      </li>
                      <li>
                        <Link
                          className=" text-decoration-none mobile-text-dark"
                          href="how-to-use"
                        >
                          Cómo funciona
                        </Link>
                      </li>
                      <li>
                        <Link className=" text-decoration-none mobile-text-dark" href="/blogs">
                          Blog
                        </Link>
                      </li>

                      <li>
                        <Link className=" text-decoration-none mobile-text-dark" href="services">
                          Servicios
                        </Link>
                      </li>
                      <li>
                        <Link className=" text-decoration-none mobile-text-dark" href="/about-us">
                          Quiénes somos
                        </Link>
                      </li>
                      <li></li>
                    </ul>

                    <div className="menu-sidebar">
                      <button onClick={(e) => setShowSidebar(true)}>
                        <span
                          className={`icon-bar ${
                            colorChange
                              ? "bg-dark"
                              : router.pathname !== "/"
                              ? "bg-white"
                              : "bg-dark"
                          }`}
                        ></span>
                        <span
                          className={`icon-bar ${
                            colorChange
                              ? "bg-dark"
                              : router.pathname !== "/"
                              ? "bg-white"
                              : "bg-dark"
                          }`}
                        ></span>
                        <span
                          className={`icon-bar ${
                            colorChange
                              ? "bg-dark"
                              : router.pathname !== "/"
                              ? "bg-white"
                              : "bg-dark"
                          }`}
                        ></span>
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {
        <div className={showSidebar ? `side-content-visible` : ""}>
          <section className="hidden-bar">
            <div className="inner-box text-center">
              <div
                onClick={(e) => setShowSidebar(false)}
                className="cross-icon"
              >
                <span className="fa fa-times"></span>
              </div>
              <div className="title">
                <h4>Solicita Información </h4>
              </div>

              <div className="appointment-form">
                <form method="post" onSubmit={(e) => handleFormDataSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Nombre"
                      required=""
                      onChange={(e) => handleFormdataChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="surname"
                      value={surname}
                      placeholder="Apellidos"
                      required=""
                      onChange={(e) => handleFormdataChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="formEmail"
                      value={formEmail}
                      placeholder="Email"
                      required=""
                      onChange={(e) => handleFormdataChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="phone"
                      value={phone}
                      placeholder="teléfono"
                      required=""
                      onChange={(e) => handleFormdataChange(e)}
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="theme-btn">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>

              <div className="social-style-one">
                <Link href="https://www.linkedin.com/company/meKambio/?viewAsMember=true">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="https://www.instagram.com/meKambio_">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="https://www.facebook.com/meKambio">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="https://www.youtube.com/channel/UCIBlyqcrLRLlkb0_JpDqNaQ?app=desktop&amp;cbrd=1">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
      }
    </div>
  );
};

export default Navbar;
