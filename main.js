let arrayOfPeople

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  // eslint-disable-next-line no-use-before-define
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

const moreInfo = (id) => {
  const contact = document.getElementById(id)
  if (contact.style.display === "block") {
    contact.style.display = "none"
  } else {
    contact.style.display = "block"
  }
}

const displayPeople = () => {
  const allPosts = document.getElementById("all-posts")
  arrayOfPeople.map((post, i) => {
    const li = document.createElement("li")
    const { name, phone, email, dob, location, picture } = post
    const img = document.createElement("img")
    img.src = picture.large
    const btn = document.createElement("button")
    const bText = document.createTextNode("More Info")
    const myPara = document.createElement("p")
    myPara.setAttribute("id", `more-info-${i}`)
    myPara.style.display = "none"
    li.setAttribute("id", "list")
    btn.setAttribute("id", "btn")
    btn.addEventListener("click", () => {
      moreInfo(myPara.id)
    })
    const contactInfo = document.createTextNode(
      `Name: ${post.name.first} ${post.name.last}`
    )
    const moreContactInfo = document.createTextNode(
      `Phone: ${phone}, Email: ${email}, Address: ${location.street.number} ${location.street.name} ${location.city} ${location.state} ${location.postcode} ${location.country}, Birthday: ${dob.date}`
    )
    li.appendChild(contactInfo)
    btn.appendChild(bText)
    allPosts.append(li)
    allPosts.append(img)
    allPosts.append(btn)
    myPara.appendChild(moreContactInfo)
    li.appendChild(myPara)
  })
}

// Console Logs the results
const consolePeople = () => {
  console.log(arrayOfPeople)
}
