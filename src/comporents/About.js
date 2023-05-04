import Personnes from "./Personnes";

export default function About(){
    return <div className='about' >
    <h2 className='boite'>À propos :</h2>
    <p className="boite">Le collectif Cactus est un projet vaste et encore indéfini nous unissant sous la bannière de ce concept, tenter, produire, expérimenter, apprendre. </p>
    <Personnes></Personnes>
</div>
}