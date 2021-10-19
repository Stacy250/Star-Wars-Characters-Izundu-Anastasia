
// Assigning the API URL to a variable called API_URL
const API_URL = "https://swapi.dev/api/people";

const randomStarWars = document.getElementById("random_star");
// create a function called getStarWars, the using es6 to fetch data, using the word fetch, then assign your res to be converted to a json.
function getStarWars() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            // declare a variable called inputs, this will get the concat of both our fetched data and results.
            let inputs = data.results;
            //  result was assigned to an empty string so that it could be able to hold other result after we must have looped through our inputslength.
            let result = '';
            console.log(inputs)
            for (let i = 0; i < inputs.length; i++) {
                let imgSrc = `images/img${i + 1}.jpg`
                result += `
            <div class="character-card" id=pic_1>
                <div class="image-container">
                    <img class="character-image" src =${imgSrc} rel="a computer system"> 
                </div>
                <div class="user-name-container" id="user_name${i}"> 
                    <button class="name-btn" onclick="displayChar('alert${i}')"><h3>${inputs[i].name}</h3></button>
                </div>
                <div class="user-details-container" id="alert${i}" style="display: none;">
                    <p>name: ${inputs[i].name}</p>
                    <p>height: ${inputs[i].height}</p>
                    <p>gender: ${inputs[i].gender}</p>
                </div>
            </div>
    `
            }
            randomStarWars.innerHTML = result
        })
}


function displayChar(id) {
    console.log(id)
    const displayPic = document.getElementById(id)
    console.log(displayPic)
    if (displayPic.style.display == 'block' ) { displayPic.style.display = 'none' }
    else {
        displayPic.style.display = 'block'
        
    }
    
}


getStarWars();