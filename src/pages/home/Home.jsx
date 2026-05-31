import "./Home.css";

import Card from "../../components/card/Card";

const MOVIES = [
    {
        id: "movie-1",
        title: "Movie X",
        description: "Movie X: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966"
    }, {
        id: "movie-2",
        title: "Movie Y",
        description: "Movie Y: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966"
    }, {
        id: "movie-3",
        title: "Movie Z",
        description: "Movie Z: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966"
    },
]

export default function Home() {
    return (
        <div className="main-home">
            <h1 className="main-home-title">Nuestro Catálogo</h1>
            <div className="container-cards">
                {MOVIES.map((movie, index) => (
                    <Card key={movie.id} title={movie.title} description={movie.description}></Card>
                ))}
            </div>
        </div>
    )
}