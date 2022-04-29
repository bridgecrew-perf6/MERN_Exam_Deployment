import React from 'react'
import '../App.css';
import Header from '../components/Header';
import PetForm from '../components/PetForm';

const Add = () => {
    return (
        <div>
            <Header page={'notHome'} />
            <PetForm />
        </div>
    )
}
export default Add;