let arrayOfPeople

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  getPeople()
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPeople = () => {
  fetch(
    "https://randomuser.me/api/?results=10&inc=name,location,phone,email,dob,picture"
  )
    .then((res) => res.json())
    .then((people) => (arrayOfPeople = people.results))
}

const displayPeople = () => {
  const allPosts = document.getElementById("all-posts")
  arrayOfPeople.map((post) => {
    console.log(post)
    const li = document.createElement("li")
    const img = document.createElement("img")
    const btn = document.createElement("button")
    const bText = document.createTextNode("More Info")
    const myPara = document.createElement("p")
    myPara.setAttribute("id", "more-info")
    myPara.style.display = "none"
    img.src = post.picture.large
    li.setAttribute("id", "list")
    btn.setAttribute("onclick", "moreInfo(this)")
    // btn.addEventListener("onclick", moreInfo)
    btn.setAttribute("id", "btn")
    const text = document.createTextNode(
      `Name: ${post.name.first} ${post.name.last}`
    )
    const innerText = document.createTextNode(`Phone: ${post.phone}`)
    li.appendChild(text)
    btn.appendChild(bText)
    allPosts.append(li)
    allPosts.append(img)
    allPosts.append(btn)
    myPara.appendChild(innerText)
    li.appendChild(myPara)
  })
}

const moreInfo = () => {
  console.log("Hello")
  const x = document.getElementById("more-info")
  if (x.style.display === "none") {
    x.style.display = "block"
  } else {
    x.style.display = "none"
  }
}

// const moreInfo = (post) => {
//     const li = document.createElement("li")
//     const text = document.createTextNode(`${post.gender}`)
//     li.appendChild(text)
//     btn.parentNode.insertBefore(li, btn.nextSibling)
//   })

// This function logs the results in your browser's console
const consolePeople = () => {
  console.log(arrayOfPeople)
}
