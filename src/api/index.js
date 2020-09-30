import Axios from "axios";

const url = 'https://covid19.mathdro.id/api' ;


export const fetchData = async(country) =>
{
    let  updatedUrl =url;
    if(country)
    {
        console.log(country)
        updatedUrl = `${url}/countries/${country}`
    }
    console.log(updatedUrl);
        try{
        const { data : {confirmed, deaths , recovered, lastUpdate}}= await Axios.get(updatedUrl);
        const data = {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}



export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await Axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };


  export const fetchDailyData = async () => {
      try {
          const {data} = await Axios.get(`${url}/daily`)
          return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
      } catch (error) {
          console.log(error);
      }
  }