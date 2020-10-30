import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './countryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
    const [countries,setCountry] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setCountry(await fetchCountries());
        }
        getData();
    },[setCountry]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect default="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;