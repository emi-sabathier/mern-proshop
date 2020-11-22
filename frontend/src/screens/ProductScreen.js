import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({match}) => {
    /* tu récuperes l'id en get depuis l'url
et tu compares a ta bdd pour te sortir l'article qui match l'id
genre si ta un id 964537876
et que ta pas cet id la dans un de tes produits ca va te retourner une page blanche
     */
    const product = products.find(p => p._id === match.params.id)
    return (
        <>
            <Link className="btn btn-light my-3" to='/'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} avis`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>Prix : {product.price}€</ListGroup.Item>
                        <ListGroup.Item>Description : {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Prix:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Statut:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'En stock' : 'Plus de stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block'
                                        type='button'
                                        disabled={product.countInStock === 0}>
                                    Ajouter
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;
