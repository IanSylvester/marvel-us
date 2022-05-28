const fetchPeople = () => {
    fetch("http://localhost:5500/blogger/")
    .then((response)=>{
        return response.json
    })
    .then((data)=>{
        renderUsers()
    })
}

fetchPeople()

const renderUsers=(arr)=>{
    arr.forEach((element)=>{
        let li = document.createElement("li")
        li.innerText = `${element.firstName} ${element.lastName}`
        namesList.append(li)

    })

}
