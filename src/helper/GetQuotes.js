
const GetQuotes = async () =>{

    const url = 'https://animechan.vercel.app/api/random';
    const data = await fetch(url).then((res) => res.json());
    
    return data;
   
}

export default GetQuotes