let arrayOfPeople

window.onload = function () {
  getPeople()
}

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
      `${post.name.first} ${post.name.last}
      `
    )
    li.appendChild(text)
    allPosts.append(li)
    allPosts.append(img)
  })
}

const consolePeople = () => {
  console.log(arrayOfPeople)
}
