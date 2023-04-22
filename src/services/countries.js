import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all";

async function GetAll()
{
    const response = await axios.get(baseUrl);
    return response.data;
}

export default { GetAll };