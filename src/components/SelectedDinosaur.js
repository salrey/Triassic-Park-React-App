const SelectedDino = (props) => {
  const { image, name, weight, carnivore } = props.dino;
  //user .ceil vs floor to round up, otherwise you'll have to + 1
  const foodCost = Math.ceil(weight / 5) || 0;
  //use objects to check if the math above works for each dino
  // console.log({dino: props.dino})
  // console.log({foodCost: foodCost}) 
  const food = carnivore ? "goat" : "tree"
  const plural = foodCost > 1 && "s"
  // Only display this section if dino is selected, so since dino evaluates to an object that starts out with empty name key, check if name even exists 
  const dinoEats = name && (<p>Eats: {foodCost} {food}{plural}</p>) 
  // ORRRR render the following (null will be as if nothing exists so nothing will happen)
  // {name ? (<p>...</p>) : null}
  // ORRRRRRR you can use className with a css of hidden (make sure to import app.css so that it works)
  //className={name && "hidden"} 

  return (
    <div className="selected-dino">
      <h3>Currently Selected Dinosaur</h3>
      <img className="dino-image" src={image} alt="Selected dinosaur" />
      <p>{name || "No Dinosaur Selected"}</p>
      {dinoEats}
    </div>
  );
};

export default SelectedDino;
