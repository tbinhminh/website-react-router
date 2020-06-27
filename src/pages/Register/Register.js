import React, { Component } from 'react';
import Header from '../Header/Header';
import './Register.css'
import Footer from '../Footer/Footer';
class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div id="card-register">
                    <div id="card-register-content">
                        <div id="card-register-title">
                            <h2>Đăng kí</h2>
                            <div className="underline-title" />
                        </div>
                        <form method="post" className="form">
                            {/* username */}
                            <label htmlFor="user-username" style={{ paddingTop: '15px',fontWeight: 500 }}>
                                &nbsp;Tên đăng nhập
                            </label>
                            <input id="user-username" className="form-content" type="text" name="username" autoComplete="on" required />
                            {/* email */}
                            <div className="form-border" />
                            <label htmlFor="user-email" style={{ paddingTop: '22px',fontWeight: 500 }}>&nbsp;Email
                            </label>
                            <input id="user-email" className="form-content" type="email" name="email" required />
                            {/* phone */}
                            <div className="form-border" />
                            <label htmlFor="user-phone" style={{ paddingTop: '22px',fontWeight: 500 }}>&nbsp;Số điện thoại
                            </label>
                            <input id="user-phone" className="form-content" type="text" name="phone" required />
                            {/* password */}
                            <div className="form-border" />
                            <label htmlFor="user-password" style={{ paddingTop: '22px',fontWeight: 500 }}>&nbsp;Mật khẩu
                            </label>
                            <input id="user-password" className="form-content" type="password" name="password" required />
                            <div className="form-border" />
                            <a href="/">
                                <legend id="forgot-pass">Quên mật khẩu?</legend>
                            </a>
                            <input id="submit-btn" type="submit" name="submit" defaultValue="LOGIN" />
                            <a href="/" id="signup">Don't have account yet?</a>
                        </form>
                    </div>
                </div>
                {/* <Footer/> */}
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Register;