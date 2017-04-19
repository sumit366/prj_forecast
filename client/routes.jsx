'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Dashboard from './components/dashboard.jsx';
import HomePage from './components/home/homePage.jsx';
import DataStudioPage from './components/data_studio/dataStudioPage.jsx';
import AnalyzingStudioPage from './components/analyzing_studio/analyzingStudioPage.jsx';
import ReportingStudioPage from './components/reporting_studio/reportingStudioPage.jsx';

var routes = (
        <Route name="app" path="/" component={Dashboard}>
            <IndexRoute component={HomePage}/>
            <Route path="home" component={HomePage}/>
            <Route path="data_studio" component={DataStudioPage}/>
            <Route path="analyzing_studio" component={AnalyzingStudioPage}/>
            <Route path="reporting_studio" component={ReportingStudioPage}/>
        </Route>
);

export default routes;