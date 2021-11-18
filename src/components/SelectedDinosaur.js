const SelectedDino = (props) => {
  const { image, name, weight, carnivore } = props.dino;
  const foodCost = Math.floor(weight / 5) + 1 || 0;
  //use objects to check if the math above works for each dino
  // console.log({dino: props.dino})
  // console.log({foodCost: foodCost})

  // Only display this section if dino is selected, so since dino evaluates to an object that starts out with empty name key, check if name even exists 
  const eats = props.dino.name && <p>Eats: {foodCost} {carnivore ? "goats" : "trees"}</p> 

  return (
    <div className="selected-dino">
      <h3>Currently Selected Dinosaur</h3>
      <img className="dino-image" src={image} alt="Selected dinosaur image" />
      <p>{name || "No Dinosaur Selected"}</p>
      {eats}
    </div>
  );
};

export default SelectedDino;
