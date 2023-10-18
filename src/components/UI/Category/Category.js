import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import catehoryImg01 from "../../../assets/images/category-01.png"
import catehoryImg02 from "../../../assets/images/category-02.png"
import catehoryImg03 from "../../../assets/images/category-03.png"
import catehoryImg04 from "../../../assets/images/category-04.png"
import '../../../styles/category.css'
const Category = () => {
    const categoryDate = [
        {
            display: 'FastFood',
            imgUrl: catehoryImg01
        },
        {
            display: 'Pizza',
            imgUrl: catehoryImg02
        },
        {
            display: 'Asain Foood',
            imgUrl: catehoryImg03
        },
        {
            display: 'Row Meat',
            imgUrl: catehoryImg04
        },
    ]
    return (
        <Container>
            <Row>
                {
                    categoryDate.map((item, index) => {
                        return (
                            <Col lg='3' md='4' sm='6' xs='6' className='mb-3'>
                                <div className="category__item d-flex align-items-center gap-3">
                                    <div className='category__img'>
                                        <img src={item.imgUrl} alt='' />

                                    </div>
                                    <h6>{item.display}</h6>
                                </div>
                            </Col>
                        )
                    })
                }

            </Row>
        </Container>
    )
}

export default Category