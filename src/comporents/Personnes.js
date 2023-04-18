import { useState } from "react"

export default function Personnes() {

    const [personnes] = useState([
        { id: 1, nom: "Geoffrey le 2ème meilleur", photo: process.env.PUBLIC_URL + '/personnes/Geoffrey.png' },
        { id: 1, nom: "Julien le meilleur", photo: process.env.PUBLIC_URL + '/personnes/Julien.png' },
        { id: 1, nom: "Artur", photo: process.env.PUBLIC_URL + '/personnes/Artur.png' },
        { id: 1, nom: "Amaury", photo: process.env.PUBLIC_URL + '/personnes/Amaury.png' }
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