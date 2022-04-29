import React from 'react';
import {useNavigate} from 'react-router-dom';

const HeaderButton = (props) => {
    const navigate = useNavigate();
    const {page} = props;

    const buttonHandler = (e) => {
        if(page == 'home') {
            navigate('/pets/add');
        } else {
            navigate('/');
        }
    }

    return (
        <div>
            {
                page == 'home' ?
                <button onClick={buttonHandler} className="headerButton">Add a Pet</button> :
                <button onClick={buttonHandler} className="headerButton">Home</button>
            }
        </div>
    )
}
export default HeaderButton;