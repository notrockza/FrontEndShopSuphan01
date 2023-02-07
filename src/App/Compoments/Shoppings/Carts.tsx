import React from 'react'
import HeaderUser from '../PageUser/HeaderUser'
import './Cartscss.css'
import { InputNumber } from 'antd';
import FooterUser from '../PageUser/FooterUser';

function Carts() {

  
  return (
    <>
    <HeaderUser />


    <section className="h-100 gradient-custom" >
      <br />
      <br />
      <br />
      <br />
      <br />


  <div className="container py-5 ">
    <div className="row d-flex justify-content-center my-4 ">
      <div className="col-md-8 " >
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">ตระกร้า</h5>
          </div>
          <div className="card-body">
            {/* <!-- Single item --> */}
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                {/* <!-- Image --> */}
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    className="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div className="mask" style={{background: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
                {/* <!-- Image --> */}
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Data --> */}
                <p><strong>ขนมสาลี้</strong></p>
                <p>ประเภท: อาหาร</p>
                <p>ชุมชน: เอกชัย</p>

                <button type="button" className="btn btn-primary btn-sm me-1 mb-2 mr-2"  data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash"></i>
                  
                </button>
            
                <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i className="fas fa-heart"></i>
                </button>
                {/* <!-- Data --> */}
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Quantity --> */}
                <div className="d-flex mb-4" style={{maxWidth:  "300px"}}>
                  {/* <button className="btn btn-primary px-3 me-2"
                   >
                    <i className="fas fa-minus" style={{width: "3px"}}></i>
                  </button> */}

                  {/* <div className="form-outline">
                    <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control" />
                    <label className="form-label" >Quantity</label>
                  </div> */}

                  {/* <button className="btn btn-primary px-3 ms-2"
                    >
                    <i className="fas fa-plus"></i>
                  </button> */}
                  
                  <InputNumber min={1} max={10} style={{width:"1xp"}}/>
                </div>
                {/* <!-- Quantity --> */}

                {/* <!-- Price --> */}
                <p className="text-start text-md-center">
                  <strong>฿17.99 บาท</strong>
                </p>
                {/* <!-- Price --> */}
              </div>
            </div>
  

            <hr className="my-4" />


          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p><strong>ช่วงเวลาการจัดส่ง</strong></p>
            <p className="mb-0">1/2/2023 - 1/3/2023</p>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p><strong>รองรับการชำระ</strong></p>
            <img className="mr-2  " width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="mr-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                ราคาสินค้า
                <span>$53.98</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                ค่าจัดส่ง
                <span>ฟรี</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>ราคารวม</strong>
                  <strong>
                    <p className="mb-0">(รวมภาษีมูลค่าเพิ่ม)</p>
                  </strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              ยืนยันการชำระ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<FooterUser/>
   </>
  )
}

export default Carts