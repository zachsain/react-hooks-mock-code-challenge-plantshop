import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => (setPlants(data), console.log(data)))
  }, [])

  function handleNewPlant(formData){

    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newItem) => console.log(newItem));

    setPlants([...plants, formData])
    console.log(plants)
    
  }

  function handleSearch(searchValue){

    const newArray = plants.filter(plants => {
      return plants.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    // const filteredPlants = plants.filter(plants => {
    //   return plants.description.toLowerCase().includes(searchValue.toLowerCase())
    // })
    
    setPlants(newArray)
  }

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
