import React from "react";
import DetailMovie from "../components/DetailMovie";
import "./Home.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <section className="container">
                    <div className="datail">
                        <DetailMovie
                            key={location.state.id}
                            id={location.state.id}
                            year={location.state.year}
                            title={location.state.title}
                            summary={location.state.summary}
                            poster={location.state.poster}
                            genres={location.state.genres}
                        />
                    </div>
                </section>
            );
        } else {
            return null;
        }
    }
}
export default Detail;
