import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const PetForm = (props) => {
    const navigate = useNavigate();
    const {_id, page} = props;
    const [petNameStatic, setPetNameStatic] = useState('');
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petDescription, setPetDescription] = useState('');
    const [petSkill1, setPetSkill1] = useState('');
    const [petSkill2, setPetSkill2] = useState('');
    const [petSkill3, setPetSkill3] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then((res)=>{
            console.log(res.data);
            setPetNameStatic(res.data.petName);
            setPetName(res.data.petName);
            setPetType(res.data.petType);
            setPetDescription(res.data.petDescription);
            setPetSkill1(res.data.petSkill1);
            setPetSkill2(res.data.petSkill2);
            setPetSkill3(res.data.petSkill3);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        if(_id !== undefined){
            axios.put(`http://localhost:8000/api/pets/${_id}`, {
                petName,
                petType,
                petDescription,
                petSkill1,
                petSkill2,
                petSkill3
            })
                .then( res => {
                    console.log(res);
                    navigate('/');
                })
                .catch((err)=>{
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                })
        } else {
            axios.post('http://localhost:8000/api/pets', {
                petName,
                petType,
                petDescription,
                petSkill1,
                petSkill2,
                petSkill3
            })
                .then(res=>{
                    console.log(res);
                    console.log(res.data);
                    navigate('/');
                })
                .catch((err)=>{
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                })
        }
    }

    return (
        <div>
            {
                page == 'edit' ?
                <h2>Edit {petNameStatic}</h2> :
                <h2>Know a Pet Needing a Home?</h2>
            }
            <form onSubmit={submitHandler}>
                <div className='errorBox'>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                </div>
                {
                    _id ?
                    <div className='formBody'>
                        <div className='formCol'>
                            <label>
                                Pet Name:
                                <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} class="inputBox" />
                            </label>
                            <label>
                                Pet Type:
                                <input type="text" value={petType} onChange={(e) => setPetType(e.target.value)} class="inputBox" />
                            </label>
                            <label>
                                Pet Description:
                                <input type="text" value={petDescription} onChange={(e) => setPetDescription(e.target.value)} class="inputBox" />
                            </label>
                        </div>
                        <div className='formCol'>
                        <p>Skills (optional):</p>
                            <label>
                                Skill 1:
                                <input type="text" value={petSkill1} onChange={(e) => setPetSkill1(e.target.value)} class="inputBox" />
                            </label>
                            <label>
                                Skill 2:
                                <input type="text" value={petSkill2} onChange={(e) => setPetSkill2(e.target.value)} class="inputBox" />
                            </label>
                            <label>
                                Skill 3:
                                <input type="text" value={petSkill3} onChange={(e) => setPetSkill3(e.target.value)} class="inputBox" />
                            </label>
                        </div>
                    </div> :
                    <div className='formBody'>
                        <div className='formCol'>
                            <label>
                                Pet Name:
                                <input type="text" onChange={(e) => setPetName(e.target.value)} class="inputBox" />
                            </label>
                            <label>
                                Pet Type:
                                <input type="text" onChange={(e) => setPetType(e.target.value)} class="inputBox" />
                            </label>
                            <label>
                                Pet Description:
                                <input type="text" onChange={(e) => setPetDescription(e.target.value)} class="inputBox" />
                            </label>
                        </div>
                        <div className='formCol'>
                            <p>Skills (optional):</p>
                            <label>
                                Skill 1:
                                <input type="text" onChange={(e) => setPetSkill1(e.target.value)} class="inputBox" />
                            </label>
                            <label>
                                Skill 2:
                                <input type="text" onChange={(e) => setPetSkill2(e.target.value)} class="inputBox" />
                            </label>
                            <label>
                                Skill 3:
                                <input type="text" onChange={(e) => setPetSkill3(e.target.value)} class="inputBox" />
                            </label>
                        </div>
                    </div>
                }
                {
                    page == 'edit' ?
                    <input type="submit" class="submitBtn" value="Edit Pet" /> :
                    <input type="submit" class="submitBtn" value="Add Pet" />
                }
            </form>
        </div>
    )
}
export default PetForm;