import Blog from "./blog.js";
import Photo from "./photo.js";
import Biere from "./biere.js";

const blog = new Blog();
const photo = new Photo();
const biere = new Biere();

const content = document.querySelector(".content");

const accueilButton = document.querySelector(".home");
const blogButton = document.querySelector(".blog");
const beerButton = document.querySelector(".beer");
const picsButton = document.querySelector(".pics");

accueilButton.addEventListener("click", accueilFunction);
function accueilFunction(event) {
    event.preventDefault();
    content.innerHTML = `<h1>Bienvenue la team</h1>
                        <div class="contenu">
                            <div class="accueil">
                                <div class="text-accueil">
                                    Coucou la team, petit site internet pour vous partager mon voyage. Je vais essayer de le mettre a jour régulierement, et d'y mettre les photos et tout
                                </div>
                            </div>  
                        </div>`;
}

blogButton.addEventListener("click", blogFunction);
function blogFunction(event) {
    event.preventDefault();
    triBlog("Chronologique")
}

function triBlog(tri){
    content.innerHTML = blog.getHTML(tri);
    document.querySelector("select").value = tri;
    document.querySelector(".tri-blog").addEventListener("submit",(event)=>{
        event.preventDefault();
        triBlog(document.querySelector("select").value);
    });
}

beerButton.addEventListener("click", beerFunction);
function beerFunction(event) {
    event.preventDefault();
    content.innerHTML = biere.getHTML();
}

picsButton.addEventListener("click", picsFunction);
function picsFunction(event) {
    event.preventDefault();
    content.innerHTML = photo.getHTML();
}