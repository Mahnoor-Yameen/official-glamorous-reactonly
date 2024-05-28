import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function DSpecificCategoryProducts() {

    const { hollow } = useParams();
    const [categoryproducts, setcategoryproducts] = useState([])

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${hollow}`)
            .then((res) => setcategoryproducts(res.data.products))
    }, [])

    return (
        <>
            <div className="container text-center">
                <h1>{hollow}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente recusandae accusamus ducimus tempora laborum perspiciatis, cupiditate eligendi impedit quis adipisci enim esse inventore facilis? Debitis dolorum doloremque illo aliquid assumenda?</p>



            </div>
            <div className="row">
                {
                    categoryproducts.map((val, index) =>
                        <div key={index} className='col-md-4'>
                            {/* yahan sary card ko link bana diya  */}
                            {/* yeh link khul raha /product/kuch bhi pe */}
                            {/* hum route main already bata chuky k /product/kuch bhi kidher khuly ga */}
                            {/* agar yeh link khuly ga to hollow2 pe id jayegi us card ki */}
                            <Link to={`/products/${val.id}`} className='nav-link'>
                            <Card >
                                <Card.Img variant="top" className='img-fluid' src={val.thumbnail}/>
                                <Card.Body>
                                    <Card.Title>{val.title.toUpperCase()}</Card.Title>
                                    <Card.Text>
                                        {val.description}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    )
                }
            </div>

        </>
    )
}
