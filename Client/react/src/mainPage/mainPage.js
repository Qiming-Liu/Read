import React, {Component} from "react";
import {Button, InputItem, Toast} from 'antd-mobile';
import mainPageCSS from "./mainPage.css";

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: true,
            value: '',
        }
    }

    onClick() {
        if (this.state.hasError) {
            Toast.fail('Please do not enter special characters');
        } else {
            this.props.changePage('mainPage');
        }
    }

    onChange(value) {
        let r = /^([a-zA-Z0-9_\u4e00-\u9fa5]{4,16})$/;
        if (!r.test(value)) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            value: value
        });
    }

    render() {
        return (
            <div>
                <p className={mainPageCSS["name"]}> MainPage </p>
            </div>
        );
    }
}

export default MainPage;