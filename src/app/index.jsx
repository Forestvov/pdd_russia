import {withProviders} from "./providers";

import {Routing} from "@/pages/index.jsx";

import './styles/index.scss'

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <Routing/>
            </div>
        </div>
    );
}

export default withProviders(App);