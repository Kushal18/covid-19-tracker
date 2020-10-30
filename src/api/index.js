import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country && country !== 'global') {
        changeableUrl=`${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(changeableUrl);
        
        return { confirmed, deaths, recovered, lastUpdate};
    } catch (error) {
        console.error(`error while getting the covid response ${error}`);
    }
 }

 export const fetchDailyData = async () => {
     try {
         const { data } = await axios.get(`${url}/daily`);
         const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
         }));

         return modifiedData;
    } catch(error) {
        console.error(`error while getting the daily covid data ${error}`);
     }
 }

 export const fetchCountries = async () => {
     try {
        const { data: { countries }} = await axios.get(`${url}/countries`);
        
        return countries.map((country) => country.name);
     } catch(error) {
        console.error(`error while getting the countries ${error}`);
     }
 }

