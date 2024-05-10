import { useState } from 'react';
import './Table.css';
import React from 'react'

export default function Table() {
   
    const [ data ,setData] = useState( [
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    
    ])
    const renderData =() => {
        return data.map((item, index) =>(
            <tr>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
            </tr>
        ))
    }

    const handleSortByDate =() =>{
        const sortedData = [...data].sort((a,b)=> new Date(b.date)-new Date(a.date));
        setData(sortedData);
    }
    const handleSortByViews=() =>{
        const sortedData = [...data].sort((a,b)=>b.views-a.views);
        setData(sortedData);
    }
    
  return (
    <div className='container'>
        <h1>Date and Views Table</h1>
        <div >
            <button onClick={handleSortByDate}>Sort by Date</button>
            <button onClick={handleSortByViews}>Sort by Views</button>
        </div>
        <table className="table-data">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>                
            </thead>

            <tbody>
                {renderData()}
            </tbody>
        </table>

    </div>
  )
}
