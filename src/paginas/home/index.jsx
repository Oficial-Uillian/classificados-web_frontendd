import React from 'react';
import Menu from '../../componentes/menu';
import Rodape from '../../componentes/rodape';
import Titulo from '../../componentes/Titulo';

import {Container, Carousel} from 'react-bootstrap';

const Home = () =>{
    return(
        <div>
            <Menu />       
            <Container>
                <Titulo titulo="Seja bem vindo" chamada="Abaixo temos nossas categorias" />
            </Container>
                <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://i.pinimg.com/originals/92/7c/12/927c1297b303bbe833fe0cd8c2c5a9a5.jpg'
                        style={{ width: "100px" }}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://fotos.jornaldocarro.estadao.com.br/uploads/2019/12/16195013/8017809-1160x746.jpg"
                        style={{ width: "500px" }}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/63/5c/52/635c52fc5aa03ffadfc5069f7991a978.jpg"
                        style={{ width: "500px" }}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            
            <Rodape />
        </div>
    
    )
    }

export default Home;