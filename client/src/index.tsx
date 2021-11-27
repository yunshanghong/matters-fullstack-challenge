import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { render } from 'react-dom';
import Home from './pages/home';
import ArticlePage from './pages/ArticlePage';

const App = (props: any): React.ReactElement => {
    return (
        <BrowserRouter>
            <Route path="/article/:id" component={ArticlePage} exact={true} />
            <Route path="/" component={Home} exact={true} />
        </BrowserRouter>
    )
}

render(<App />, document.getElementById('app'))
