function getUserDetails(event) {
  event.preventDefault();
  const username = userForm.username.value;
  const age = userForm.age.value;
  const occupation = userForm.occupation.value;
  const user = { username, age, occupation };
  const div = document.querySelector(".display-result");

  console.log(user);
  div.innerHTML = `UserName: ${user.username} <br> 
                  age: ${user.age}<br>
                  Occupation: ${occupation}`;
}
