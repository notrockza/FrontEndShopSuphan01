import { Button } from 'antd/es/radio';
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../Stone/configureStore';
import { GetProduct } from '../../Stone/productSlice';
import FooterUser from '../PageUser/FooterUser'
import HeaderUser from '../PageUser/HeaderUser'
import SilderProduct from '../Silder/SilderProduct'

function Product() {
    const dispatch = useAppDispatch();
    const { productsLoaded, products } = useAppSelector((state) => state.product);
    console.log("test",products);
    useEffect(() => {
        if (!productsLoaded) dispatch(GetProduct());
    }, [productsLoaded, dispatch]);
    return (
        <>
            <HeaderUser />
            <SilderProduct/>
            {/* <!-- breadcrumb-area-end --> */}

            {/* <!-- shop-area --> */}
            <section className="shop-area shop-bg pb-75" data-background="./src/assets/img/bg/shop_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="shop-action-wrap text-center text-sm-left d-block d-sm-flex align-items-center justify-content-between">
                                <div className="shop-action-result">
                                    <span>เเสดงสินค้า 1–6 ใน 10 </span>
                                </div>
                                <div className="shop-action-form">
                                    <form action="#">
                                        {/* <select className="custom-select">
                                            <option selected="">Short by Latest</option>
                                            <option>Popularity</option>
                                            <option>Low to High</option>
                                            <option>High to Low</option>
                                        </select> */}

                                        <select value="A" className="custom-select">
                                            <option value="A">อาหาร</option>
                                            <option value="B">เสื้อผ้า</option>
                                            <option value="C">เครื้องดื้ม</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {products?.map((products) =>{
return  <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="shop-item text-center mb-40">
                                <div className="shop-thumb mb-20">
                                    <a href={`/detail/${products.id}`} >
                                        <img src={products.image} alt="" />
                                        <span >หยิบใส่ตะกร้า</span>
                                    </a>

                                </div>
                                <div className="shop-item-content">
                                    {/* <div className="shop-item-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div> */}
                                    <h4><a href="#">{products.name}</a></h4>
                                    <span className="old-price"><del>${products.price}</del></span>
                                    <span className="new-price">$32.00</span>
                                </div>
                            </div>
                        </div>
                        })}
                        
                        
                       
                        
                       
                       
                        
                        
                        
                    </div>
                </div>
            </section>
            <FooterUser />
        </>
    )
}

export default Product