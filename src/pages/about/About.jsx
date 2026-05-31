import "./About.css";

import Accordion from "../../components/accordion/Accordion";
import Card from "../../components/card/Card";
import Stats from "../../components/stats/Stats";

export default function About() {
    return (
        <div className="main-about">
            <main className="about-main">
                <div className="about-main-desc">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966</p>
                </div>
            </main>
            <div className="about-cards">
                <Accordion />
                <Card title={"Nosotros somos"} description={"lorem ipsum sobre nosotros"}/>
            </div>
            <Stats/>
        </div>
    )
}