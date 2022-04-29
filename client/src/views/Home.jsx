import React, { useState } from 'react'
import '../App.css';
import Header from '../components/Header';
import PetTable from '../components/PetTable';

const Home = () => {
    const [pets, setPets] = useState([]);
    return (
        <div>
            <Header page={'home'} />
            <h2>These pets are looking for a good home</h2>
            <PetTable pets={pets} setPets={setPets} />
        </div>
    )
}
export default Home;