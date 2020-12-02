import React, {Component} from "react";
import {Button, InputItem, Toast} from 'antd-mobile';
import logPageCSS from "./logPage.css";

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class LogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: true,
            value: '',
        }
    }

    onClick() {
        if (this.state.hasError) {
            Toast.fail('Please check');
        } else {
            this.props.changePage('namePage');
        }
    }

    onChange(value) {
        let r = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
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
                <p className={logPageCSS["read"]} id={logPageCSS["read"]}> R </p>
                <p className={logPageCSS["read"]}> E </p>
                <p className={logPageCSS["read"]}> A </p>
                <p className={logPageCSS["read"]}> D </p>

                <InputItem
                    type={'text'}
                    className={logPageCSS["input"]}
                    placeholder={"Email"}
                    clear
                    autoAdjustHeight
                    error={this.state.hasError}
                    onChange={(v) => this.onChange(v)}
                    value={this.state.value}
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                ></InputItem>

                <Button className={logPageCSS["button"]} onClick={() => this.onClick()}>LOG IN</Button>

                <div className={logPageCSS["hr"]}/>
            </div>
        );
    }
}

export default LogPage;