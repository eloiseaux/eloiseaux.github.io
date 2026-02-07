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

export default class Blog{
    posts;
    constructor(){
        this.posts = [
            {id:1,image:"./img/notre_dame.jpg",titre:"Arrivée à Paris",date:"29-03-2025",text:"Vu que mon avion partait de Paris, je me suis dit pourquoi pas un petit week-end a Paris avant ? Du coup on est allé a Paris avec Zach et Octavio, et le soir meme on c'est fait une petite ballade."},
            {id:2,image:"./img/seine_tour_eiffel.jpg",titre:"Deuxieme jour à Paris",date:"30-03-2025",text:"Après avoir passé la nuit à Paris, on refait une ballade à paname. Cette fois ci on peut voir plus de batiment mais du coup c'étatit super épuisant. Le soir je suis allé dormir chez Jean ce goat."},
            {id:3,image:"./img/avion1.jpg",titre:"Troisième et dernier jour à paris",date:"31-03-2025",text:"Mon dernier jour à Paris, je dit au revoir à la grand mère de Jean avant de le rejoindre à sa fac pour manger avec ses amis. On passe un bout de l'aprem ensemble puis Jean m'accompagne jusqu'au RER ou je suis livrée à moi même en direction de l'aéroport. Après avoir passé les controles et attendu me voici enfin dans l'avion, vers 23h50 on décolle."},
            {id:4,image:"./img/bresil.jpg",titre:"Grosse merde de AirFrance",date:"01-04-2025",text:"On est le lendemain et je ne suis toujours pas au Chili mais bien de retour à Paris. Pourquoi ? Parce que l'avion était défaillant et a du faire demi tour après 3h de vol. Mais bon, après avoir repassé les controles je repars dans un nouvel avion flambant neuf. J'arrive le soir vers 22h à l'aéroport de Santiago où je dors dans un hotel."},
            {id:5,image:"./img/montagne_santiago_vina.jpg",titre:"Première journée au Chili",date:"02-04-2025",text:"Je me mets en route pour Valparaiso. Il est 10h j'ai toujours pas mangé. Je vais donc dans un restaurant (BeerCode) enface de la gare routière de l'aeroport. Je mange un completo avec une Austral Patagonia puis je prend un bus vers Pajaritos une seconde gare routiere. J'achete un ticket de bus pour Valparaiso, on me dit que je doit aller a Vina del Mar. Du coup j'y vais, je fais un beau trajet, et une fois a Vina del Mar, je prend un bus de ville pour Valparaiso. J'arrive a destination saine et sauve et je m'installe tranquillement."},
            {id:6,image:"./img/vue_valparaiso.jpg",titre:"Deuxieme jour au Chili",date:"03-04-2025",text:"J'ai pas fait grand chose ce jour la, surtout dormis, pris contact avec mon maitre de stage et fais une petite ballade dans Valparaiso"},
        ];
    }
    getHTML(tri){
        let html = `
        
        <form class="tri-blog">
        <label for="tri-blog">Trier:</label>
        <select name="tri" id="tri">
        <option value="Chronologique">Chronologique</option>
        <option value="AnteChronologique">AnteChronologique</option>
        </select> 
        <input type="submit" value="Appliquer">
        </form>

        <div class="posts">`;
        if(tri == "Chronologique"){
            this.posts.sort((a, b) => a.id - b.id);
        }else if(tri == "AnteChronologique"){
            this.posts.sort((a, b) => b.id - a.id);
        }
        let imageLeft = 1;
        this.posts.forEach(post => {
            if(imageLeft == 1){
                imageLeft = 0;
                html += `<div class="blog-post">
                        <div class="left-post"><img src="${post.image}" alt="${post.image}"></div>
                        <div class="right-post">
                            <div class="entete">
                                <h3>${post.titre}</h3>
                                <p class="post-date">${post.date}</p>
                            </div>
                            <p class="post-content">${post.text}</p>
                        </div>
                        </div>`;
            }else{
                imageLeft = 1;
                html += `<div class="blog-post">
                        <div class="left-post">
                            <div class="entete">
                                <h3>${post.titre}</h3>
                                <p class="post-date">${post.date}</p>
                            </div>
                            <p class="post-content">${post.text}</p>
                        </div>
                        <div class="right-post"><img src="${post.image}" alt="${post.image}"></div>
                        </div>`;
            }
        });
        return html;
    }
}