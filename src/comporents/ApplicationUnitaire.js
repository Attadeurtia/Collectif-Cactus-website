import { useState } from "react"

export default function ApplicationUnitaire() {

    const [application] = useState([
        { id: 1, nom: "Netflux", description: "Notre sélection de film, musique et série, à découvrir ou faire découvrir.", logo: "https://static-00.iconduck.com/assets.00/jellyfin-icon-512x512-jcuy5qbi.png", icon_description: "logo de jellyfin", url: "https://jellyfin.cactuserveur.duckdns.org" },
        { id: 2, nom: "Filebrowser", description: "Un stockage de documents, gratuit, illimité et sécurisé.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/2560px-Nextcloud_Logo.svg.png", icon_description: "logo de Nextloud", url: "https://filebrowser.cactuserveur.duckdns.org" },
        { id: 3, nom: "Blog", description: "Nous découvrir à travers de nombreux sujets qui nous passionne, et que nous partageons.", logo: "https://cdn-icons-png.flaticon.com/512/60/60736.png", icon_description: "logo de mon blog", url: "https://attadeurtia.github.io/blog" },
        { id: 4, nom: "Jeux", description: "Nos dernières créations indépendantes, disponible sur Steam !", icon_description: "logo de Steam", logo: "https://1.bp.blogspot.com/-51uIQ0bjkzk/Xsz-8Z94JCI/AAAAAAAAAl8/kxJ_yzEIVMw8A3zgF3MFg5BbFPD0icZMQCLcBGAsYHQ/s1600/steam-logo-transparent.png" },
        { id: 5, nom: "Atlas", description: "Nos créations musicales (MAO, groupe de musique ...)", icon_description: "logo du groupe de musique Atlas", logo: "https://cdn.pixabay.com/photo/2013/07/13/12/16/note-159509_960_720.png" },
        { id: 6, nom: "Cinémans", description: "À la manière d'AlloCiné ou SensCritique, notre site web dédié uniquement aux films et séries, à travers critiques, notes classement et bien plus encore.", icon_description: "logo de Cinémans", logo: "https://tp4-cinemans.pages.dev/assets/logo/logo_white.svg", url: "https://tp4-cinemans.pages.dev/" },
    ])

    return <div className='ApplicationUnitaire'>

        {application.map((application) => (
            <div class="itemApplication boite" key={application.id} onClick={() => window.location.href = application.url}>
                <img
                    src={application.logo} alt={application.icon_description}>
                </img>
                <h3>{application.nom}</h3>
                <p>{application.description}</p>
            </div>
        ))

        }
    </div>
}