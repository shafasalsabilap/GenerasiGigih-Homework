import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import { useAppSelector } from "../data/hooks";
import CreatePlaylist from "../pages/CreatePlaylist";
import Home from "../pages/Home";

const AppRouter = () => {
    const accessToken = useAppSelector((state: any) => state.accessToken.value);
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