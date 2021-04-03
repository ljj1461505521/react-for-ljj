import React from 'react'
import { summary } from "@/api/home"
import store from "@/store"
import { Button, Input } from 'antd'
import { getUserInfo } from "@/store/action/userInfo"
import { connect } from "react-redux"
class HomeIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        summary().then(
            (res) => {
                console.log("get article response:", res);
            }
        ).catch(error => {
            console.log("错误");
        });;
    }
    render() {
        return (
            <div>
                <Input
                    placeholder="那没事了"
                    onChange={this.props.inputChange}
                />
                <Button type="primary" >你干嘛！？</Button>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = getUserInfo(e.target.value)
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(HomeIndex)