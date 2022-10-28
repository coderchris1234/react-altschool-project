import React from 'react'
import "../style.css";

const User = ({ data, loading }) => {
  if (loading) {
    return <h1>Loading.......</h1>
  }

  return (
     <div>
      {data.map((data) => (
        <div className="data">
          <div>
          <img src={data.picture.large} alt="" />
          </div>
          <div>
          <h2>{data.name.first}</h2>
          </div>
          
        </div>
      ))}
      
     </div>
  )  
};

export default User
