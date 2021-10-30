import React from "react";
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <footer className="b-footer">
                <p className="b-footer__text-1">Сделано в рамках учебной программы</p>
                <p className="b-footer__text-2">Карта сайта</p>
                <p className="b-footer__text-3">2021</p>
            </footer>
        )
    }
};

export default Footer;