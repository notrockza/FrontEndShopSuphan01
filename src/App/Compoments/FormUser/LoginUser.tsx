import React ,{useState}from 'react'
import SliderUser from '../Silder/SliderUser'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Input ,Space  } from 'antd';
import { LoginValidate } from './ValidationUser';
import swal from 'sweetalert'
import { useNavigate, Link } from 'react-router-dom'
import { useAppDispatch } from '../../Stone/configureStore';
import { loginAccount } from '../../Stone/accountSlice';
import FooterUser from '../PageUser/FooterUser';
import HeaderUser from '../PageUser/HeaderUser';
// import hidePwdImg from '../../../assets/img/icons/dont-show-password-1.svg';
// import showPwdImg from '../../../assets/img/icons/show-password.svg';
import { MailOutlined,LockOutlined } from '@ant-design/icons';
const value = { email: '', password: '' };

function LoginUser() {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    // const [isRevealPwd, setIsRevealPwd] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const submitForm = async (data: any) => {
        const result = await dispatch(loginAccount(data)).unwrap();
        if (result.msg === "OK") {
            swal({
                title: "เข้าสู่ระบบสำเร็จ",
                icon: "success",
                buttons: [false, "ตกลง"],
            }).then(() => navigate("/product")
            );
        } else {
            swal({
                title: result.msg,
                icon: "warning",
                buttons: [false, "ตกลง"],
            });
        };
    };
    return (
        <>
            <HeaderUser />
            <SliderUser />
            <section className="contact-area" >

                <div className="contact-wrap pt-120 pb-120"
                //             style={{ 
                //     backgroundImage: `url("https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg?w=2000")` 
                //   }}
                >
                    <div className="container"  >
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-70">
                                    <h6 className="sub-title">ล็อกอิน</h6>
                                    <h2 className="title"><span>เข้าสู่ระบบ</span>สมาชิก </h2>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center" >

                            <div className="col-xl-5 col-lg-12" >
                                <div className="contact-form">

                                    <Formik
                                        validationSchema={LoginValidate}
                                        initialValues={value}
                                        onSubmit={async (values) => {
                                            await new Promise((r) => setTimeout(r, 500));
                                            submitForm(values)
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                        }) =>
                                            <Form onSubmit={handleSubmit}>

                                                <div className="row">

                                                    <div className="col-md-12" style={{margin: "10px"}}>

                                                        {/* <label htmlFor="firstName">ฮิเมล์</label> */}
                                                        {/* <Input size="large" placeholder="large size" prefix={<UserOutlined />} /> */}
                                                        <Input
                                                            type="text"
                                                            size="large"
                                                            status={touched.email && errors.email
                                                                ? "error"
                                                                : ""}
                                                            name="email"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                            prefix={<MailOutlined   style={{
                                                              
                                                                color: '#8c8c8c',
                                                              }}/>}
                                                            placeholder="อีเมล์ *" />
                                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                                    </div>
                                                    <div className="col-md-12" style={{margin: "10px"}}>
                                                            <Input.Password
                                                                size="large"
                                                                status={touched.password && errors.password
                                                                    ? "error"
                                                                    : ""}
                                                                name="password"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.password}
                                                                prefix={<LockOutlined  style={{
                                                              
                                                                    color: '#8c8c8c',
                                                                  }}/>}
                                                                placeholder="รหัสผ่าน "
                                                                 visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                                                            />
                                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                                    </div>
                                                    <div className="form-check mb-3 mb-md-0">
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row-reverse bd-highlight">
                                                    {/* <!-- Checkbox --> */}

                                                    <div className="form-check mb-0">
                                                        <a href="#!" className="text-body p-2 bd-highlight">ลืมรหัสผ่าน?</a>
                                                    </div>

                                                </div>
                                                <button type='submit' className="btn gradient-btn">ตกลง</button>
                                                {/* <button type="submit">Submit</button> */}
                                                <p className="form-check mb-0 fw-bold mt-2 pt-1 mb-0">ไม่มีบัญชียังงั้นหรอ มัวรออะไรอยู่ล่ะ? <a href="/register"
                                                    className="link-danger">สมัครสมาชิก</a></p>
                                            </Form>
                                        }
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <FooterUser />
        </>
    )
}

export default LoginUser


