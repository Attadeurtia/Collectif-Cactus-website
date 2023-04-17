import { useState } from "react"

export default function ApplicationUnitaire() {

    const [personnes] = useState([
        { id: 1, nom: "Netflux", description: "Notre sélection de film, musique et série, à découvrir ou faire découvrir.", logo: "https://static-00.iconduck.com/assets.00/jellyfin-icon-512x512-jcuy5qbi.png" },
        { id: 2, nom: "Filebrowser", description: "Un stockage de documents, gratuit, illimité et sécurisé.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/2560px-Nextcloud_Logo.svg.png" },
        { id: 3, nom: "Blog", description: "Nous découvrir à travers de nombreux sujets qui nous passionne, et que nous partageons.", logo: "https://cdn-icons-png.flaticon.com/512/60/60736.png" },
        { id: 4, nom: "Jeux", description: "Nos dernières créations indépendantes, disponible sur Steam !", logo: "https://e7.pngegg.com/pngimages/49/992/png-clipart-steam-logo-computer-icons-steam-tuners-steam-miscellaneous-rim.png" },
        { id: 5, nom: "Atlas", description: "Nos créations musicales (MAO, groupe de musique ...)", logo: "https://w7.pngwing.com/pngs/208/848/png-transparent-musical-note-logo-clef-music-logo-design-other-text-musical-composition-thumbnail.png" },
        { id: 6, nom: "Cinémans", description: "À la manière d'AlloCiné ou SensCritique, notre site web dédié uniquement aux films et séries, à travers critiques, notes classement et bien plus encore.", logo: "https://tp4-cinemans.pages.dev/assets/logo/logo_white.svg" },
    ])

    return <div className='ApplicationUnitaire'>

        {personnes.map((personnes) => (
            <div class="itemApplication" key={personnes.id}>
                <img
                    src={personnes.logo} alt="pdp">
                </img>
                <h3>{personnes.nom}</h3>
                <p>{personnes.description}</p>
            </div>
        ))}
    </div>
}