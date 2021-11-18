import { Component } from "react";

class Park extends Component {
    constructor() {
        super()
        this.state = {
            treeCount: 0,
            goatCount: 0
        }
    }

    addGoat = () => {
        // use + 1 for state values vs ++
        this.setState({
            goatCount: this.state.goatCount + 1 
        })
    }
    addTree = () => {
        // use + 1 for state values vs ++
        this.setState({
            treeCount: this.state.treeCount + 1 
        })
    }

    // Set up method to 
    nextDay = (goatCost, treeCost) => {
        this.setState({
            goatCount: this.state.goatCount - goatCost,
            treeCount: this.state.treeCount - treeCost
        })
    }
    //ORR create a new function that calls nextDay to calculate total cost
    // sumFunc =() => {
    //     nextDay 
    // }

    render() {
        let goatCost = 0;
        let treeCost = 0
        this.props.park.forEach((dino) => {
            dino.carnivore ? goatCost+= Math.ceil(dino.weight / 5) : treeCost += Math.floor(dino.weight / 5 + 1)
        })
    
        const list = []
        //You can also refactor this into object to get counts
        this.props.park.forEach((dino) => {
            const species = list.find((species) => species.name === dino.name);
            species ? species.count++ : list.push({name: dino.name, count: 1 })
        })
    
        return (
            <div>
                <h1>Your Park</h1>
                {/* You can also make the below class components */}
                <div className="inventory"> 
                    <h3>Inventory</h3>
                    <p>{this.state.treeCount}  trees, {this.state.goatCount} goats</p>
                    <button className="add-tree" onClick={this.addTree} > Add Tree </button>
                    <button className="add-goat" onClick={this.addGoat} > Add Goat </button>
                </div>

                <div className="cost">
                    <h3>Food per Day</h3>
                    <p>{goatCost} goats, {treeCost} trees</p>
                    {/* Call am anonymous funtion if you want to call on a function with rquired  */}
                    <button className="next-day" onClick={() => this.nextDay(goatCost, treeCost)}>Next Day</button>
                </div>

                <div className="dinosaurs">
                    <h3>Dinosaurs:</h3>
                    <div>
                        {list.map((species) => <p key={species.name}>{species.name}: x{species.count}</p>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Park