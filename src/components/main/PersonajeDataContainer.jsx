import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'
import Personaje from './personajes/Personaje';

const PersonajeDataContainer = () => {
const [personaje, setpersonaje] = useState({});
let {id} = useParams();

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => setpersonaje(res.data));
        
    }, []);

  return <Personaje personaje={personaje}/>;
};

export default PersonajeDataContainer;