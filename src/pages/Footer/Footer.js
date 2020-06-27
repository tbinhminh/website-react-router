import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="sd">
                    <div className="responsive footer">
                        <div className="footer-wraper-col">
                            <div className="footer-aboutUs">
                                <p className="footer-aboutUs__tittle">About us</p>
                                <p className="footer-aboutUs__content">
                                    We are a young company always looking for new and creative ideas to help you with our products in your everyday work.
                                </p>
                                <p className="footer-aboutUs__link"><a href="/">Out Team</a></p>
                            </div>
                        </div>
                        <div className="footer-wraper-col">
                            <div className="footer-contact">
                                <p className="footer-contact__tittle">Contact</p>
                                <p className="footer-contact__content">
                                    <i className="fas fa-map-marker-alt footer-contact__content--icon" />
                                    <a href="/">Chung cư 282 Lĩnh nam, HN</a>
                                </p>
                                <p className="footer-contact__content">
                                    <i className="fas fa-phone footer-contact__content--icon" />
                                    <a href="/">+84 345915454</a>
                                </p>
                                <p className="footer-contact__content">
                                    <i className="fas fa-envelope footer-contact__content--icon" />
                                    <a href="/">tbinhminh1109@gmail.com</a>
                                </p>
                                <p className="footer-contact__content">
                                    <i className="fas fa-arrow-down footer-contact__content--icon" />
                                    <a href="/">Tải xuống ứng dụng</a>
                                </p>
                            </div>
                        </div>
                        <div className="footer-wraper-col">
                            <div className="footer-follow">
                                <p className="footer-follow__tittle">Follow me</p>
                                <div className="footer-follow_socialMedia">
                                    <p className="footer-follow__content">
                                        <i className="fab fa-facebook footer-follow__content--icon" />
                                        <a href="/">Facebook</a>
                                    </p>
                                    <p className="footer-follow__content">
                                        <i className="fab fa-twitter footer-follow__content--icon" />
                                        <a href="/">twitter</a>
                                    </p>
                                    <p className="footer-follow__content">
                                        <i className="fab fa-skype footer-follow__content--icon" />
                                        <a href="/">skype</a>
                                    </p>
                                    <p className="footer-follow__content">
                                        <i className="fab fa-slack footer-follow__content--icon" />
                                        <a href="/">slack</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="footer-bottom">
                    <p className="footer-bottom__content">Bản quyền © 2020 Udemy. Đã đăng kí bản quyền</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
