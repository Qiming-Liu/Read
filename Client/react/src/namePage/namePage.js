import React, {Component} from "react";
import {Button, InputItem, Toast} from 'antd-mobile';
import namePageCSS from "./namePage.css";

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class NamePage extends Component {
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
            this.props.changePage('mainPage');
        }
    }

    onChange(value) {
        let r = /^([a-zA-Z0-9_\u4e00-\u9fa5]{1,16})$/;
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
                <p className={namePageCSS["name"]}> Your name? </p>

                <InputItem
                    type={'text'}
                    className={namePageCSS["input"]}
                    placeholder={"Username"}
                    clear
                    autoAdjustHeight
                    error={this.state.hasError}
                    onChange={(v) => this.onChange(v)}
                    value={this.state.value}
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                ></InputItem>

                <Button className={namePageCSS["button"]} onClick={() => this.onClick()}>ENTER</Button>
            </div>
        );
    }
}

export default NamePage;