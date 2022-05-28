const namesList = document.getElementById("names-list");

const fetchPeople = () => {
  fetch("http://localhost:3000/user")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderUsers(data);
    });
};

fetchPeople();

const renderUsers = (arr) => {
  arr.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = `${element.firstName} ${element.lastName}`;
    namesList.append(li);
    console.log;
  });
};
