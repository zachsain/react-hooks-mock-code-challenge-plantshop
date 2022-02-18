import React, {useState} from "react";

function NewPlantForm({handleNewPlant}) {

  let newId = 7

  const [newPlant, setNewPlant] = useState()
  const [plantName, setPlantName] = useState("")
  const [newImage, setNewImage] = useState("")
  const [price, setPrice] = useState("")
  const [id, setID] = useState(newId)

  
  const formData = {
    name : plantName, 
    image : newImage,
    price : price,
    id : id
  }
 

 

  function handleAddName(event){
    setID(id + 1)
    console.log(event.target.value)
    setPlantName(event.target.value)
  }

  function handleAddImage(event) {
    setNewImage(event.target.value)

  }

  function handleAddPrice(event){
    setPrice(parseInt(event.target.value))

  }
  

  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    handleNewPlant(formData)
    setNewPlant(formData)
    console.log(e)
  }

  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleAddName} value={plantName} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleAddImage} value={newImage} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleAddPrice} value={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
