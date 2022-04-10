import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePlaylist from "../pages/CreatePlaylist";
import Home from "../pages/home";
const AppRouter = () => {
    const accessToken = useSelector((state) => state.accessToken.value);
    return (
        < Router >
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create-playlist">
                    {accessToken !== undefined ? <CreatePlaylist /> : <Redirect to="/" />}
                </Route>
                <Route path="*" component={() => (<h1>404</h1>)} />
            </Switch>
        </Router >
    )
}

export default AppRouter;