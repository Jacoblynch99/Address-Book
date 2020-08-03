let arrayOfPeople

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  getPeople()
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPeople = () => {
  fetch("https://randomuser.me/api/?results=10&inc=gender,name,nat,picture")
    .then((res) => res.json())
    .then((people) => (arrayOfPeople = people.results))
}

const displayPeople = () => {
  const allPosts = document.getElementById("all-posts")
  arrayOfPeople.map((post, index) => {
    const li = document.createElement("li")
    const img = document.createElement("img")
    img.src = post.picture.large
    const text = document.createTextNode(
      `Name: ${post.name.first} ${post.name.last}`
    )
    li.appendChild(text)
    allPosts.append(li)
    allPosts.append(img)
  })
}

// This function logs the results in your browser's console
const consolePeople = () => {
  console.log(arrayOfPeople)
}
