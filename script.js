const fullName = prompt("Nhập họ tên");
const divFullName = document.querySelector("#fullName");
document.cookie = `fullName=${fullName}`;

divFullName.innerHTML = fullName;