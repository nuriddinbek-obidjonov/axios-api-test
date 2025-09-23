const btnGet = document.getElementById("get");
const btnPost = document.getElementById("post");
const btnDelete = document.getElementById("delete");

btnGet.addEventListener("click", () => {
  fetch("https://json-api.uz/api/project/my-books/books", { method: "GET" })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

btnPost.addEventListener("click", () => {
  fetch("https://json-api.uz/api/project/my-books/books", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      kotbla: "ozin kot bla",
    }),
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

btnDelete.addEventListener("click", () => {
  fetch("https://json-api.uz/api/project/my-books/books/1", {
    method: "DELETE",
  })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
