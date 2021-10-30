import React from "react";
import './Main.css';

import personalFoto from './ava-test.jpg';

class Main extends React.Component {
    render() {
        return (
            <main className="b-main">
                <section className="b-main__about-me">
                    <div className="b-about-me__wrapper-img">
                        <img className="b-wrapper-img__img" src={personalFoto} alt="Аватарка" />
                    </div>
                
                    <div className="b-about-me__description">
                        <h2>Обо мне</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem voluptates excepturi
                            blanditiis nisi quos nesciunt quisquam laudantium ipsum consequuntur, molestiae,
                            inventore ad dolore quidem maxime impedit aliquid atque rem.
                        </p>
                    </div>
                </section>

                <section className="b-main__skills">
                    <h2 className="b-skills__title">Навыки</h2>
                    <p className="b-skills__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error dignissimos
                        sit maxime non fugiat eveniet officiis, distinctio omnis maiores exercitationem quibusdam
                        ex, quas molestias optio eum laudantium assumenda cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error dignissimos
                        sit maxime non fugiat eveniet officiis, distinctio omnis maiores exercitationem quibusdam
                        ex, quas molestias optio eum laudantium assumenda cupiditate?
                    </p>
                    <p className="b-skills__text-two">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores odit aperiam
                        provident expedita totam inventore voluptas, ratione id labore praesentium consequatur
                        aspernatur dolor quo ea laboriosam. Cupiditate veniam laboriosam vel!
                        Nemo error sint quos asperiores veritatis? Harum, adipisci. Dicta expedita reiciendis cum
                        hic iste? Modi, ea! Ad odit, eaque sit commodi nobis earum quidem eos beatae minima, aut, nam facere!
                        Voluptatibus minus praesentium atque totam ullam ipsa repellat maiores voluptatem, pariatur adipisci
                        aliquam voluptatum placeat eius id molestias dolores. Delectus odio quas ut, maiores
                        exercitationem aspernatur natus rerum ea praesentium?
                    </p>

                    <div className="b-skills__list-wrapper">
                        <ul className="b-list-wrapper__list">
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                        </ul>
                        <ul className="b-list-wrapper__list">
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                        </ul>
                        <ul className="b-list-wrapper__list">
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                            <li className="b-list__item">eveniet officiis</li>
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
};

export default Main;