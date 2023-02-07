import React from 'react'

function Testdetail() {
  return (
    <div>
       <>
     <div id="sticky-header" className="main-header menu-area transparent-header">
                <div className="container-fluid container-full">
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                            <div className="menu-wrap">
                                <div className="header-bg" data-background="img/bg/header_bg.jpg"></div>
                                <nav className="menu-nav show">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="img/logo/logo.png" alt="Logo"/>
                                        </a>
                                    </div>
                                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className="dropdown"><a href="index.html">Home</a>
                                                <ul className="submenu">
                                                    <li><a href="index.html">Home One</a></li>
                                                    <li><a href="index-2.html">Home Two</a></li>
                                                    <li><a href="index-3.html">Home Three</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="farming-strategy.html">Farming</a></li>
                                            <li className="active dropdown"><a href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li><a href="pricing.html">Pricing Plan</a></li>
                                                    <li><a href="our-project.html">Our Project</a></li>
                                                    <li className="active"><a href="project-details.html">Project Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">Shop</a>
                                                <ul className="submenu">
                                                    <li><a href="shop.html">Our Shop</a></li>
                                                    <li><a href="shop-details.html">Shop Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Our Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">contacts</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-action d-none d-md-block">
                                        <ul>
                                            <li className="header-shop-cart"><a href="#"><i
                                                        className="fas fa-shopping-basket"></i><span>2</span></a>
                                                <ul className="minicart">
                                                    <li className="d-flex align-items-start">
                                                        <div className="cart-img">
                                                            <a href="#">
                                                                <img src="img/product/cart_p01.jpg" alt=""/>
                                                            </a>
                                                        </div>
                                                        <div className="cart-content">
                                                            <h4>
                                                                <a href="#">Charity Nike Brand Yellow T-Shirt</a>
                                                            </h4>
                                                            <div className="cart-price">
                                                                <span className="new">$229.9</span>
                                                                <span>
                                                                    <del>$229.9</del>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="del-icon">
                                                            <a href="#">
                                                                <i className="far fa-trash-alt"></i>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex align-items-start">
                                                        <div className="cart-img">
                                                            <a href="#">
                                                                <img src="img/product/cart_p02.jpg" alt=""/>
                                                            </a>
                                                        </div>
                                                        <div className="cart-content">
                                                            <h4>
                                                                <a href="#">BackPack For School Student</a>
                                                            </h4>
                                                            <div className="cart-price">
                                                                <span className="new">$229.9</span>
                                                                <span>
                                                                    <del>$229.9</del>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="del-icon">
                                                            <a href="#">
                                                                <i className="far fa-trash-alt"></i>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="total-price">
                                                            <span className="f-left">Total:</span>
                                                            <span className="f-right">$239.9</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="checkout-link">
                                                            <a href="#">Shopping Cart</a>
                                                            <a className="red-color" href="#">Checkout</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="header-btn"><a href="#" className="btn gradient-btn">Start Now</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="header-bottom-wrap d-none d-lg-flex">
                                <div className="header-tag-list">
                                    <ul>
                                        <li><a href="#">hydroponic</a></li>
                                        <li><a href="#">agriculture</a></li>
                                        <li><a href="#">food</a></li>
                                        <li><a href="#">nutrition</a></li>
                                        <li><a href="#">ACCESSORIES</a></li>
                                    </ul>
                                </div>
                                <div className="header-bottom-search">
                                    <form action="#">
                                        <input type="text"/>
                                        <button><i className="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                         
                            <div className="mobile-menu">
                                <div className="menu-backdrop"></div>
                                <div className="close-btn"><i className="fas fa-times"></i></div>

                                <nav className="menu-box">
                                    <div className="nav-logo"><a href="index.html"><img src="img/logo/w_logo.png" alt="" title=""/></a>
                                    </div>
                                    <div className="menu-outer">
                                   
                                    </div>
                                    <div className="social-links">
                                        <ul className="clearfix">
                                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                            <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                            <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                            <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                            <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
    </>

    <>
    <section className="breadcrumb-area breadcrumb-bg" data-background="img/bg/breadcrumb_bg01.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2>project details</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Project Details</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-details-area project-bg pt-120 pb-70" data-background="img/bg/blog_bg02.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="project-details-wrap">
                                <div className="project-details-top mb-35">
                                    <span className="date">SEPTEMBER 22, 2020</span>
                                    <h2 className="title">Farming Has A Banking Problem <span>Crop</span></h2>
                                    <span className="project-price">$29.00</span>
                                </div>
                                <div className="project-details-content">
                                    <p>Express dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem egestlibos dolor auctor
                                    tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, trist ligula pellentue
                                    ipsum Quisque thsr augue ipsum, vehicula tellus maximus. Was popularised in the 1960s withs the release of Letraset
                                    sheets containing Lorem Ipsum passags, and more recently with desktop publishing software.Farming dolor sit amet,
                                    consectetur adipiscing elit. Cras sollicitin, tellus vitae condimem egestlibers dolosr auctor tellus, eu consectetur
                                    neque elit quinunc.</p>
                                    <p>Auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, trist ligula
                                    pellentue ipsum Quisque thsr augue ipsum, vehicula tellus maximus. Was popularised in the 1960s withs the release of
                                    Letraset sheets containing Lorem Ipsum passags, and more recently with desktop publishing software.Farming dolor sit
                                    amet, consectetur adipiscing elit. Cras sollicitin, tellus vitae condimem.</p>
                                    <div className="row mb-20">
                                        <div className="col-md-6">
                                            <div className="project-details-img">
                                                <img src="img/images/project_details_img01.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-details-img">
                                                <img src="img/images/project_details_img02.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, trist ligula
                                    pellentue ipsum Quisque thsr augue ipsum, vehicula tellus maximus. Was popularised in the 1960s withs the release of
                                    Letraset sheets containing Lorem Ipsum passags, and more recently with desktop publishing software.Farming dolor sit
                                    amet, consectetur adipiscing elit. Cras sollicitin, tellus vitae condimem.</p>
                                    <div className="project-details-list mt-40 mb-40">
                                        <h4>Farming Has A Banking</h4>
                                        <ul>
                                            <li><span>Hydroponic :</span> Agriculture, Food, Natural, Resources</li>
                                            <li><span>Accessories :</span> Rarvester, Machine, Resources</li>
                                            <li><span>Technology :</span> Farming, Natural</li>
                                            <li><span>Hydroponic :</span> Food, Natural, Resources</li>
                                        </ul>
                                    </div>
                                    <p>Express dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem egestlibos dolor auctor
                                    tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, trist ligula pellentue
                                    ipsum Quisque thsr augue ipsum, vehicula tellus maximus. Was popularised in the 1960s withs the release of Letraset
                                    sheets containing Lorem Ipsum passags, and more recently with desktop publishing software.Farming dolor sit amet,
                                    consectetur adipiscing elit. Cras sollicitin, tellus vitae condimem egestlibers dolosr auctor tellus, eu consectetur
                                    neque elit quinunc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="related-project-wrap pt-120">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-70">
                                    <h6 className="sub-title">your dream gallery</h6>
                                    <h2 className="title"><span>Our Recent</span> Projects Farm</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row related-project-active">
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="s-project-item mb-50">
                                    <div className="s-project-thumb">
                                        <a href="project-details.html"><img src="img/images/s_project_thumb01.jpg" alt=""/></a>
                                    </div>
                                    <div className="s-project-content">
                                        <div className="project-content-left">
                                            <a href="#"><i className="fas fa-share-alt"></i></a>
                                        </div>
                                        <div className="project-right-content">
                                            <div className="project-item-meta">
                                                <ul>
                                                    <li className="tag"><i className="fas fa-tags"></i><a href="#">Agriculture</a></li>
                                                    <li className="project-price">$29.00</li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="project-details.html">Science and art Cultivating Plants Every</a></h4>
                                            <p>Agriculture was the key development the rise of sedentary human</p>
                                            <div className="project-content-bottom">
                                                <ul>
                                                    <li className="date"><i className="far fa-clock"></i> Mar 10th, 2020</li>
                                                    <li className="link"><a href="#"><i className="fas fa-long-arrow-alt-right"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="s-project-item mb-50">
                                    <div className="s-project-thumb">
                                        <a href="project-details.html"><img src="img/images/s_project_thumb02.jpg" alt=""/></a>
                                    </div>
                                    <div className="s-project-content">
                                        <div className="project-content-left">
                                            <a href="#"><i className="fas fa-share-alt"></i></a>
                                        </div>
                                        <div className="project-right-content">
                                            <div className="project-item-meta">
                                                <ul>
                                                    <li className="tag"><i className="fas fa-tags"></i><a href="#">Food</a></li>
                                                    <li className="project-price">$29.00</li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="project-details.html">Best Hosting Service With Every Feature</a></h4>
                                            <p>Agriculture was the key development the rise of sedentary human</p>
                                            <div className="project-content-bottom">
                                                <ul>
                                                    <li className="date"><i className="far fa-clock"></i> Mar 10th, 2020</li>
                                                    <li className="link"><a href="#"><i className="fas fa-long-arrow-alt-right"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="s-project-item mb-50">
                                    <div className="s-project-thumb">
                                        <a href="project-details.html"><img src="img/images/s_project_thumb03.jpg" alt=""/></a>
                                    </div>
                                    <div className="s-project-content">
                                        <div className="project-content-left">
                                            <a href="#"><i className="fas fa-share-alt"></i></a>
                                        </div>
                                        <div className="project-right-content">
                                            <div className="project-item-meta">
                                                <ul>
                                                    <li className="tag"><i className="fas fa-tags"></i><a href="#">Farming</a></li>
                                                    <li className="project-price">$29.00</li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="project-details.html">Where farming masticated species who</a></h4>
                                            <p>Agriculture was the key development the rise of sedentary human</p>
                                            <div className="project-content-bottom">
                                                <ul>
                                                    <li className="date"><i className="far fa-clock"></i> Mar 10th, 2020</li>
                                                    <li className="link"><a href="#"><i className="fas fa-long-arrow-alt-right"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="s-project-item mb-50">
                                    <div className="s-project-thumb">
                                        <a href="project-details.html"><img src="img/images/s_project_thumb04.jpg" alt=""/></a>
                                    </div>
                                    <div className="s-project-content">
                                        <div className="project-content-left">
                                            <a href="#"><i className="fas fa-share-alt"></i></a>
                                        </div>
                                        <div className="project-right-content">
                                            <div className="project-item-meta">
                                                <ul>
                                                    <li className="tag"><i className="fas fa-tags"></i><a href="#">reseller hub</a></li>
                                                    <li className="project-price">$29.00</li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="project-details.html">Science and art Cultivating Plants Every</a></h4>
                                            <p>Agriculture was the key development the rise of sedentary human</p>
                                            <div className="project-content-bottom">
                                                <ul>
                                                    <li className="date"><i className="far fa-clock"></i> Mar 10th, 2020</li>
                                                    <li className="link"><a href="#"><i className="fas fa-long-arrow-alt-right"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>

    <>
    <div className="footer-top footer-bg fix" data-background="img/bg/footer_bg.jpg">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget mb-50">
                                <div className="footer-logo mb-35">
                                    <a href="index.html"><img src="img/logo/w_logo.png" alt=""/></a>
                                </div>
                                <div className="footer-text">
                                    <p>Agrifram Farming of relse etras sheets connig passag.</p>
                                    <div className="footer-contact">
                                        <ul>
                                            <li><i className="fas fa-map-marker-alt"></i> <span>Address : </span>PO Box W75 Street
                                                lan West new queens</li>
                                            <li><i className="fas fa-headphones"></i> <span>Phone : </span>+24 1245 654 235</li>
                                            <li><i className="fas fa-envelope-open"></i><span>Email : </span>info@exemple.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-50">
                                <div className="fw-title mb-35">
                                    <h5>Products</h5>
                                </div>
                                <div className="fw-link">
                                    <ul>
                                        <li><a href="#">Hydroponic (26)</a></li>
                                        <li><a href="#">Agriculture (11)</a></li>
                                        <li><a href="#">Foods (9)</a></li>
                                        <li><a href="#">Milking (3)</a></li>
                                        <li><a href="#">Nutrition (3)</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-50">
                                <div className="fw-title mb-35">
                                    <h5>Need Help?</h5>
                                </div>
                                <div className="footer-blog-post">
                                    <ul>
                                        <li>
                                            <div className="f-blog-post-thumb">
                                                <a href="#"><img src="img/blog/f_blog_thumb01.jpg" alt=""/></a>
                                            </div>
                                            <div className="f-blog-post-content">
                                                <h5><a href="#">Agriculture is the science and art of cultivating</a></h5>
                                                <span>Tonoy Pueyo</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="f-blog-post-thumb">
                                                <a href="#"><img src="img/blog/f_blog_thumb01.jpg" alt=""/></a>
                                            </div>
                                            <div className="f-blog-post-content">
                                                <h5><a href="#">Whereby farming doated species create</a></h5>
                                                <span>Mark Wiens</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget mb-50">
                                <div className="fw-title mb-35">
                                    <h5>Follow us</h5>
                                </div>
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-widget mb-50">
                                <div className="fw-title mb-30">
                                    <h5>newsletter sign up</h5>
                                </div>
                                <div className="footer-newsletter">
                                    <form action="#">
                                        <input type="text" placeholder="Enter your email"/>
                                        <button><i className="fas fa-rocket"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-shape fb-shape1 running"><img src="img/images/footer_vector01.png" alt=""/></div>
                <div className="footer-bottom-shape fb-shape2"><img src="img/images/footer_vector02.png" alt=""/></div>
                <div className="footer-bottom-shape fb-shape3"><img src="img/images/footer_vector03.png" className="rotateme" alt=""/></div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="copyright-text">
                                <p>Copyright © 2020 <a href="#">Agrifram</a> All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-none d-md-block">
                            <div className="payment-method-list">
                                <ul>
                                    <li><a href="#"><img src="img/icon/visa_2.png" alt=""/></a></li>
                                    <li><a href="#"><img src="img/icon/ae_02.png" alt=""/></a></li>
                                    <li><a href="#"><img src="img/icon/discover.png" alt=""/></a></li>
                                    <li><a href="#"><img src="img/icon/stripe.png" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    </div>
  )
}

export default Testdetail