const namesList = document.getElementById("names-list");
const newUserForm = document.getElementById("new-user-form");
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const newUserName = document.getElementById("new-user-name");
const createPassword = document.getElementById("create-password");
const submit = document.getElementById("submit");

const fetchPeople = () => {
  fetch("http://localhost:3000/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderUsers(data);
    });
};

const createPerson = (data) => {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    console.log(response);
  });
};

fetchPeople();

const renderUsers = (arr) => {
  arr.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = `${element.firstName} ${element.lastName}`;
    namesList.append(li);
  });
};

newUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newUser = {
    firstName: fName.value,
    lastName: lName.value,
    userName: newUserName.value,
    password: password.value,
  };
  console.log(newUser);
});
