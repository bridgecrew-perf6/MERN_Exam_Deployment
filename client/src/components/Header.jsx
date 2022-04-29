import React from 'react'
import HeaderButton from './HeaderButton';

const Header = (props) => {
    const {page} = props;
    return (
        <div className="header">
            <h1>Pet Shelter</h1>
            <HeaderButton page={page} />
        </div>
    )
}
export default Header;