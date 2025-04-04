/**
<div class="blog-post">
<div class="left-post"><img src="./Capture d'écran 2024-10-23 220604.png" alt=""></div>
<div class="right-post">
    <div class="entete">
        <h3>Titre du truc</h3>
        <p class="post-date">01-04-2025</p>
    </div>
    <p class="post-content">blablabla blebleble blublublu HA blublublu lingaguliguliguliguata lingangu lingangu</p>
</div>
</div>
 */

export default class Photo{
    images;
    constructor(){
        this.images = [
            {id: 1, image: "./img/arc_de_triomphe.jpg", date: "30-03-2025", titre: "l'Arc de triomphe", text: ""},
            {id: 2, image: "./img/assemblee_nationale.jpg", date: "30-03-2025", titre: "l'Assemblée Nationale", text: ""},
            {id: 3, image: "./img/atlantique.jpg", date: "01-04-2025", titre: "Survol de l'atlantique", text: ""},
            {id: 4, image: "./img/avion1.jpg", date: "31-03-2025", titre: "Mon premier avion", text: ""},
            {id: 5, image: "./img/avion2.jpg", date: "01-04-2025", titre: "Mon deuxième avion", text: ""},
            {id: 6, image: "./img/bresil.jpg", date: "01-04-2025", titre: "Cote brésilienne", text: ""},
            {id: 7, image: "./img/bresil2.jpg", date: "01-04-2025", titre: "Foret brésilenne", text: "Je suis pas sur de si c'est l'Amazonie ou pas"},
            {id: 8, image: "./img/bus_santiago_vina_palmier.jpg", date: "02-04-2025", titre: "Photo de mon trajet Santiago - Vina del Mar", text: ""},
            {id: 9, image: "./img/chat_casa_colores.jpg", date: "02-04-2025", titre: "Petit chat dans l'entrée de la où je loge", text: ""},
            {id: 10, image: "./img/chat_vue_valparaiso.jpg", date: "03-04-2025", titre: "Chat devant une jolie vue sur Valparaiso", text: ""},
            {id: 11, image: "./img/en_face_du_pantheon.jpg", date: "30-03-2025", titre: "Vue de la tour Eiffel depuis le Panthéon", text: ""},
            {id: 12, image: "./img/escalier_valparaiso.jpg", date: "02-04-2025", titre: "Escalier pour arriver à mon logement", text: ""},
            {id: 13, image: "./img/flocon_hublot.jpg", date: "01-04-2025", titre: "Des flocons sur mon hublot", text: ""},
            {id: 14, image: "./img/graf.jpg", date: "30-03-2025", titre: "Grafiti avec le surnom de mon petit frere", text: ""},
            {id: 15, image: "./img/grand_palais.jpg", date: "30-03-2025", titre: "Grand Palais de Paris", text: ""},
            {id: 16, image: "./img/IMG_20250330_131218.jpg", date: "", titre: "", text: ""},
            {id: 17, image: "./img/IMG_20250401_224945.jpg", date: "", titre: "", text: ""},
            {id: 18, image: "./img/Jeff_Koons_Tulips.jpg", date: "30-03-2025", titre: "Tulipes de Jeff Koons devant le Grand Palais", text: ""},
            {id: 19, image: "./img/metro_val_RCDG.jpg", date: "01-04-2025", titre: "Métro VAL dans l'aéroport Charle de Gaule", text: ""},
            {id: 20, image: "./img/montagne.jpg", date: "02-04-2025", titre: "Montagne sur mon trajet Santiago - Vina del Mar", text: ""},
            {id: 21, image: "./img/montagne_chili.jpg", date: "02-04-2025", titre: "Montagne sur mon trajet Santiago - Vina del Mar", text: ""},
            {id: 22, image: "./img/montagne_santiago_vina.jpg", date: "02-04-2025", titre: "Montagne sur mon trajet Santiago - Vina del Mar", text: ""},
            {id: 23, image: "./img/montagne_santiago_vina2.jpg", date: "02-04-2025", titre: "Montagne sur mon trajet Santiago - Vina del Mar", text: ""},
            {id: 24, image: "./img/montmartre.jpg", date: "30-03-2025", titre: "Montmartre", text: ""},
            {id: 25, image: "./img/notre_dame.jpg", date: "29-03-2025", titre: "Notre Dame de Paris", text: ""},
            {id: 26, image: "./img/oblelisque.jpg", date: "30-03-2025", titre: "Obélisque à Concorde", text: ""},
            {id: 27, image: "./img/oblelisque_arc_triomphe.jpg", date: "30-03-2025", titre: "l'Obélisque avec l'Arc de triomphe derrière", text: ""},
            {id: 28, image: "./img/orval.jpg", date: "30-03-2025", titre: "Delicieuse Orval", text: ""},
            {id: 29, image: "./img/pied_tour_eiffel.jpg", date: "30-03-2025", titre: "Tour Eiffel", text: ""},
            {id: 30, image: "./img/pied_tour_eiffel_arbres.jpg", date: "30-03-2025", titre: "Tour Eiffel", text: ""},
            {id: 31, image: "./img/pont_alexandre_III_grand_palais.jpg", date: "30-03-2025", titre: "Pont Alexandre III avec le Grand Palais derrière", text: ""},
            {id: 32, image: "./img/pont_alexandre_III_invalides.jpg", date: "30-03-2025", titre: "Pont Alexandre III et les Invalides derrière", text: ""},
            {id: 33, image: "./img/pont_alexandre_II_tour_eiffel.jpg", date: "30-03-2025", titre: "Pont Alexandre III et la tour Eiffel derrière", text: ""},
            {id: 34, image: "./img/rue _de_paris.jpg", date: "30-03-2025", titre: "Une rue dans Paris", text: "Jsp pourquoi j'ai pris la photo"},
            {id: 35, image: "./img/rue_vaugirard.jpg", date: "30-03-2025", titre: "Rue Vaugirard", text: "Comme au Monopoly"},
            {id: 36, image: "./img/seine.jpg", date: "30-03-2025", titre: "La Seine", text: ""},
            {id: 37, image: "./img/seine_tour_eiffel.jpg", date: "30-03-2025", titre: "La Seine et la tour Eiffel derrière", text: ""},
            {id: 38, image: "./img/statue_liberte_jardin_luxembourg.jpg", date: "30-03-2025", titre: "Statue de la liberté du Jardin du Luxembourg", text: ""},
            {id: 39, image: "./img/tour_eiffel2.jpg", date: "30-03-2025", titre: "Tour Eiffel depuis une belle rue", text: ""},
            {id: 40, image: "./img/tour_eiffel3.jpg", date: "30-03-2025", titre: "Tour Eiffel depuis le quai Jacques Chirac", text: ""},
            {id: 41, image: "./img/tour_eiffel_1.jpg", date: "30-03-2025", titre: "Tour Eiffel depuis le champ de Mars", text: ""},
            {id: 42, image: "./img/trajet_santiago_vina.jpg", date: "01-04-2025", titre: "Trajet Santiago - Vina del Mar", text: ""},
            {id: 43, image: "./img/trocadero.jpg", date: "30-03-2025", titre: "Le Trocadéro", text: ""},
            {id: 44, image: "./img/vue_valparaiso.jpg", date: "01-04-2025", titre: "Vue de Valparaiso", text: ""},
            {id: 45, image: "./img/wifi.jpg", date: "", titre: "", text: ""},
            {id: 46, image: "./img/zach_assembee_nationale.jpg", date: "", titre: "", text: ""},
            {id: 47, image: "./img/zach_tayo_place_concorde.jpg", date: "", titre: "", text: ""}
          ];
          
    }
    getHTML(){
        let html = `<div class="photos">`;
        this.images.forEach(image => {
            if(image.date != ""){
                html += `<div class="photo">
                        <div class="image"><img src="${image.image}" alt="${image.titre}"></div>
                        <div class="data">
                            <div class="titre">
                                <h3>${image.titre}</h3>
                                <p class="image-date">${image.date}</p>
                            </div>
                            <p class="image-content">${image.text}</p>
                        </div>
                        </div>`;
            }
        });
        return html;
    }
}