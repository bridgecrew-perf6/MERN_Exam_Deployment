import React, { useState } from 'react'

const PetTable = (props) => {
    const {petName, petType, petDescription, petSkill1, petSkill2, petSkill3} = props;
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const likeHandler = (e) => {
        setLikes(likes + 1);
        setLiked(true);
    }

    return (
        <div className='petDetail'>
            <p><span className='petDetailSpan'>Type:</span> {petType}</p>
            <p><span className='petDetailSpan'>Description:</span> {petDescription}</p>
            <p><span className='petDetailSpan'>Skills: </span>
            {
                petSkill1 ?
                <span>{petSkill1}</span> : ''
            }
            {
                petSkill2 ?
                <span>, {petSkill2}</span> : ''
            }
            {
                petSkill3 ?
                <span>, {petSkill3}</span> : ''
            }
            {
                petSkill1 || petSkill2 || petSkill3 ?
                '' :
                <span>This pet has no skills.</span>
            }
            </p>
            <div className='likesDiv'>
                {
                    liked ?
                    <button onClick={likeHandler} className='likeBtnDisabled' disabled>Like {petName}</button> :
                    <button onClick={likeHandler} className='likeBtn' >Like {petName}</button>
                }
                <p>{likes} like(s)</p>
            </div>
        </div>
    )
}
export default PetTable;