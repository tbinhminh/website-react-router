import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <header className="only-pc">
                <div className="responsive">
                    <div className="menu">
                        <div className="menu-branch">
                            <div className="menu-branch__logo">
                                <img src="/assets/img/logo-coral.svg" alt="HOME" />
                            </div>
                            <div className="menu-branch__search">
                                <input className="menu-branch__search-input" type="text" placeholder="Tìm kiếm khóa học....." />
                                <div className="menu-branch__search-select ">
                                    <span className="js-searchSelect menu-branch__search-select-txt">Trong shop </span><i className="menu-branch__search-select-icon fas fa-angle-down " />
                                    <div className="menu-branch__search-select-option">
                                        <p className="js-searchOption">IT</p>
                                        <p className="js-searchOption">Business</p>
                                        <p className="js-searchOption">Design</p>
                                    </div>
                                </div>
                                <button className="menu-branch__search-btn" type="submit"><i className="menu-branch__search-btnIcon fas fa-search" /></button>
                            </div>
                        </div>
                        <div className="menu-list">
                            <ul className="menu-list-item">
                                <li className="menu-list-item__link"> <Link to="/">Trang chủ</Link></li>
                                <li className="menu-list-item__link"> <Link to="/carousel">Khóa học</Link></li>
                                <li className="menu-list-item__link menu-list-item__link--hasNotify ">
                                <Link to="/thongbao"><i className="menu-list-item__icon far fa-bell" />Thông báo</Link>
                                    {/* notification */}
                                    <div className="menu-list-item__notify">
                                        <div className="notify-title">
                                            <h3>Thông báo của bạn</h3>
                                        </div>
                                        <ul className="notify-list">
                                            <li className="notify-list-item">
                                                <a href="/a" className="notify-list-item__link">
                                                    <img src="./assets/img/notifi_1.jpg" alt="" className="notify-list-item__img" />
                                                    <div className="notify-info">
                                                        <span className="notify-info__txt">Bạn mua khóa học abc thành công</span>
                                                        <span className="notify-info__seeDetail">Đừng bỏ lỡ đợt sale khủng lên tới 1tr đ</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="notify-list">
                                            <li className="notify-list-item">
                                                <a href="/a" className="notify-list-item__link">
                                                    <img src="./assets/img/notifi_1.jpg" alt="" className="notify-list-item__img" />
                                                    <div className="notify-info">
                                                        <p className="notify-info__txt">Khóa học Reactjs cơ bản đến nâng cao</p>
                                                        <p className="notify-info__seeDetail">Hot! Đừng bỏ lỡ đợt sale khủng lên tới 1tr đ</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="notify-list">
                                            <li className="notify-list-item">
                                                <a href="/a" className="notify-list-item__link">
                                                    <img src="./assets/img/notify_2.jpg" alt="" className="notify-list-item__img" />
                                                    <div className="notify-info">
                                                        <p className="notify-info__txt">Làm chủ python trong vonng 3 thang</p>
                                                        <p className="notify-info__seeDetail">Xem chi tiết</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="notify-list">
                                            <li className="notify-list-item">
                                                <a href="/a" className="notify-list-item__link">
                                                    <img src="./assets/img/notifi_1.jpg" alt="" className="notify-list-item__img" />
                                                    <div className="notify-info">
                                                        <p className="notify-info__txt">Bạn mua khóa học abc thành công</p>
                                                        <p className="notify-info__seeDetail">Xem chi tiết</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="notify-footer">Xem tất cả</div>
                                    </div>
                                </li>
                                <li className="menu-list-item__link menu-list-item__link--hashv">
                                    <a href="/a"><i className="menu-list-item__icon fas fa-download" />Ứng dụng</a>
                                    {/* qr code  */}
                                    <div className="menu-list-item__qr">
                                        <img className="menu-list-item__qr-img" src="./assets/img/qr-header.png" alt="" />
                                        <div className="menu-list-item__qr-app">
                                            <a href="/a"><img className="menu-list-item__qr-app-gg" src="./assets/img/gg-play.png" alt="" /></a>
                                            <a href="/a"><img className="menu-list-item__qr-app-appstore" src="./assets/img/app-store.png" alt="" /></a>
                                        </div>
                                    </div>
                                </li>
                                {/* <li class="menu-list-item__link"><a href="/a"><i class="fas fa-phone"></i>Liên hệ</a></li> */}
                                <li className="menu-list-item__link"><Link to="/login">Đăng nhập</Link></li>
                                {/* <li class="menu-list-item__link--square"></li> */}
                                <li className="menu-list-item__link"><Link to="/register">Đăng kí</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        ); 
    }
}
export default Header;