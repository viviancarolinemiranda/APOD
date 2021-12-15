let btn = $("#enviar");
let titulo = $("#titulo");
let data = $("#data");
let imagem = $("#imagem");
let autor = $("#autor");
let descricao = $("#descricao");
let video = $("#video");
btn.on("click", function () {
  let inputData = $("#input-data").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=qBRvxU4X64VGeTw3Be7WWP2dyPskabtYloHQp1ga&date=${inputData}`,
    type: "GET",

    success: function (result) {
      titulo.html(`${result.title}`);
      data.html(`${result.date}`);
      autor.html(`By: ${result.copyright}`);
      descricao.html(`${result.explanation}`);
      if (result.media_type == "image") {
        imagem.attr("src", result.url);
      } else {
        document.getElementById("imagem").style.display = "none";
        document.getElementById("video").style.display = "flex";
        video.attr("src", result.url);
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
});
