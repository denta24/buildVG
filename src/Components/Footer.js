import React from "react";
import "./css/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="divider">
          <div className="title">
            <span>Dane kontaktowe</span>
          </div>
          <div className="title">
            <a href="tel:534325980">
              <i className="fas fa-mobile-alt"></i>534 325 980
            </a>
          </div>
          <div className="title">
            <a href="tel:600441542">
              <i className="fas fa-mobile-alt"></i>600 441 542
            </a>
          </div>
          <div className="title">
            <i className="fas fa-envelope"></i>
            <a href="mailto:kacztex@wp.pl">kacztex@wp.pl</a>
          </div>
        </div>
        <div className="divider ">
          <div className="title">
            <span>O nas</span>
          </div>
          <div className="title onas">
            <div className="imgContainer"></div>
            <p>
              Dbamy o stałą, wysoką jakość naszych wyrobów, szybko reagujemy na
              trendy i zmiany pojawiające się w modzie. Nasze kolekcje oparte są
              na własnych projektach, a charakteryzują je elegancja,
              różnorodność i niepowtarzalność fasonów.
            </p>
          </div>
        </div>
        <div className="divider">
          <div className="title">
            <span>Polub nas!</span>
          </div>

          <div
            className="fb-page"
            data-href="https://www.facebook.com/VellutoGiorno"
            data-width="380"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </div>
      </footer>
      <div className="black">
        &#169;Velluto Giorno 2020. Wszystkie prawa zastrzeżone /{" "}
        <a href="/polityka-prywatnosci">Polityka prywatności</a>
      </div>
    </>
  );
}
