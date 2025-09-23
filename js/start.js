// GET REQUEST
function getTodos() {
  axios("https://json-api.uz/api/project/my-books/books")
    .then((response) => {
      showOutput(response);
      console.log(response);
    })
    .catch((error) => console.log(error));
}

// POST REQUEST
function addTodo() {
  axios
    .post("https://json-api.uz/api/project/my-books/books", {
      yosh: 1,
      millat: "uzbek",
      davlat: "Uzbekistan",
    })
    .then((response) => {
      showOutput(response);
      console.log(response);
    })
    .catch((error) => console.log(error));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios
    .patch("https://json-api.uz/api/project/my-books/books/10", {
      nom: "machomen",
      yil: 2024,
      janr: "fantastik",
      vaqt: "100min",
    })
    .then((response) => {
      showOutput(response);
      console.log(response);
    })
    .catch((error) => console.log(error));
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://json-api.uz/api/project/my-books/books/10")
    .then((response) => {
      showOutput(response);
      console.log(response);
    })
    .catch((error) => console.log(error));
}

// SIMULTANEOUS DATA
function getData() {}

function skipItems() {}

function errorHandle() {
  axios
    .get("https://json-api.uz/api/project/my-books/books/30")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) {
        // Server responded with a status code outside the range of 2xx
        console.log("Response error:", error.response.data);
        console.log("Status:", error.response.status);
        console.log("Headers:", error.response.headers);
      } else if (error.request) {
        // Request was made but no response was received
        console.error("Request error:", error.request);
      } else {
        // Something else happened while setting up the request
        console.log("Error:", error.message);
      }
      console.log("Config:", error.config);
    });
}

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("skip").addEventListener("click", skipItems);
