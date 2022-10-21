// creare un array di oggetti per rappresentare i membri del team.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const membersArray = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: " Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
        },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
        }
]	


// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
console.log(membersArray)

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const object_array_container = document.getElementById("object_array_container");

for(let i = 0; i < membersArray.length; i++){
    const thisMember = membersArray[i];
    console.log(thisMember);
    for (let key in thisMember){
        console.log(key, thisMember[key])
    }
    object_array_container.innerHTML += `<li>${thisMember["nome"]}<ul><li> ruolo ${thisMember["ruolo"]}</li><li><img src="img/${thisMember["foto"]}" alt="">$</li></ul></li>`;
}