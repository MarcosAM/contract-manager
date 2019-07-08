import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BottomNavigation from './components/BottomNavigation'
import { AddPage, DescriptionPage, ListPage } from './pages'
import { DESCRIPTION_PATH, LIST_PATH, ADD_PATH } from './constants/navigation'

export default () => (
  <Router>
    <Route path={DESCRIPTION_PATH} exact component={DescriptionPage} />
    <Route path={LIST_PATH} component={ListPage} />
    <Route path={ADD_PATH} component={AddPage} />
    <BottomNavigation />
  </Router>
)