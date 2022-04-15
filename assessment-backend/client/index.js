// const complimentForm = document.getElementById('newCompForm')
// const fortuneForm = document.getElementById('newFortForm')
const classContainer = document.querySelector('#classes-container')
const form = document.querySelector('form')


baseURL = `http://localhost:4000/api/classes`

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      })
  }
  const classesCb = ({data: classes}) => displayClasses(classes)
  const getAllClasses = () => axios.get(baseURL).then(classesCb).catch(console.log(err.res.data))
  const createNewClass = body => axios.post(baseURL, body).then(classesCb).catch(console.log(err.res.data))
  const deleteThisClass = id => axios.delete(`${baseURL}/${id}`).then(classesCb).catch(console.log(err.res.data))
  const editThisClass = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(classesCb).catch(console.log(err.res.data))

const displayClasses = arr => {
    classContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createClassCard(arr[i])
    }
}

const createClassCard = dndClass => {
    const classCard = document.createElement('div')
    classCard.classList.add('class-card')

    classCard.innerHTML = `<h1 class="class-name">${dndClass.name}</h1>
    <h2 class="class-magic">Magic Type: ${dndClass.magic}</h2>
    <p class="edit">Edit Magic Type:</p>
    <div class="btns-container">
        <button onclick="editThisClass(${dndClass.id}, 'arcane')">Arcane</button>
        <button onclick="editThisClass(${dndClass.id}, 'nature')">Nature</button>
        <button onclick="editThisClass(${dndClass.id}, 'holy')">Holy</button>
        <button onclick="editThisClass(${dndClass.id}, 'none')">None</button>
    </div>
    <button onclick="deleteThisClass(${dndClass.id})">x</button>
        `
    classContainer.appendChild(classCard)
}

const submitHandler = event => {
    event.preventDefault()
    let className = document.querySelector('#name')
    let magic = document.querySelector('#magic')

    let dndClassObj = {
        name: className.value,
        magic: magic.value
    }

    createNewClass(dndClassObj)

    className.value = ''
    magic.value = ''

}

form.addEventListener('submit', submitHandler)
getAllClasses()
