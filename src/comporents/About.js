import Personnes from "./Personnes";

// quand on clique sur le bouton, on redirie vers une autre page


export default function About() {
    return <div className='about' >
        <h2 className='boite'>À propos :</h2>
        <p className="boite">Le collectif Cactus est un projet vaste et encore indéfini nous unissant sous la bannière de ce concept, tenter, produire, expérimenter, apprendre. </p>
        <Personnes></Personnes>
    </div>
}

