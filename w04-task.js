/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile={
    name:'siahe guelable curtis',
    age:'25 years',
    photo:"w02-task/images/pic.jpg",
    favoriteFoods:[
        'rice',
        'sauce',
        'bread',
        'attieke'
    ],
    hobbies:[
        'basketball',
        'soccer',
        'volleyball',
        'swimming'
    ],
    placedLived:[],

};




/* Populate Profile Object with placesLive objects */

myProfile.placedLived.push(
    {
    place:'Cote Divoire, Abidjan',
    length:'2 years'
    },
    {
        place:'Ghana, Accra',
        length:'12 years',
    }

);







/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;
/* Name */

/* Photo with attributes */

const imgElement = document.getElementById('photo');

// Assign the value of the "photo" property as the src attribute
imgElement.src = myProfile.photo;

// Assign the value of the "name" property as the alt attribute
imgElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });


/* Hobbies List */
myProfile.hobbies.forEach(hobbie=>{
    let l=document.createElement('ul');
    l.textContent=hobbie;
    document.querySelector('#hobbies').appendChild(l);
})


/* Places Lived DataList */
let dlelement= document.getElementById('places-lived');
const placesLivedArray = myProfile.placedLived;
placesLivedArray.forEach(place => {
    let dt=document.createElement('dt');
    dt.textContent=place.place;

    const ddElement = document.createElement('dd');

    ddElement.textContent = place.length;

dlelement.appendChild(dt);
dlelement.appendChild(ddElement);

    
});





