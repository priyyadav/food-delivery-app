
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-sections/CommonSections";
import Helmet from "../components/Helmet/Helmet";
const Checkout = () => {

    const totalamout = useSelector((state) => state.cart.totalAmount)
    const shippingCost = 30;
    const total = totalamout + Number(shippingCost)
    return (

        <Helmet title="Checkout">
            <CommonSection title="Checkout">

                <section>
                    <Container>
                        <Row>
                            <Col lg='8' md='6'>
                                <h6 className="mb-4">shipping address</h6>
                                <form className="checkout_form">
                                    <div className="form__group">
                                        <input type="text" placeholder="enter your name" />
                                    </div>
                                    <div className="form__group">
                                        <input type="email" placeholder="enter your email" />
                                    </div>
                                    <div className="form__group">
                                        <input type="number" placeholder="Phone Number" />
                                    </div>

                                    <div className="form__group">
                                        <input type="text" placeholder="Country" />
                                    </div>
                                    <div className="form__group">
                                        <input type="text" placeholder="enter your name" />
                                    </div>

                                    <div className="form__group">
                                        <input type="number" placeholder="enter your name" />
                                    </div>

                                    <div className="form__group">
                                        <input type="number" placeholder="Postal Code" />
                                    </div>
                                    <button className="addTOCART">Payment</button>
                                </form>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="checkout__bill">
                                    <h6 className="d-flex align-items-center justify-content-between">Subtotal : $<span>{totalamout}</span></h6>
                                    <h6 className="d-flex align-items-center justify-content-between">shipping: $<span>{shippingCost}</span></h6>
                                    <h5>Total: <span>
                                        ${total}</span></h5>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </CommonSection>
        </Helmet>


    );
};

export default Checkout;
