import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PetTable = (props) => {
    const navigate = useNavigate();
    const {pets, setPets} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
        .then((res)=>{
        console.log(res.data);
            setPets(res.data);
        })
        .catch((err)=>{console.log(err)})
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet, index) => {
                            return(
                                <tr key={index}>
                                    <td>{pet.petName}</td>
                                    <td>{pet.petType}</td>
                                    <td>
                                        <button onClick={(e) => navigate(`pets/${pet._id}`)}>Details</button>
                                        <button onClick={(e) => navigate(`pets/edit/${pet._id}`)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default PetTable;