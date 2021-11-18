import { Component } from "react";
import "./App.css";
import data from "./data/dinosaurs";
import DinosaurCard from "./components/DinosaurCard";
import SelectedDino from "./components/SelectedDinosaur";
import Park from "./components/Park";
import NewSpeciesForm from "./components/NewSpeciesForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      park: [],
      species: data.dinosaurs,
      selectedDinosaur: {
        name: "",
        image: "https://via.placeholder.com/100",
      },
    };
  }

  handleDinosaurClick = (dinosaur) => {
    this.setState({
      selectedDinosaur: dinosaur,
    });
  };

  addDino = () => {
    const { park, selectedDinosaur } = this.state
    this.setState({
      park: [...park, selectedDinosaur], 
    })
  } 

  addSpecies = (newSpecies) => {
    newSpecies.id = this.state.species.length + 1
    this.setState({
      species: [...this.state.species, newSpecies]
    })
  }

  render() {
    const { selectedDinosaur, park } = this.state;
    // check state using object
    // console.log({park: this.state.park})
    const species = this.state.species.map((dinosaur) => {
      return (
        <DinosaurCard
          key={dinosaur.id}
          dinosaur={dinosaur}
          handleDinosaurClick={this.handleDinosaurClick}
        />
      );
    });
    const addToPark = selectedDinosaur.name && (<button onClick={this.addDino}>Add to Park</button>) 

    return (
      <div className="app" id="app-container">
        <h1>Triassic Park</h1>
        <SelectedDino dino={selectedDinosaur} />
        {addToPark}
        <div id="dinosaur-list-container">{species}</div>
        {/* REACT still renders a 0 value and NaN as truthy */}
        {park.length > 0 && <Park park={park}/>}
        <NewSpeciesForm clickHandler={this.addSpecies}/>
      </div>
    );
  }
}

export default App;
