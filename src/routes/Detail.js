import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import detail from "./Home.module.css";
function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className={detail.container}>
            <div class={detail.movies}>
                <DetailMovie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.description_full}
                    poster={movie.large_cover_image} />
            </div>
        </div>

    )
        ;
}
export default Detail;
