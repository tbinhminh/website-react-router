import React, { Component } from 'react';
import './Login.css'
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div id="card">
                    <div id="card-content">
                        <div id="card-title">
                            <h2>Đăng nhập</h2>
                            <div className="underline-title" />
                        </div>
                        <form method="post" className="form">
                            <label htmlFor="user-username" style={{ paddingTop: '15px',fontWeight: 500 }}>
                                &nbsp;Tên tài khoản
                            </label>
                            <input id="user-username" className="form-content" type="text" name="username" autoComplete="on" required />
                            <div className="form-border" />
                            <label htmlFor="user-password" style={{ paddingTop: '22px',fontWeight: 500 }}>&nbsp;Mật khẩu
                            </label>
                            <input id="user-password" className="form-content" type="password" name="password" required />
                            <div className="form-border" />
                            <a href="/">
                                <legend id="forgot-pass">Quên mật khẩu?</legend>
                            </a>
                            <input id="submit-btn" type="submit" name="submit" defaultValue="LOGIN" />
                            <a href="/" id="signin">Don't have account yet?</a>
                        </form>
                    </div>
                </div>
                {/* <Footer/> */}
                </React.Fragment>
        );
    }
}

export default Login;