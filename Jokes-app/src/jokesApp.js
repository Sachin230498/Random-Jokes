function setJokes(data) {
  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div
  const jokecontainer = document.getElementById("joke-container")
   const div1 = document.createElement("div")
   jokecontainer.append(div1)
  const pp = document.createElement("p")
  pp.setAttribute("class", "joke-text")
  div1.appendChild(pp)
}

let getRandomJoke = async () => {
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure
   try {
   const url = "https://api.chucknorris.io/jokes/random";
   const res = await fetch(url)
  const data = await res.json();
  const joke= document.getElementsByClassName("joke-text").innerText = data.value
console.log(joke)
}
    catch (error) {
      console.log( "something went wrong", error)
   }
  }

let getJokeByCategory = async (event) => {
  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure
};
window.onload = function () {
  // add click event to button
  // add change event to select tag
  var generateBtn = document.getElementById('get-jokes-data');
generateBtn.addEventListener('click',getRandomJoke);
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    // getJokeByCategory,
  };
}
