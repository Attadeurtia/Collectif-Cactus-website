import { useState } from "react"

export default function Personnes() {

    const [personnes] = useState([
        { id: 1, nom: "Geoffrey", photo: process.env.PUBLIC_URL + '/personnes/Geoffrey.png', icon_description: "logo de l'avatar de Geoffrey", url: "https://www.linkedin.com/in/geoffrey-pos%C3%A9-299709200/" },
        { id: 1, nom: "Julien", photo: process.env.PUBLIC_URL + '/personnes/Julien.png', icon_description: "logo de l'avatar de Julien", url: "https://github.com/smalltheif" },
        { id: 1, nom: "Artur", photo: process.env.PUBLIC_URL + '/personnes/Artur.png', icon_description: "logo de l'avatar de Artur", url: "https://www.instagram.com/arturchf/" },
        { id: 1, nom: "Amaury", photo: process.env.PUBLIC_URL + '/personnes/Amaury.png', icon_description: "logo de l'avatar de Amaury", url: "https://www.linkedin.com/in/amaury-lenain/" },
    ])

    return <div className='Personnes'>
        {personnes.map((personnes) => (
            <div class="itemPersonne boite" key={personnes.id} onClick={() => window.location.href = personnes.url}>
                <img src={personnes.photo} alt="pdp" ></img>
                <h3>{personnes.nom}</h3>
            </div>
        ))}
    </div>
}