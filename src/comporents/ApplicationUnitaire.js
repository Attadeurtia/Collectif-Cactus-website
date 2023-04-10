import { useState } from "react"

export default function ApplicationUnitaire() {

    const [personnes] = useState([
        { id: 1, nom: "Netflux", description: "Notre sélection de film, musique et série, à découvrir ou faire découvrir ", photo: "https://avatars.githubusercontent.com/u/79169647?v=4" },
        { id: 1, nom: "Filebrowser",description: "Notre sélection de film, musique et série, à découvrir ou faire découvrir ", photo: "https://www.apyart.com/3717-large_default/violet-fat-500ml.jpg" },
        { id: 1, nom: "Blog",description: "Notre sélection de film, musique et série, à découvrir ou faire découvrir ", photo: "https://misterclick.files.wordpress.com/2008/03/cowboy-3-4.jpg" },
        { id: 1, nom: "Jeux",description: "Notre sélection de film, musique et série, à découvrir ou faire découvrir ", photo: "https://media.timeout.com/images/103671590/750/562/image.jpg" }
    ])

    return <div className='ApplicationUnitaire'>

        {personnes.map((personnes) => (
            <h3 key={personnes.id}>
                <img
                    src={personnes.photo} >
                </img>
                {personnes.description}
                 <p>{personnes.nom}</p>
            </h3>
        ))}
    </div>
}