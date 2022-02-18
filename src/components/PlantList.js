import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {


const cardPlant = plants.map(plant => {
  return <PlantCard 
  key={plant.id}
  image={plant.image} 
  name={plant.name} 
  id={plant.id}
  price={plant.price}
  />
})  

  return (
    <ul className="cards">{cardPlant}</ul>
  );
}

export default PlantList;
