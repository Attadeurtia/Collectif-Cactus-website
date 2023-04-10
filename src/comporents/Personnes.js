import { useState } from "react"

export default function Personnes() {

    const [personnes] = useState([
        { id: 1, nom: "Geoffrey", photo: "https://avatars.githubusercontent.com/u/79169647?v=4" },
        { id: 1, nom: "Julien", photo: "https://www.apyart.com/3717-large_default/violet-fat-500ml.jpg" },
        { id: 1, nom: "Artur", photo: "../../src/assets/personnes/arturppv5.png" },
        { id: 1, nom: "Amaury", photo: "../assets/personnes/Amaury.png" }
    ])

    return <div className='Personnes'>

        {personnes.map((personnes) => (
            <h3 key={personnes.id}>
                <img
                    src={personnes.photo} >
                </img>
                {personnes.nom}
            </h3>
        ))}
    </div>
}