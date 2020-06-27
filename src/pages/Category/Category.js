import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="responsive only-pc">
            <div className="topcategories">
                <div className="topcategories-headline ">
                    <div className="headline__tittle-text">
                        Top danh mục
                      </div>
                </div>
                <div className="topcategories-wraper">
                    <div className="topcategories-wraper-item">
                        <div className="topcategories-card">
                            <div className="topcategories-card--image">
                                <img src="./assets/img/course/category-design.jpg" alt="" />
                            </div>
                            <div className="topcategories-card--info">
                                <span>Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="topcategories-wraper-item">
                        <div className="topcategories-card">
                            <div className="topcategories-card--image">
                                <img src="./assets/img/course/category-development.jpg" alt="" />
                            </div>
                            <div className="topcategories-card--info">
                                <span>Development</span>
                            </div>
                        </div>
                    </div>
                    <div className="topcategories-wraper-item">
                        <div className="topcategories-card">
                            <div className="topcategories-card--image">
                                <img src="./assets/img/course/category-marketing.jpg" alt="" />
                            </div>
                            <div className="topcategories-card--info">
                                <span>Marketing</span>
                            </div>
                        </div>
                    </div>
                    <div className="topcategories-wraper-item">
                        <div className="topcategories-card">
                            <div className="topcategories-card--image">
                                <img src="./assets/img/course/category-it-and-software.jpg" alt="" />
                            </div>
                            <div className="topcategories-card--info">
                                <span> IT and Software</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topcategories-wraper">
                    <div className="topcategories-wraper-item">
                        <div className="topcategories-card">
                            <div className="topcategories-card">
                                <div className="topcategories-card--image">
                                    <img src="./assets/img/course/category-personal-development.jpg" alt="" />
                                </div>
                                <div className="topcategories-card--info">
                                    <span>Personal Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topcategories-wraper-item">
                        <div className="topcategories-card">
                            <div className="topcategories-card--image">
                                <img src="./assets/img/course/category-business.jpg" alt="" />
                            </div>
                            <div className="topcategories-card--info">
                                <span>Business</span>
                            </div>
                        </div>
                    </div>
                    <div className="topcategories-wraper-item">
                        <div className="topcategories-card">
                            <div className="topcategories-card--image">
                                <img src="./assets/img/course/category-photography.jpg" alt="" />
                            </div>
                            <div className="topcategories-card--info">
                                <span>Photography</span>
                            </div>
                        </div>
                    </div>
                    <div className="topcategories-wraper-item">
                        <div className="topcategories-card">
                            <div className="topcategories-card--image">
                                <img src="./assets/img/course/category-music.jpg" alt="" />
                            </div>
                            <div className="topcategories-card--info">
                                <span>Music</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="responsive">
            <div className="study">
                <div className="study-headline">
                    <p>Lợi ích khi học tập tại Blackpink</p>
                </div>
                <div className="study-wraper">
                    <div className="study-wraper-col">
                        <div className="study-item">
                            <div className="study-item--image">
                                <img src="./assets/img/wifi-icon.png" alt="" />
                            </div>
                            <div className="study-item--content">
                                <p className="study-item--content-tittle">Học online mọi lúc mọi nơi</p>
                                <p className="study-item--content-text">Chỉ cần có kết nối internet và các thiết bị truy cập mạng, bạn có thể học mọi lúc, mọi nơi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="study-wraper-col">
                        <div className="study-item">
                            <div className="study-item--image">
                                <img src="./assets/img/Internet-icon.png" alt="" />
                            </div>
                            <div className="study-item--content">
                                <p className="study-item--content-tittle">Học mãi mãi</p>
                                <p className="study-item--content-text">Bạn chỉ cần mua 1 lần và học mãi mãi. Bạn có thể học đi học lại nhiều lần, tuỳ vào mong muốn và thời gian của bạn.</p>
                            </div>
                        </div>
                    </div>
                    <div className="study-wraper-col">
                        <div className="study-item">
                            <div className="study-item--image">
                                <img src="./assets/img/price.png" alt="" />
                            </div>
                            <div className="study-item--content">
                                <p className="study-item--content-tittle">Chi phí học tập thấp</p>
                                <p className="study-item--content-text">Chỉ từ 280,000Đ cho một khóa học chất lượng. Đăng ký ngay bạn sẽ nhận được nhiều hơn những gì bạn bỏ ra.</p>
                            </div>
                        </div>
                    </div>
                    <div className="study-wraper-col">
                        <div className="study-item">
                            <div className="study-item--image">
                                <img src="./assets/img/protect.png" alt="" />
                            </div>
                            <div className="study-item--content">
                                <p className="study-item--content-tittle">Bảo hành trọn đời</p>
                                <p className="study-item--content-text">Cam kết bảo hành khóa học trọn đời, học viên nếu không hài lòng sẽ được hoàn lại học phí.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }
}

export default Category;