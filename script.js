

// NASA APOD API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 images from NASA API
async function getNasaPictures (){
    try{
        const response = await fetch(apiUrl);
        resultsArray = await response.json();
        console.log(resultsArray);
    } catch (error){
        // Catch error here
    }
}

//  on Load
getNasaPictures();