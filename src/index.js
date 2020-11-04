import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from "./router/index"
import 'antd/dist/antd.css';
import { Provider } from "react-redux"
import store from "./store"

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById("app"))