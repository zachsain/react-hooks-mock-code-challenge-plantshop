import React, {useState} from "react";

function PlantCard({image, name, price, id}) {

  const [stocked, setStocked] = useState(true)


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button onClick={() => setStocked(!stocked)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setStocked(!stocked)} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
