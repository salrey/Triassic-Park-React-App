import { Component } from "react";
import "./App.css";
import data from "./data/dinosaurs";
import DinosaurCard from "./components/DinosaurCard";
import SelectedDino from "./components/SelectedDinosaur";

class App extends Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    const { selectedDinosaur } = this.state;
    const species = this.state.species.map((dinosaur) => {
      return (
        <DinosaurCard
          key={dinosaur.id}
          dinosaur={dinosaur}
          handleDinosaurClick={this.handleDinosaurClick}
        />
      );
    });

    return (
      <div className="app" id="app-container">
        <h1>Triassic Park</h1>
        <SelectedDino dino={selectedDinosaur} />
        <div id="dinosaur-list-container">{species}</div>
      </div>
    );
  }
}

export default App;
