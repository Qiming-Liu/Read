import React, {Component} from "react";
import startPageCSS from "./startPage.css";

class StartPage extends Component {
    constructor(props) {
        super(props)
        setTimeout(() => {
            props.changePage('logPage')
        }, 3000);
    }

    render() {
        return (
            <div onClick={() => this.props.changePage('logPage')}>
                <p className={startPageCSS["read"]} id={startPageCSS["read"]}> R </p>
                <p className={startPageCSS["read"]}> E </p>
                <p className={startPageCSS["read"]}> A </p>
                <p className={startPageCSS["read"]}> D </p>

                <img className={startPageCSS["startImg"]} src={"/img/start.png"}></img>
            </div>
        );
    }
}

export default StartPage;