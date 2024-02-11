// w05-task.js

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* Function: displayTemples */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement('article');
        
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;
        
        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.location;
        
        articleElement.appendChild(h3Element);
        articleElement.appendChild(image);

        templesElement.appendChild(articleElement);
    });
}

/* Function: getTemples */
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (response.ok) {
            templeList = await response.json();
            displayTemples(templeList);
        } else {
            throw new Error('Failed to fetch temple data');
        }
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
}

getTemples().then(() => {
    console.log(templeList);
});

/* Function: reset */
const reset = () => {
    templesElement.innerHTML = '';
}

/* Function: filterTemples */
const filterTemples = (temples) => {
    reset();

    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        default:
            displayTemples(temples);
            break;
    }
}

document.getElementById('filtered').addEventListener('change', () => {
    filterTemples(templeList);
});



