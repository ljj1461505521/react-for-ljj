import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import NotFound from "@/errorPage/404"

import Login from "@/view/login"
import Admin from "@/view/admin"

const RouterIndex = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/404" component={NotFound} />
                <Route path="/" component={Admin} />
            </Switch>
        </Router>
    )
}
export default RouterIndex