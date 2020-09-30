import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchCountries} from '../../api'
import style from './CountryPicker.module.css'
const CountryPicker = ({handleChange}) => {
    const [countries,setCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
          setCountries(await fetchCountries());
        }; 
    
        fetchAPI();
      }, []);
    return (
        <FormControl className={style.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e) => handleChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((c,i)=><option key={i} value={c}>{c}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker