import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-sections/CommonSections'
import { Container, Row, Col } from 'reactstrap'
import products from '../assets/fake-data/products'
import ReactPaginate from "react-paginate";
import ProductCard from '../components/UI/product-card/ProductCard'
import '../styles/allfoods.css'
import '../styles/pagination.css'
const AllFood = () => {
    const [search, setSearch] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    const searchedproducts = products.filter(item => {
        if (search.value === '') return item;
        if (item.title.toLowerCase().includes(search.toLowerCase())) return item
    })
    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedproducts.slice(visitedPage, visitedPage + productPerPage)
    const pageCount = Math.ceil(searchedproducts.length / productPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)

    }


    return (
        <div>
            <Helmet title="all Foods">
                <CommonSection title="All foods"></CommonSection>
                <section>
                    <Container>
                        <Row>
                            <Col lg='6' md='6' sm='6'>
                                <div className='search_widget d-flex align-items-center justify-content-between w-50'>
                                    <input type='text' placeholder="i'm Looking for" value={search} onChange={(e) => setSearch(e.target.value)} />
                                    <span><i class="ri-search-line"></i></span>

                                </div>
                            </Col>
                            <Col lg='6' md='6' sm='6'>
                                <div className='sorting_widget text-end'>
                                    <select>
                                        <option className='w-50'>default</option>
                                        <option value="ascending">alphabetically(a-z)</option>
                                        <option value="descending">alphabetically(z-a)</option>
                                        <option value="high-price">high Price</option>
                                        <option value="low-price">low Price</option>
                                    </select>

                                </div>
                            </Col>

                            {
                                displayPage
                                    .map((item) => (
                                        <Col lg='3' md='4' sm='6' xs='6' className='mb-4'>
                                            <ProductCard item={item}></ProductCard>
                                        </Col>


                                    ))
                            }

                            <div className="d-flex justify-content-center mt-4 mb-4">
                                <ReactPaginate
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    previousLabel={"Prev"}
                                    nextLabel={"Next"}
                                    containerClassName="paginationBttns"
                                />
                            </div>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </div>
    )
}

export default AllFood