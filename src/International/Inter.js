import React, { useEffect, useState } from 'react'
// import Nav from './Nav';
import axios from 'axios';
 const Inter = () => {
const [data,Setdata] =useState([]);
const url =('https://newsapi.org/v2/top-headlines?country=us&apikey=fca1f4a6a36e489dba3a5e0e1f6df865')


useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        const api = res.data.articles;
        console.log(api);
        Setdata(api); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [url]);




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
export default Inter;