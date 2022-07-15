import axios from 'axios'
import React, { useEffect, useState } from 'react'

// const client= axios.create({
//     baseURL: "https://newsapi.org/v2/top-headlines?country=us&apiKey=43dc836ebfcb4464bde8c69224d7cc2d"
// });

export default function Newsfach() {
    const [news, setnews] = useState([])
    useEffect(()=>{
        async function getnews(){
            const res= await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=43dc836ebfcb4464bde8c69224d7cc2d");
            setnews(res.data.articles)
        }
        getnews();
    })
    // const feachdata = () => {
    //     console.log("cliked")
    //     axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=43dc836ebfcb4464bde8c69224d7cc2d").then((res) => {
    //         setnews(res.data.articles)
    //     })
    // }
    return (
        <>
            {/* <div >
                <button className='btn btn-primary' onClick={feachdata} >FeatchNews </button>
            </div> */}
            <div className="container">
                {
                    news.map((value)=>{
                        return(
                            <div className="card" style={{width: "18rem"}}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                        <a href={value.url} className="btn btn-primary">Read</a>
                    </div>
                </div>
                        )
                    })
                }
            </div>
        </>
    )
}
