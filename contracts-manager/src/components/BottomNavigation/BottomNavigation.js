import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { DESCRIPTION_PATH, LIST_PATH, ADD_PATH } from '../../constants/navigation'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Description from '@material-ui/icons/Description';
import List from '@material-ui/icons/ViewList';
import Add from '@material-ui/icons/Add';


const BottomN = ({ history }) => {
    const [value, setValue] = useState(DESCRIPTION_PATH);

    const handleChange = (event, newValue) => {
        history.push(newValue)
        setValue(newValue);
    }

    return (
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label="Description" value={DESCRIPTION_PATH} icon={<Description />} />
            <BottomNavigationAction label="List" value={LIST_PATH} icon={<List />} />
            <BottomNavigationAction label="Add" value={ADD_PATH} icon={<Add />} />
        </BottomNavigation>
    );
}

export default withRouter(BottomN)