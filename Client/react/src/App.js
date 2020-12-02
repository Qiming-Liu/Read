import React, {Component} from 'react';
import StartPage from './startPage/startPage';
import LogPage from './logPage/logPage';
import NamePage from "./namePage/namePage";
import MainPage from "./mainPage/mainPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'startPage'
        }
    }

    changePage(page) {
        this.setState({
            page: page
        })
    }

    render() {
        switch (this.state.page) {
            case "startPage": {
                return (
                    <StartPage changePage={(page) => this.changePage(page)}/>
                );
            }
            case "logPage": {
                return (
                    <LogPage changePage={(page) => this.changePage(page)}/>
                );
            }
            case "namePage": {
                return (
                    <NamePage changePage={(page) => this.changePage(page)}/>
                );
            }
            case "mainPage": {
                return (
                    <MainPage changePage={(page) => this.changePage(page)}/>
                );
            }
            default: {
                return (
                    <div>
                        <p>Cannot find the page.</p>
                        <p>{this.state}</p>
                    </div>
                );
            }
        }
    }
}

export default App;
