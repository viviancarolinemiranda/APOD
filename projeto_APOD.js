let btn = $("#enviar");
let titulo = $("#titulo");
let data = $("#data");
let imagem = $("#imagem");
let autor = $("#autor");
let descricao = $("#descricao");
btn.on("click", function () {
  let date = $("inputData").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=qBRvxU4X64VGeTw3Be7WWP2dyPskabtYloHQp1gadate=${date}`,
    type: "GET",

    success: function (result) {
      titulo.html(`${result.title}`);
      date.html(`${result.date}`);
      console.log(result);
    },
    error: function (error) {
      console.log(error);
    },
  });
});
