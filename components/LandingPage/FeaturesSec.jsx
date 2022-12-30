import React from "react";
import Image from "next/image";
import Link from "next/link";
const FeaturesSec = () => {
  return (
    <div>
      <section className="features-section rel z-1 pt-80 pb-40 bg-blue text-dark">
        <div className="container">
          <div className="row large-gap mb-30 text-white">
            <div className="col-lg-6 text-white">
              <div
                className="freature-six-left wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="section-title mb-30">
                  <h2>¿Necesitas un cambio profesional?</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="freature-six-right pt-55 rpt-0 wow fadeInUp delay-0-4s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <p>
                Si vives momentos de inquietud e incertidumbre, si tienes ganas de prosperar a nivel profesional, si no sabes por dónde empezar, te ofrecemos el apoyo necesario para que evoluciones y generes el cambio que tu carrera necesita.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature-six-item mt-30 wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="content">
                  <div className="icon">
                    <img
                      loading="lazy"
                     
                      src="/assets/images/categories/category icon_Career Progression.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>Trabaja en lo que te apasiona</h5>
                  <p>¿Tienes siempre la misma rutina o problemas en tu trabajo?</p>
                </div>
                <Link href="categories#pro" className="read-more color-two">
                  Ver más
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature-six-item wow fadeInUp delay-0-8s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="content">
                  <div className="icon">
                    <img
                      loading="lazy"
                     
                      src="assets\images\categories\category icon_Starting Out in Your Career.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>Accede al mercado labora</h5>
                  <p>¿Quieres volver al trabajo de forma competitiva?</p>
                </div>
                <Link href="categories#reg" className="read-more color-two">
                  Ver más
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>  
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature-six-item mt-30 wow fadeInUp delay-0-6s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="content">
                  <div className="icon">
                    <img
                      loading="lazy"
                     
                      src="assets\images\categories\category icon_International Career Boost.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>Mejora en lo que haces</h5>
                  <p>¿Tienes ganas de prosperar profesionalmente?</p>
                </div>
                <Link href="categories#pro" className="read-more color-two">
                  Ver más
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature-six-item wow fadeInUp delay-0-4s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="content">
                  <div className="icon">
                    <img
                      loading="lazy"
                     
                      src="assets\images\categories\category icon_Make a Career Change.png"
                      alt="Icon"
                     
                    />
                  </div>
                  <h5>Provoca el cambio</h5>
                  <p>¿Quieres cambiar de trabajo o carrera profesional? </p>
                </div>
                <Link href="categories#cam" className="read-more color-two">
                  Ver más
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          className="rectangle-dots"
          src="/assets/images/shapes/03.png"
          alt="Shape"
        />
        <img
          loading="lazy"
          className="circle-dots"
          src="/assets/images/shapes/01.png"
          alt="Shape"
        />
      </section>
    </div>
  );
};

export default FeaturesSec;
