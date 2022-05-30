const namesList = document.getElementById("names-list");

//const for newUserForm
const newUserForm = document.getElementById("new-user-form");
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const newUserName = document.getElementById("new-user-name");
const createPassword = document.getElementById("create-password");
const submit = document.getElementById("submit");
//const for loginForm
const loginForm = document.getElementById("login-form");
const checkUser = document.getElementById("check-user");
const checkPassword = document.getElementById("check-password");
const login = document.getElementById("login");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = data.find((element) => {
        return element.userName == e.target[0].value;
      });
      if (result) {
        if (result.password == e.target[1].value) {
          window.location.href =
            "file://wsl.localhost/Ubuntu-22.04/root/code/blogger/home.html";
        }
      }
    });
});
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
    password: createPassword.value,
  };
  createPerson(newUser);
});
