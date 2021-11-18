import { Component } from "react";

class NewSpeciesForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            weight: "",
            image: "",
            diet: "herbivore"
        }
    }

    // handleChangeName = (event) => {
    //     this.setState({name: event.target.value})
    // }
    // handleChangeWeight = (event) => {
    //     this.setState({weight: event.target.value})
    // }
    //ORRRR use bracket notation on the key for either name or weight changes
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //check if it's carnivore per addSpecies from App.js
        const carnivore = this.state.diet === "carnivore"
        //Add id to prevent missing key property per React in the addSpecies method in App.js
        const newSpecies = {
            name: this.state.name,
            weight: this.state.weight,
            image: this.state.image,
            diet: carnivore
        }
        this.props.clickHandler(newSpecies);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}/>
                
                <label htmlFor="weight">Weight</label>
                <input 
                    type="text" 
                    id="weight" 
                    name="weight" 
                    value={this.state.weight} 
                    onChange={this.handleChange}
                />

                <label htmlFor="image">Image</label>
                <input 
                    type="textarea" 
                    id="image" 
                    name="image" 
                    value={this.state.image} 
                    onChange={this.handleChange}
                />
                
                {/* if they have the same name Then what actually matters is the Value, which is not set by react.*/}
                <label htmlFor="herbivore">Herbivore</label>
                <input 
                    type="radio" 
                    id="herbivore" 
                    name="diet" 
                    value="herbivore"
                    onChange={this.handleChange}
                    checked
                    />
                
                <label htmlFor="carnivore">Carnivore</label>
                <input 
                    type="radio" 
                    id="carnivore" 
                    name="diet" 
                    value="carnivore"
                    onChange={this.handleChange}/>
                
                {/* Don't need onClick here because it's a form listening with onSubmit */}
                <button>Submit</button>
            </form>
        )
    }
}

export default NewSpeciesForm;