import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import agent from '../../API/Agent';
import { Product } from '../../Model/Product';
import HeaderUser from '../PageUser/HeaderUser'
import { Carousel } from 'antd';
import { useAppDispatch } from '../../Stone/configureStore';
import { GetProductDetail } from '../../Stone/productSlice';

const contentStyle: React.CSSProperties = {
    // margin: 0,
    height: '500px',
    width: '500px',
    // color: '#FFC0CB',
    // lineHeight: '160px',
    // textAlign: 'center',
    // background: '#364d79',
  };

function Details() {

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };
    // const { id } = useParams<{ id: any }>(); //อ่านค่าจากพารามิเตอร์ที่ส่งมาตามพาท (URL Parameters)
    // const [product, setProduct] = useState<Product | null>(null);
    // const [loading, setLoading] = useState(true);

    const { id } = useParams(); //อ่ํานค่ําจํากพํารํามิเตอร์ที่ส่งมําตํามพําท (URL Parameters)
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    // const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(GetProductDetail(parseInt(id)))
        
    //   }, [id,dispatch]);
    useEffect(() => {
        axios
        .get(`https://localhost:7048/Product/${id}`)
        .then((respons) => setProduct(respons.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
        console.log('pls',product)
        }, [id]);


  return (
    <>
      {/* <!-- breadcrumb-area --> */}
      <HeaderUser/>
            <section className="breadcrumb-area breadcrumb-bg breadcrumb-style2" 
                style={{ 
        backgroundImage: `url("/src/assets/img/new/test06.png")` 
        
      }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2>รายละเอียดสินค้า</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">หน้าเเรก</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">รายละเอียด</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumb-area-end --> */}

            {/* <!-- shop-details-area --> */}
            <section className="shop-details-area shop-bg pb-120" 
            style={{ 
                backgroundImage: `url("./src/assets/img/bg/shop_details_bg.jpg")` 
                
              }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="shop-details-wrap">
                                <div className="row align-items-xl-center">
                                    <div className="col-lg-6">
                                        {/* <div className="shop-details-active">
                                            <div className="shop-details-img">
                                                <img src={'https://localhost:7048/images/'+product?.data.image} alt=""/>
                                            </div>
                                            <div className="shop-details-img">
                                                <img src="img/shop/shop_details_img02.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-img">
                                                <img src="img/shop/shop_details_img03.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-img">
                                                <img src="img/shop/shop_details_img04.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-img">
                                                <img src="img/shop/shop_details_img03.jpg" alt=""/>
                                            </div>
                                        </div> */}
                                      <Carousel afterChange={onChange} autoplay>
                                          <div>
                                              <img style={contentStyle} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0XlXzoSdEg94ZkXQK2q9bihAmxD5wDqSTg&usqp=CAU' />
                                          </div>
                                          <div>
                                              <img style={contentStyle} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0XlXzoSdEg94ZkXQK2q9bihAmxD5wDqSTg&usqp=CAU' />
                                          </div>
                                          <div>
                                              <img style={contentStyle} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0XlXzoSdEg94ZkXQK2q9bihAmxD5wDqSTg&usqp=CAU' />
                                          </div>
                                          <div>
                                              <img style={contentStyle} src={'https://localhost:7048/images/' + product?.data.image} />
                                          </div>
                                      </Carousel>
                                        
                                      {/* <Carousel afterChange={onChange}>
                                          <div>
                                             
                                              <img style={contentStyle} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0XlXzoSdEg94ZkXQK2q9bihAmxD5wDqSTg&usqp=CAU'/>
                                          </div>
                                          <div>
                                          <img style={contentStyle} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0XlXzoSdEg94ZkXQK2q9bihAmxD5wDqSTg&usqp=CAU'/>
                                          </div>
                                          <div>
                                          <img style={contentStyle} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0XlXzoSdEg94ZkXQK2q9bihAmxD5wDqSTg&usqp=CAU'/>
                                          </div>
                                          <div>
                                          <img style={contentStyle} src={'https://localhost:7048/images/'+product?.data.image}/>
                                          </div>
                                      </Carousel> */}
                                        {/* <div className="shop-details-nav">
                                            <div className="shop-details-nav-item">
                                                <img src="img/shop/sd_bottom01.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-nav-item">
                                                <img src="img/shop/sd_bottom02.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-nav-item">
                                                <img src="img/shop/sd_bottom03.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-nav-item">
                                                <img src="img/shop/sd_bottom04.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-nav-item">
                                                <img src="/img/shop/sd_bottom03.jpg" alt=""/>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="shop-details-content">
                                            <h4>{product?.data.name}</h4>
                                            <div className="shop-details-price">
                                                <h4>฿{product?.data.price} บาท</h4>
                                                {/* <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div> */}
                                                {/* <span>- 3 Reviews</span> */}
                                            </div>
                                            <p>{product?.data.detail}</p>
                                            <div className="shop-details-info">
                                                <h5>ประเถทสินเค้า</h5>
                                                <ul>
                                                    
                                                    <li><i className="fas fa-caret-right"></i>เป็นจองจังหวัด</li>
                                                    <li><i className="fas fa-caret-right"></i>อำเถอ</li>
                                                    {/* <li><i className="fas fa-caret-right"></i>Sale 30% Off Use Code: Zhy213</li> */}
                                                </ul>
                                            </div>
                                            {/* <div className="product-weight">
                                                <h4><i className="fas fa-weight-hanging"></i><span>Size Guide :</span></h4>
                                                <ul>
                                                    <li>1kg</li>
                                                    <li className="active">3kg</li>
                                                    <li>5kg</li>
                                                </ul>
                                            </div> */}
                                            <div className="perched-info">
                                                <div className="cart-plus">
                                                    <form action="#">
                                                        <div className="cart-plus-minus">
                                                            <input type="text" value="1"/>
                                                        </div>
                                                    </form>
                                                </div>
                                                <a href="#" className="btn green-btn add-card-btn">เพื่มลงในกระกร้า</a>
                                            </div>
                                            {/* <div className="shop-details-bottom">
                                                <h5><a href="#"><i className="far fa-heart"></i> Add To Wishlist</a></h5>
                                                <ul>
                                                    <li>
                                                        <span>Tag: </span>
                                                        <a href="#">clothing</a>
                                                    </li>
                                                    <li>
                                                        <span>CATEGORIES :</span>
                                                        <a href="#">Avocado,</a>
                                                        <a href="#">Trange,</a>
                                                        <a href="#">apple,</a>
                                                        <a href="#">snack fruit</a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="product-desc-wrap">
                                <ul className="nav nav-tabs mb-50" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="desc-tab" data-toggle="tab" href="#desc" role="tab" aria-controls="desc"
                                            aria-selected="true">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info"
                                            aria-selected="false">Additional information</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab"
                                            aria-controls="review" aria-selected="false">Reviews (1)</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade  show active" id="desc" role="tabpanel" aria-labelledby="desc-tab">
                                        <h5 className="desc-title">Product Information</h5>
                                        <p className="desc-content">Donec orci enim, bibendu augue aliquet cursus quam. Pellnteue pulvin condimtum dictusapien nibh auctor tortoris
                                        vulputate sapien There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
                                        going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing of Lorem Ipsum, you need</p>
                                    </div>
                                    <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                        <h5 className="desc-title">Product Information</h5>
                                        <p className="desc-content">Donec orci enim, bibendu augue aliquet cursus quam. Pellnteue pulvin condimtum dictusapien nibh auctor tortoris
                                        vulputate sapien There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
                                        going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing of Lorem Ipsum, you need</p>
                                    </div>
                                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                        <h5 className="desc-title">Product Information</h5>
                                        <p className="desc-content">Donec orci enim, bibendu augue aliquet cursus quam. Pellnteue pulvin condimtum dictusapien nibh
                                            auctor tortoris
                                            vulputate sapien There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                            are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing of Lorem Ipsum, you need</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- shop-details-area-end --> */}

            
    </>
  )
}

export default Details