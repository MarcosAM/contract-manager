import React from 'react'
import List from '@material-ui/core/List'
import CustomListItem from '../CustomListItem'


export default ({ items }) => {

    const renderList = () => {
        return (items.map(({ primary, secondary }, key) => (
            <CustomListItem key={key} primary={primary} secondary={secondary} />
        )))
    }

    return (
        <List>
            {renderList()}
        </List>
    )
}