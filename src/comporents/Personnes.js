import { useState } from "react"

export default function Personnes() {

    const [personnes] = useState([
        { id: 1, nom: "Geoffrey", photo: "https://avatars.githubusercontent.com/u/79169647?v=4" },
        { id: 1, nom: "Julien", photo: "https://github.com/Attadeurtia/Collectif-Cactus-website/blob/main/public/personnes/smallthief.png?raw=true" },
        { id: 1, nom: "Artur", photo: "https://raw.githubusercontent.com/Attadeurtia/Collectif-Cactus-website/main/public/personnes/arturppv5.png" },
        { id: 1, nom: "Amaury", photo: "https://github.com/Attadeurtia/Collectif-Cactus-website/blob/main/public/personnes/Amaury.png?raw=true" }
    ])

    return <div className='Personnes'>
        {personnes.map((personnes) => (
            <div class="itemPersonne" key={personnes.id}>
                <img src={personnes.photo} alt="pdp" ></img>
                <h3>{personnes.nom}</h3>
            </div>
        ))}
    </div>
}