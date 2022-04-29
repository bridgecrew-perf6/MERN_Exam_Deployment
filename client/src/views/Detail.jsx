import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';
import PetDetail from '../components/PetDetail';

const Detail = () => {
    const navigate = useNavigate();
    const {_id} = useParams();
    const [pet, setPet] = useState('');

    const adoptPet = () => {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then((res)=>{
            console.log(res.data);
            setPet(res.data);
        })
        .catch((err)=>{console.log(err)})
    }, [])

    return (
        <div>
            <Header page={'notHome'} />
            <div className='detailHeader'>
                <h2>Details about: {pet.petName} </h2>
                <button onClick={adoptPet} className='adoptBtn'>Adopt {pet.petName}</button>
            </div>
            <PetDetail
                petName={pet.petName}
                petType={pet.petType}
                petDescription={pet.petDescription}
                petSkill1={pet.petSkill1}
                petSkill2={pet.petSkill2}
                petSkill3={pet.petSkill3} />
        </div>
    )
}
export default Detail;