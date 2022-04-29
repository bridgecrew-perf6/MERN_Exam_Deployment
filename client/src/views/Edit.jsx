import React from 'react'
import '../App.css';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PetForm from '../components/PetForm';

const Edit = () => {
    const {_id} = useParams();

    return (
        <div>
            <Header page={'notHome'} />
            <PetForm _id={_id} page={'edit'} />
        </div>
    )
}
export default Edit;