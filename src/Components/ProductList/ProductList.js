import Product from "../Product/Product";

import sample from "../../img/sample.jpg";

const productListStyle = {
    'display':'flex',
    'width':'70%',
    // 'height':'90%',
    'justifyContent':'space-evenly',
    'flexWrap':'wrap',
    'marginTop':'10px',
    'heigth': 'fit-content',
    
}

const productDescSerious = 
`En raison de goulots d'étranglement et de retards dans les chaînes d'approvisionnement mondiales, il est possible que le fabricant ait remplacé certains composants des spécifications d'origine par des composants de qualité au moins équivalente, voire supérieure. Dans certains cas, le vélo livré peut différer des images.

Serious Eight Ball - Pour les débutants et les cyclistes amateurs de parcours relativement faciles, le circuit Eight Ball en Californie du Sud est une destination de rêve : situé au coeur de la nature, ce terrain de jeu immense permet aux cyclistes d'évoluer dans un paysage splendide.

C'est exactement pour ce type de circuit qu'a été conçu le modèle Eight Ball. La géométrie du cadre en aluminium 6061 garantit une conduite sportive et joueuse, tout en offrant une position de conduite confortable. Ses composants Shimano de grande qualité, tels que la transmission 24 vitesses Shimano Acera, le dérailleur avant, la cassette et les leviers de changement de vitesse Shimano Rapidfire, assurent un plaisir de conduite durable. Le Serious Eight Ball présente d'autres avantages : des freins V-brake mordants et une fourche suspendue Suntour avec débattement de 80 mm, qui assurent une sécurité optimale et un vrai confort en descente. Son équipement est complété par des roues 27,5" stables avec jantes à chambre creuse et boîtier de pédalier à cartouche sans entretien.

Le Serious Eight Ball est donc le compagnon idéal pour s'éclater en pleine nature !
`;
    
const productDescCube = `En raison de goulots d'étranglement et de retards dans les chaînes d'approvisionnement mondiales, il est possible que le fabricant ait remplacé certains composants des spécifications d'origine par des composants de qualité au moins équivalente, voire supérieure. Dans certains cas, le vélo livré peut différer des images.

Nature est avant tout une question de liberté sur deux roues, que ce soit pour une balade détendue en ville ou pour une longue randonnée à vélo le week-end. Cube a misé ici particulièrement sur le confort et la fiabilité et a équipé le vélo d'une fourche suspendue Suntour qui aplanit souverainement même les conditions de route les plus rudes et les cahots sur les chemins de gravier. Son dérailleur x Shimano est très facile à utiliser et, grâce à sa large gamme de rapports, il fournit une assistance de pointe sur tous les itinéraires. La sécurité nécessaire est assurée par les puissants freins à disque hydrauliques, qui agissent avec force dans toutes les conditions météorologiques et arrêtent le vélo de manière contrôlée. Et alors ? La prochaine tournée est-elle déjà prévue ?

Plus un vélo est léger, plus il se comporte bien. C'est pourquoi le cadre Nature est également composé de tubes d'aluminium à double confinement, ce qui permet de maintenir son poids à un niveau bas sans pour autant perdre en résistance et en longévité. Il offre également suffisamment d'espace pour des pneus jusqu'à 50 mm de large et donc un meilleur confort de conduite, ainsi qu'un tube de direction conique pour une précision de direction 1a. En plus des raccords de tubes conçus selon le procédé Smooth Welding, d'élégants points de montage pour le porte-bagages et les garde-boue soulignent le look gracieux et permettent de modifier et d'adapter facilement le vélo aux besoins individuels. Et il va sans dire que le châssis - comme tous ses cadres d'ailleurs - a passé avec brio les sévères tests de sécurité maison. Cela rend la conduite encore plus détendue. Et plus longtemps ! `;
const productDescOrbea =`Take it too far
Partout, on peut trouver des avantages en termes de performances, de petites améliorations pour les grands vélos, et oui, un peu de bessoin en fait partie. Mais jusqu'où est-ce que c'est trop loin ? Les objectifs d'Orbea, ses concurrents et son attitude créative la poussent toujours vers la victoire. Et une fois que l'on connaît le goût sucré du succès, on en veut toujours plus. Il devient obsédé par l'idée d'être le meilleur. Tu le sens dans ton cœur, dans tes poumons, dans tes jambes - et tu le reconnais à nos roues. Ce n'est qu'en perfectionnant toujours plus les plus petits détails et en laissant derrière nous les limites de ce qui semble réalisable qu'ils pourront atteindre leurs grands objectifs.

Structure dynamique
La majeure partie des forces de torsion et des charges latérales est absorbée par la partie inférieure du cadre. Le tube de direction, le tube diagonal et les bases résistent aux sollicitations et transmettent efficacement la puissance à la roue arrière. Plus le cadre est résistant à la torsion, plus la puissance est transmise directement des jambes au sol et plus la transmission de la force est immédiate.

Confort
Le nouvel Alma dispose par exemple de haubans plus fins. Grâce à une section et un diamètre réduits, ils offrent un support gracieux au tube de selle. Le tube supérieur, quant à lui, est particulièrement robuste à l'avant du tube de direction afin d'augmenter la résistance à la torsion. En revanche, vers l'arrière, le tube supérieur se rétrécit rapidement`;
const productDescHaibike=`sphalte ou tout-terrain ? Avec le nouveau HardSeven 5, vous n'avez pas à vous décider ! Parce que c'est un eMTB polyvalent et agile. Avec un débattement de 120 mm, des freins à disque percutants, des roues 27,5 agiles et le puissant moteur Bosch Performance Line avec batterie intégrée de 500 Wh, vous vous amuserez beaucoup sur la route et en dehors. En route pour de nouvelles aventures !`
function ProductList(){
    return (
        <>
            <div style={productListStyle}>
                <Product name="Serious" price="629,0€" desc={productDescSerious} gender="Homme" weight="14kg" year="2022" refprod="921647" image="https://images.internetstores.de/products/1293136/02/cd5599/serious-rockville-disc-275-white-blue-red-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"></Product>
                <Product name="Cube" price="849.0€" desc={productDescCube} gender="Femme" weight="22kg" year="2022" refprod="927614" image="https://images.internetstores.de/products/1483976/02/d51f17/cube-aim-pro-greynflashyellow-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"></Product>
                <Product name="Orbea" price="1.349,0€" desc={productDescOrbea} gender="Mixte" weight="11kg" year="2022" refprod="927461" image="https://images.internetstores.de/products/1490456/02/6ab900/orbea-onna-50-brick-red-green-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"></Product>
                <Product name="Haibike" price="2.700,0€" desc={productDescHaibike} gender="Homme" weight="25kg" year="2022" refprod="921764" image="https://images.internetstores.de/products/1376793/02/2e1022/haibike-hardseven-5-honey-teal-matte-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"></Product>
            </div>
        </>
    );
}
export default ProductList;