import React from 'react'
//rfce
function HeaderUser() {
  return (
    <>
   


    <div id="sticky-header" className="main-header menu-area transparent-header">
        <div className="container-fluid container-full">
            <div className="row">
                <div className="col-12">
                    <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                    <div className="menu-wrap">
                        <div className="header-bg" 
                            style={{ 
        backgroundImage: `url("./src/assets/img/bg/header_bg.jpg")` 
      }}
                        ></div>
                        <nav className="menu-nav show">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="./src/assets/img/logo/logo.png" alt="Logo" />
                                </a>
                            </div>
                            <div className="navbar-wrap main-menu d-none d-lg-flex">
                                <ul className="navigation">
                                    <li className="active dropdown"><a href="/">หน้าเเรก</a>
                                        <ul className="submenu">
                                            <li className="active"><a href="/">หน้า หนึ่ง</a></li>
                                            <li><a href="/">หน้าที่ สอง</a></li>
                                            <li><a href="/">หน้าที่ สาม</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">เกี่ยวกับเรา</a></li>
                                   
                                    <li className="dropdown"><a href="product">สินค้า</a>
                                        <ul className="submenu">
                                            <li><a href="/detail">รายละเอียด</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">ติดต่อ</a></li>
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
                                                        <img src="./src/assets/img/product/cart_p01.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="cart-content">
                                                    <h4>
                                                        <a href="#">ทดสอบ</a>
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
                                                        <img src="./src/assets/img/product/cart_p02.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="cart-content">
                                                    <h4>
                                                        <a href="#">ทดสอบ</a>
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
                                                    <span className="f-left">ราคารวม:</span>
                                                    <span className="f-right">$239.9</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="checkout-link">
                                                    <a href="/cart">ตะกร้าสินค้า</a>
                                                    <a className="red-color" href="#">สั่งซื้อสินค้า</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="header-bottom-wrap d-none d-lg-flex">
                        <div className="header-tag-list">
                            <ul>
                                <li><a href="/login">เข้าสู้ระบบ</a></li>
                                <li><a href="#">บัญชี</a></li>
                                <li><a href="#">รายการสั่งซื้อ</a></li>
                            </ul>
                        </div>
                        <div className="header-bottom-search">
                            <form action="#">
                                <input type="text" />
                                <button><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="mobile-menu">
                        <div className="menu-backdrop"></div>
                        <div className="close-btn"><i className="fas fa-times"></i></div>

                        <nav className="menu-box">
                            <div className="nav-logo"><a href="index.html"><img src="./src/assets/img/logo/w_logo.png" alt="" title="" /></a>
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


  )
}

export default HeaderUser