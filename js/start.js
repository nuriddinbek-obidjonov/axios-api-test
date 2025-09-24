const axiosInstance = axios.create({
  baseURL: "https://json-api.uz/api/project/my-books/books",
});

// GET REQUEST
function getTodos() {
  axiosInstance("")
    .then((response) => {
      showOutput(response);
      console.log(response);
    })
    .catch((error) => console.log(error));
}

// POST REQUEST
function addTodo() {
  axiosInstance
    .post("", {
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
  axiosInstance
    .patch("/12", {
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
  axiosInstance
    .delete("/14")
    .then((response) => {
      showOutput(response);
      console.log(response);
    })
    .catch((error) => console.log(error));
}

// SIMULTANEOUS DATA
async function getData() {
  try {
    const [u1, u2, u3] = await Promise.all([
      axiosInstance.get("/2"),
      axiosInstance.get("/3"),
      axiosInstance.get("/4"),
    ]);

    console.log("u1:", u1.data);
    console.log("u2:", u2.data);
    console.log("u3:", u3.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// SKIP ITEM
function skipItems() {
  axiosInstance
    .get("?year_ne=2008")
    .then((response) => {
      showOutput(response);
      console.log(response);
    })
    .catch((error) => console.log(error));
}

// ERROR HANDLE
function errorHandle() {
  axiosInstance
    .get("/30")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      showOutput(error);
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

// WORKING WITH FORM
const form = document.querySelector("form");
const imageSubmitButton = document.getElementById("image-submit");
let imageURL = "";

// UPLOADING IMAGE
imageSubmitButton.addEventListener("click", () => {
  const formData = new FormData(form);
  axios
    .post("https://json-api.uz/api/project/my-books/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      imageURL = response.data;
    })
    .catch((error) => console.log(error));
});

// POSTING FORM DATA
form.addEventListener("submit", (e) => {
  e.preventDefault();
  axiosInstance
    .post("", {
      name: form.name.value,
      category: form.category.value,
      price: form.price.value,
      brand: form.brand.value,
      image: imageURL,
    })
    .then((response) => showOutput(response))
    .catch((error) => console.log(error));
});

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
document.getElementById("error").addEventListener("click", errorHandle);
