let btn = $("#enviar");
btn.addEventListener("click", function () {
$.ajax({
  url: "https://api.nasa.gov/planetary/apod?api_key=BbFITBloga1tY0wVkNb7zK0cIvyYZu6X7JBvAzX8",
  success: (result) => {
    apod(result);
  },
  error: (error) => {
    console.error(error);
  },
});
}
