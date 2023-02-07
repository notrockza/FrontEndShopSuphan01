import React from 'react'
import FooterUser from './FooterUser'
import HeaderUser from './HeaderUser'
import SliderUser from '../Silder/SliderUser'

function AboutUser() {
    return (
        <>
           

            <>
            <HeaderUser/>
                <SliderUser/>
                {/* <!-- slider-area-end --> */}

                {/* <!-- features-area --> */}
               
                {/* <!-- features-area-end --> */}

                {/* <!-- faq-area --> */}
                <section className="faq-area faq-bg pt-120 pb-120" data-background="./src/assets/img/bg/faq_bg.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="faq-image">
                                    <img src="https://adaymagazine.com/wp-content/uploads/2019/07/Salee-Wonderland-1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-wrap">
                                    <div className="section-title mb-50">
                                        <h6 className="sub-title">คำถามที่พบบ่อย</h6>
                                        <h2 className="title"><span>ของฝาก</span> สุพรรณบุรี</h2>
                                    </div>
                                    <div id="accordion">
                                        <h3>ของฝากสุพรรณบุรี ประเภทขนม</h3>
                                        <div className="accordion-content">
                                            <p>ขนมเปี๊ยะนมข้น ไส้เผือกผสมแห้ว ตราเอกชัย ของฝากสุพรรณบุรี
                                            </p>
                                        </div>
                                        <h3>ของฝากสุพรรณบุรี ประเภทอาหารทะเลแปรรูป</h3>
                                        <div className="accordion-content">
                                            <p>ปลาสลิดทอดกรอบ รสดั้งเดิม ตรามิสเตอร์แชมป์</p>
                                        </div>
                                        <h3>ของฝากสุพรรณบุรี ประเภทเครื่องปรุงในครัว</h3>
                                        <div className="accordion-content">
                                            <p>ซีอิ๊วดำเค็ม ตรากวางดาวทอง ของดีเมืองสุพรรณ</p>
                                        </div>
                                        <h3>ของฝากสุพรรณบุรี ประเภทน้ำพริก</h3>
                                        <div className="accordion-content">
                                            <p>น้ำพริกนรกปลาย่าง จากตลาดสามชุก ตราแม่พรทิพย์</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- faq-area-end --> */}

                {/* <!-- video-area --> */}
                <section className="video-area video-bg pt-130" 
                style={{ 
                    backgroundImage: `url("https://adaymagazine.com/wp-content/uploads/2019/07/Type-B_Featured-salee-wonderland-scaled.jpg")` 
                  }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="video-wrap">
                                    <div className="video-play">
                                        <a href="https://www.youtube.com/watch?v=ugNlpcxRGDU" className="popup-video"><i className="fas fa-play"></i></a>
                                    </div>
                                    <div className="section-title white-title text-center mb-70">
                                        {/* <h6 className="sub-title">HELLO AND WELCOME Farm</h6> */}
                                        <h2 className="title"><span>รีวิว</span> ของฝากสุพรรณบุรี</h2>
                                    </div>
                                </div>
                                <div className="newsletter-wrap">
                                    <div className="section-title newsletter-title">
                                        <h2 className="title">สมัครรับ <span>ข่าวสาร</span></h2>
                                    </div>
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <input type="email" placeholder="ป้อนที่อยู่อีเมลของคุณที่นี่" />
                                            <button className="btn gradient-btn">สมัคร <i className="fas fa-rocket"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video-bottom-shape" data-background="./src/assets/img/bg/video_bottom_shape.png"></div>
                </section>
                {/* <!-- video-area-end --> */}

                {/* <!-- project-area --> */}
                {/* <section className="project-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-70">
                                    <h6 className="sub-title">your dream gallery</h6>
                                    <h2 className="title"><span>Our Recent</span> Projects Farm</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid container-full">
                        <div className="row project-active">
                            <div className="col-xl-3">
                                <div className="project-item mb-30">
                                    <div className="project-thumb">
                                        <img src="./src/assets/img/images/project_thumb01.jpg" alt="" />
                                    </div>
                                    <div className="project-overlay-content">
                                        <div className="project-tag">
                                            <a href="#">vegetable</a>
                                        </div>
                                        <div className="project-content">
                                            <h4><a href="#">Rice Field</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="project-item mb-30">
                                    <div className="project-thumb">
                                        <img src="./src/assets/img/images/project_thumb02.jpg" alt="" />
                                    </div>
                                    <div className="project-overlay-content">
                                        <div className="project-tag">
                                            <a href="#">vegetable</a>
                                        </div>
                                        <div className="project-content">
                                            <h4><a href="#">Chicken Field</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="project-item mb-30">
                                    <div className="project-thumb">
                                        <img src="./src/assets/img/images/project_thumb03.jpg" alt="" />
                                    </div>
                                    <div className="project-overlay-content">
                                        <div className="project-tag">
                                            <a href="#">vegetable</a>
                                        </div>
                                        <div className="project-content">
                                            <h4><a href="#">Rice Field</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="project-item mb-30">
                                    <div className="project-thumb">
                                        <img src="./src/assets/img/images/project_thumb04.jpg" alt="" />
                                    </div>
                                    <div className="project-overlay-content">
                                        <div className="project-tag">
                                            <a href="#">vegetable</a>
                                        </div>
                                        <div className="project-content">
                                            <h4><a href="#">Rice Field</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="project-item mb-30">
                                    <div className="project-thumb">
                                        <img src="./src/assets/img/images/project_thumb03.jpg" alt="" />
                                    </div>
                                    <div className="project-overlay-content">
                                        <div className="project-tag">
                                            <a href="#">vegetable</a>
                                        </div>
                                        <div className="project-content">
                                            <h4><a href="#">Rice Field</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <!-- project-area-end --> */}

                {/* <!-- farming-area --> */}
                {/* <section className="farming-area farming-bg pt-120 pb-140" data-background="./src/assets/img/bg/farming_bg.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center">
                                    <h6 className="sub-title">your dream gallery</h6>
                                    <h2 className="title"><span>Benefits of</span> Organic Farming</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="organic-farm-item">
                                    <div className="org-frm-icon">
                                        <i className="flaticon-cauliflower"></i>
                                        <img src="./src/assets/img/images/organic_item_shape01.png" alt="" className="org-frm-icon-shape" />
                                    </div>
                                    <div className="org-frm-content">
                                        <h4><a href="#">Organic Agriculture</a></h4>
                                        <p>Agricultural mean crops livestock and livestock products Agriculture was key development.</p>
                                        <a href="#" className="btn green-btn">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="organic-farm-item">
                                    <div className="org-frm-icon">
                                        <i className="flaticon-cow-head"></i>
                                        <img src="./src/assets/img/images/organic_item_shape02.png" alt="" className="org-frm-icon-shape" />
                                    </div>
                                    <div className="org-frm-content">
                                        <h4><a href="#">More Dairy Products</a></h4>
                                        <p>Agricultural mean crops livestock and livestock products Agriculture was key development.</p>
                                        <a href="#" className="btn green-btn">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="organic-farm-item">
                                    <div className="org-frm-icon">
                                        <i className="flaticon-null"></i>
                                        <img src="./src/assets/img/images/organic_item_shape03.png" alt="" className="org-frm-icon-shape" />
                                    </div>
                                    <div className="org-frm-content">
                                        <h4><a href="#">Improved Symbiosis</a></h4>
                                        <p>Agricultural mean crops livestock and livestock products Agriculture was key development.</p>
                                        <a href="#" className="btn green-btn">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="organic-farm-item">
                                    <div className="org-frm-icon">
                                        <i className="flaticon-duck"></i>
                                        <img src="./src/assets/img/images/organic_item_shape04.png" alt="" className="org-frm-icon-shape" />
                                    </div>
                                    <div className="org-frm-content">
                                        <h4><a href="#">Livestock Farming</a></h4>
                                        <p>Agricultural mean crops livestock and livestock products Agriculture was key development.</p>
                                        <a href="#" className="btn green-btn">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <!-- farming-area-end --> */}

                {/* <!-- fact-area --> */}
                <section className="fact-area fact-bg" data-background="./src/assets/img/bg/fact_bg.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="fact-item">
                                    <h2><span className="odometer" data-count="15">00</span>+</h2>
                                    <span>จำนวนรายได้</span>
                                    <div className="fact-icon"><i className="flaticon-pistachio"></i></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="fact-item">
                                    <h2><span className="odometer" data-count="99">00</span>+</h2>
                                    <span>จำนวนสินค้า</span>
                                    <div className="fact-icon"><i className="flaticon-null-1"></i></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="fact-item">
                                    <h2><span className="odometer" data-count="365">00</span>+</h2>
                                    <span>จำนวนสมาชิก</span>
                                    <div className="fact-icon"><i className="flaticon-grain"></i></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="fact-item">
                                    <h2><span className="odometer" data-count="26">00</span>+</h2>
                                    <span>จำนวนการจัดส่ง</span>
                                    <div className="fact-icon"><i className="flaticon-placeholder"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- fact-area-end --> */}

                {/* <!-- blog-area --> */}
                {/* <section className="blog-area blog-bg pt-120 pb-90" data-background="./src/assets/img/bg/blog_bg.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-70">
                                    <h6 className="sub-title">FROM THE BLOG</h6>
                                    <h2 className="title"><span>Latest</span> News & Articles</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-post-item mb-30">
                                    <div className="blog-post-thumb position-relative">
                                        <a href="blog-details.html"><img src="./src/assets/img/blog/blog_post_thumb01.jpg" alt="" /></a>
                                        <a href="#" className="blog-post-tag"><i className="fas fa-tag"></i>Rice Field</a>
                                    </div>
                                    <div className="blog-post-content">
                                        <div className="blog-post-meta">
                                            <ul>
                                                <li><i className="far fa-user"></i><a href="#">Admin</a></li>
                                                <li><i className="far fa-calendar-alt"></i>OCTOBER 23, 2020</li>
                                            </ul>
                                        </div>
                                        <h4><a href="blog-details.html">The Best Milk in the State</a></h4>
                                        <p>Agricultural mean crops livestock and livestock products Agriculture was development.</p>
                                        <a href="#" className="arrow-btn">Read More <span></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-post-item mb-30">
                                    <div className="blog-post-thumb position-relative">
                                        <a href="blog-details.html"><img src="./src/assets/img/blog/blog_post_thumb02.jpg" alt="" /></a>
                                        <a href="#" className="blog-post-tag"><i className="fas fa-tag"></i>Rice Field</a>
                                    </div>
                                    <div className="blog-post-content">
                                        <div className="blog-post-meta">
                                            <ul>
                                                <li><i className="far fa-user"></i><a href="#">Admin</a></li>
                                                <li><i className="far fa-calendar-alt"></i>OCTOBER 23, 2020</li>
                                            </ul>
                                        </div>
                                        <h4><a href="blog-details.html">Poultry Farming Husbandry</a></h4>
                                        <p>Agricultural mean crops livestock and livestock products Agriculture was development.</p>
                                        <a href="#" className="arrow-btn">Read More <span></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-post-item mb-30">
                                    <div className="blog-post-thumb position-relative">
                                        <a href="blog-details.html"><img src="./src/assets/img/blog/blog_post_thumb03.jpg" alt="" /></a>
                                        <a href="#" className="blog-post-tag"><i className="fas fa-tag"></i>Rice Field</a>
                                    </div>
                                    <div className="blog-post-content">
                                        <div className="blog-post-meta">
                                            <ul>
                                                <li><i className="far fa-user"></i><a href="#">Admin</a></li>
                                                <li><i className="far fa-calendar-alt"></i>OCTOBER 23, 2020</li>
                                            </ul>
                                        </div>
                                        <h4><a href="blog-details.html">Cultivating Plants Livestock</a></h4>
                                        <p>Agricultural mean crops livestock and livestock products Agriculture was development..</p>
                                        <a href="#" className="arrow-btn">Read More <span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <FooterUser/>
                {/* <!-- blog-area-end --> */}
            </>
            
        </>
    )
}

export default AboutUser