import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Index from "./pages/index"
const Form = lazy(() => import("./pages/form"))



const AppRouter = () => {

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/form" component={Form} />
                </Switch>
            </Suspense>
        </Router>
    )

}

export default AppRouter;