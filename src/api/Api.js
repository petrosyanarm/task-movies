import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const api=axios.create({
  baseURL:`${BASE_URL}`,
  headers:{"Content-Type": "application/json",}
})

export const searchMovies = async (query) => {
  try{
    const res = await api.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    const data = res.data.Search;
    return data;
  }catch(error){
    console.log(error)
  }
};

export const getMovies=async(id)=>{
  try{
    const res=await api.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    const data=res.data;
    return data;
    // console.log(data)
  }catch(error){
    console.log(error)
  }
}