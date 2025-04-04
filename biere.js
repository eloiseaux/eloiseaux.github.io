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

export default class Biere{
    bieres;
    constructor(){
        this.bieres = [
            {id:1,image:"./bieres/orval.jpg",titre:"Orval"},
            {id:2,image:"./bieres/austral_patagonia.jpg",titre:"Austral Patagonia"},
        ];
    }
    getHTML(tri){
        let html = `
        <div class="bieres">`;
        this.bieres.forEach(biere => {
            html += `<div class="biere">
                        <div class="img-biere"><img src="${biere.image}" alt="${biere.titre}"></div>
                        <div class="nom-biere">
                            <h3>${biere.titre}</h3>
                        </div>
                    </div>`;
        });
        return html;
    }
}