//this is the url that you will use to fetch data from the API:
const url =
  "https://secret-ocean-49799.herokuapp.com/http://smashlounge.com/api/chars/all";

//TRY FOLLOWING ALONG WITH THE HARRY POTTER PROJECT VIDEO TO COMPLETE THE FOLLOWING STEPS:
//KEEP IN MIND THAT THESE PROJECTS AREN'T EXACTLY THE SAME, SO THERE WILL BE A COUPLE THINGS YOU HAVE TO DO DIFFERENTLY.

//STEP 1<---------------------------FETCH DATA------------------------------->
fetch(url)
.then((response) => {
  return response.json()
})
.then((characters) => {
  console.log(characters)
  //STEP 2<--------------POPULATE DROPDOWN WITH DATA FROM API------------------>
let dropdown = document.querySelector("select")

for(let character of characters) {
  const option = document.createElement("option")
  option.setAttribute("value", character.name)
  option.textContent = character.name
  dropdown.append(option)
}
//STEP 3<--------------DISPLAY INFO FOR SELECTED CHARACTER------------------->
let selectedCharacter
const description =  document.querySelector("#display-info")
const leaveReview = document.querySelector("#review")
const label = document.createElement("label")
leaveReview.prepend(label)

dropdown.addEventListener("change", (event) => {
  event.preventDefault()
  
  characters.forEach((character) => {
    if (character.name === event.target.value) {
      selectedCharacter = character
      console.log(selectedCharacter)
      description.innerHTML = `<h3>Name: ${selectedCharacter.name}</h3>
      <h3>Weight Ranking: ${selectedCharacter.weight}</h3>
      <p>${selectedCharacter.guide}</p>
      `
      label.innerHTML = `Leave a review for <strong>${selectedCharacter.name}</strong>`
    }
  });
})
  //STEP 4<-----------LEAVE A REVIEW FOR SELECTED CHARACTER-------------------->
const form = document.querySelector("#review")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  const li = document.createElement("li")
  const input = document.querySelector("#written")
  const ul = document.querySelector("ul")
  li.innerHTML = `<strong>${selectedCharacter.name}:</strong> ${input.value}`
  ul.append(li)
  event.target.reset()

})
})
