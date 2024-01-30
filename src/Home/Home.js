import React, { useEffect, useState } from 'react'
// import Nav from './Nav';
import axios from 'axios';
import { Error } from '../Error/Error';
import Load from '../Load/Load';
 const Home = () => {
const [data,Setdata] =useState([]);
const [load,SetLoad] =useState(false)
const [error,SetError] =useState(false)
const url =('https://newsapi.org/v2/top-headlines?country=in&apikey=fca1f4a6a36e489dba3a5e0e1f6df865')


useEffect(() => {
    const fetchData = async () => {
      try {
        SetLoad(true)

        const res = await axios.get(url);
        const api = res.data.articles;
        console.log(api);
        Setdata(api); 
        SetLoad(false)
        SetError(false)
      } catch (error) {
        SetLoad(false)
        SetError(true)
      }
    };
  
    fetchData();
  }, [url]);
if(load){
    return (
        <Load/>
    )   
}
if(error){
    return(
        <Error/>
    )

}



  return (
    <>
    
    <div className="container mt-3">
        <h1 className='text-center'> Top Headlines</h1>
      <div className="row">
        {data.map((currelm) => (
          <div className="col-md-3 mb-3" key={currelm.link}>
            <div className="card" style={{ height: '100%' }}>
                <img src={currelm.urlToImage} alt=''/>
              <div className="card-body">
                <h5 className="card-title">{currelm.title}</h5>
                <h6>{currelm.author}</h6>
                    <details>
  <summary>{currelm.description}</summary>
  <p className="card-text">{currelm.content}</p>

</details>
                <a href={currelm.url} className="btn btn-primary">Readmore</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  )
}
export default Home;