import * as React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import { NavBar } from 'components/NavBar';
import { Front } from 'views/Front';
import { About } from 'views/About';
import { Blog } from 'views/Blog';
import { Projects } from 'views/Projects';
import { NotFound } from 'views/NotFound';
import { AppFrame } from 'views/AppFrame';


var routes = (
    <Route path="/" component={AppFrame}>
        <IndexRoute component={Front} />
        <Route path="about" component={About} />
        <Route path="blog" component={Blog} />
        <Route path="projects" component={Projects} />
        <Route path="*" component={NotFound} />}
    </Route>
);


export default routes;