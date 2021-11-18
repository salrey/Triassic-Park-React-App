const Park = (props) => {
    let goatCost = 0;
    let treeCost = 0
    props.park.forEach((dino) => {
        dino.carnivore ? goatCost+= Math.ceil(dino.weight / 5) : treeCost += Math.floor(dino.weight / 5 + 1)
    })

    const list = []
    props.park.forEach((dino) => {
        const species = list.find((species) => species.name === dino.name);
        species ? species.count++ : list.push({name: dino.name, count: 1 })
    })

    return (
        <div>
            <h1>Your Park</h1>
            <h3>Food per Day</h3>
            <p>{goatCost} goats, {treeCost} trees</p>
            <h3>Dinosaurs:</h3>
            <div>
                {list.map((species) => <p key={species.name}>{species.name}: x{species.count}</p>)}
            </div>
        </div>
    )
}

export default Park