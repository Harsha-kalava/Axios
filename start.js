// GET REQUEST
function getTodos() {
	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((res) => showOutput(res))
		.catch((err) => console.log(err));
}

// POST REQUEST
function addTodo() {
	axios
		.post("https://jsonplaceholder.typicode.com/users", {
			title: "New todo",
			completed: false,
		})
		.then((res) => showOutput(res));
}

// PUT/PATCH REQUEST
function updateTodo() {
	axios
		.patch("https://jsonplaceholder.typicode.com/users/1", {
			username: "gum gum",
			email: "gummaru@april.biz",
		})
		.then((res) => showOutput(res));
}

// DELETE REQUEST
function removeTodo() {
	axios
		.delete("https://jsonplaceholder.typicode.com/users/1", {
			username: "gum gum",
			email: "gummaru@april.biz",
		})
		.then((res) => showOutput(res));
}

// SIMULTANEOUS DATA
function getData() {
	axios
		.all([
			axios.get("https://jsonplaceholder.typicode.com/users"),
			axios.get("https://jsonplaceholder.typicode.com/todos"),
		])

		.then(axios.spread((todos, post) => showOutput(todos)))
		.catch((err) => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
	const config = {
		headers: {
			"content-type": "application/json",
			Autorizaton: "sometoken",
		},
	};

	axios
		.post(
			"https://jsonplaceholder.typicode.com/users",
			{
				title: "New todo",
				completed: false,
			},
			config
		)
		.then((res) => showOutput(res));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
	const options = {
		method: "Post",
		url: "https://jsonplaceholder.typicode.com/todos",
		data: {
			title: "hello world transform fucntion ",
		},
	};

	axios | options.then((res) => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
	console.log("Error Handling");
}

// CANCEL TOKEN
function cancelToken() {
	console.log("Cancel Token");
}

// INTERCEPTING REQUESTS & RESPONSES

axios.interceptors.request.use((config) => {
	console.log(`${config.method.toUpperCase()} sent to ${config.url}`);
	return config;
});

// AXIOS INSTANCES
const axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});
axiosInstance.get("/comments").then((res) => showOutput(res));

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
document.getElementById("headers").addEventListener("click", customHeaders);
document
	.getElementById("transform")
	.addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
