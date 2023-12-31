import { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import heroImg from '../assets/images/hero.png'
import "../styles/hero-section.css";
import Category from "../components/UI/Category/Category.js";
import "../styles/home.css"
import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'
import products from '../assets/fake-data/products.js'
import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'

import ProductCard from "../components/UI/product-card/ProductCard.js";
import { useState } from "react";
import whyImg from '../assets/images/location.png'
import netwrokImg from '../assets/images/network.png'
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.js";
const featureData = [
    {
        title: 'Quick Delivery',
        imgUrl: featureImg01,
        desc: "tasty food"
    },
    {
        title: 'Supe Dine In',
        imgUrl: featureImg02,
        desc: "tasty food"
    },
    {
        title: 'Easy pick up',
        imgUrl: featureImg03,
        desc: "tasty food"
    }
]
const Home = () => {
    const [category, setCategory] = useState("All");
    const [allProducts, setAllProducts] = useState(products);

    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        const filteredproducts = products.filter((item) => item.category === 'Pizza')
        const slicepizza = filteredproducts.slice(0, 4)
        setHotPizza(slicepizza)

    }, [])


    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products);
        }

        if (category === "BURGER") {
            const filteredProducts = products.filter(
                (item) => item.category === "Burger"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "PIZZA") {
            const filteredProducts = products.filter(
                (item) => item.category === "Pizza"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "BREAD") {
            const filteredProducts = products.filter(
                (item) => item.category === "Bread"
            );

            setAllProducts(filteredProducts);
        }
    }, [category]);
    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero__content">
                                <h5 className="mb-3">Easy order & fast delivery</h5>
                                <h1 className="mb-4 hero__title">
                                    <span>Enjoy</span> your favorite food
                                </h1>



                                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                                    <button className="order__btn d-flex align-items-center
                                     justify-content-between ">

                                        Order now<i className="ri-arrow-right-s-line"></i>

                                    </button>
                                    <button className="all__foods-btn">
                                        <Link to="/foods">
                                            See all foods
                                        </Link>
                                    </button>
                                </div>

                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="hero__img">
                                <img src={heroImg} alt="delivery-guy" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Category></Category>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h5 className="feature__subtitle mb-4">What we serve</h5>
                            <h2 className="feature__title">Just sit back at home</h2>
                            <h1 className="feature__title">
                                we will<span> take care</span>
                            </h1>
                        </Col>
                        {
                            featureData.map((item) => {
                                return (<Col lg='4' md='4'>
                                    <div className="feature__item text-center px-5 py-3">
                                        <img src={item.imgUrl} alt="" className="w-25 mb-3 " />
                                        <h5 className="fw-bold mb-3">{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </Col>)
                            })
                        }

                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2>Popular Foods</h2>
                        </Col>
                        <Col lg='12'>
                            <div className="food__category d-flex align-items-center justify-content-center gap-4"
                            >
                                <button className={`all__btn ${category === 'All' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('All')}>
                                    ALL
                                </button>
                                <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('BURGER')}>
                                    <img src={foodCategoryImg01} alt="" />
                                    BURGER
                                </button>
                                <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('PIZZA')}>
                                    <img src={foodCategoryImg02} alt="" />
                                    PIZZA
                                </button>
                                <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('BREAD')}>
                                    <img src={foodCategoryImg03} alt="" />
                                    BREAD
                                </button>



                            </div>
                        </Col>
                        {allProducts.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                                <ProductCard item={item} />
                            </Col>
                        ))}

                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <img src={whyImg} alt="why_taste" className="w-100"></img>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="why__tasty-treat">
                                <h2 className="tasty__treat_title mb-4"> why <span>tasty treat?</span></h2>
                                <p className="tasty__treat_desc">At Tasty Treat, we offer a wide range of snacks and treats that cater to a diverse palate. Our product lineup includes:

                                    <ListGroup className="mt-5">
                                        <ListGroupItem className="border-0 ps-0"><p className=" choose__us-title d-flex align-items-center gap-2">
                                            <i class="ri-checkbox-circle-line"></i> Sweet Delights</p>
                                            <p className="choose__us-desc">
                                                Dive into our world of sweet indulgence with a variety of cookies, cakes, and confectionery that are perfect for satisfying your sweet cravings
                                            </p></ListGroupItem>
                                    </ListGroup>

                                    <ListGroup>
                                        <ListGroupItem className="border-0 ps-0"><p className=" choose__us-title d-flex align-items-center gap-2">
                                            <i class="ri-checkbox-circle-line"></i> Fresh and tasty food</p>
                                            <p className="choose__us-desc">
                                                Tasty Treat is your passport to a world of flavor, excitement, and mouthwatering indulgence
                                            </p></ListGroupItem>
                                    </ListGroup>
                                    <ListGroup>
                                        <ListGroupItem className="border-0 ps-0"><p className=" choose__us-title d-flex align-items-center gap-2">
                                            <i class="ri-checkbox-circle-line"></i> Quality Assurance</p>
                                            <p className="choose__us-desc">
                                                We believe that great taste begins with exceptional ingredients.
                                            </p></ListGroupItem>
                                    </ListGroup>
                                    <ListGroup>
                                        <ListGroupItem className="border-0 ps-0"><p className=" choose__us-title d-flex align-items-center gap-2">
                                            <i class="ri-checkbox-circle-line"></i> For Every Occasion</p>
                                            <p className="choose__us-desc">
                                                Tasty Treat snacks are perfect for a wide range of occasions, whether you're hosting a party, snacking at work, or enjoying a movie night at home
                                            </p></ListGroupItem>
                                    </ListGroup>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center mb-5">
                            <h2>Hot Pizza</h2>
                        </Col>
                        {
                            hotPizza.map((item) => (
                                <Col lg='3' md='4'>
                                    <ProductCard item={item}></ProductCard>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col md='6' lg='6'>
                            <div className="testimonial mb-4">
                                <h5 className="testimonial__subtitle">Testimonial</h5>
                                <h2 className="testimonial__title">
                                    what our <span>customer</span> are saying
                                </h2>
                                <p className="testimonial-desc">The food at Delicious Bites is an explosion of flavors! I tried the spicy shrimp pasta, and it was absolutely divine.</p>
                                <TestimonialSlider></TestimonialSlider>
                            </div>
                        </Col>
                        <Col md='6' lg='6'>
                            <img src={netwrokImg} className="w-100"></img>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
