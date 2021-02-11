import React from 'react';
import './MainScreen.css';
import Mobile from './../assets/mobile.jpeg'
import Slider from "react-slick";
import { settings } from './../component/sliderConfig';
import Arrow from './../component/arrow';
import Card from './../component/card/card';
import { slideData } from '../component/dataSlide';
import ScrollAnimation from 'react-animate-on-scroll';

export default () => {


    return (

        <>

            <Arrow/>

            <div className="header">
                <ScrollAnimation animateIn='bounceInLeft'>
                    <div className="box-download">
                        <p className="box-download-text">Baixar Family in Movement</p>
                        <a href='./../FamilyInMovement.apk' download>
                            <button className="box-download-download">
                                Download
                        </button>
                        </a>
                    </div>
                </ScrollAnimation>

            </div>
            <ScrollAnimation animateIn='bounceInRight'>
                <div className="row">

                    <div className="column-75" >
                        <p className="text-body-1">Vamos conhecer o <span className="text-body-2">Family in Movement?</span></p>
                        <p className="text-body-description"><span className="text-text">Family in Movement</span> é um aplicativo que tem como objetivo fazer você e sua família terem uma vida mais saudável por meio de exercicios simples e rápidos. Para fazer isso é necessário que você baixe nosso App, escolha uma de nossas 14 atividades, chame seu pai, mãe, irmão, irmã, tia, cachorro, gato, papagaio ou quem queira se exercitar e então se diverta com quem você ama!</p>
                    </div>



                    <div className="column-25">
                        <div className="img-background">
                            <img className="img-mobile" src={Mobile} />
                        </div>
                    </div>

                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'>
                <div className="our-team">
                    <p>
                        Equipe Bricks of Pará
                </p>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'>
                <div className="container" >
                    <Slider {...settings} >
                        {slideData.map((slideData, index) => {
                            return (
                                <div>
                                    <Card
                                        title={slideData.title}
                                        description={slideData.description}
                                        img={slideData.image}
                                    />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </ScrollAnimation>


            <div className="foot">
                <p>Todos os direitos de imagem são de seus repesctivos autores.</p>
            </div>
        </>
    );

}

