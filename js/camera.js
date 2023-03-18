const btnInicarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const btnTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const btnEnviarFoto = document.querySelector("[data-enviar]");

let imagemURL = "";

btnInicarCamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    btnInicarCamera.getElementsByClassName.display = "none";
    campoCamera.getElementsByClassName.display = "block";

    video.srcObject = iniciarVideo;
});

btnTirarFoto.addEventListener("click", function () {
    canvas.getContext("2d").drawImagem(video, 0, 0, canvas.width, canvas.heigth);

    imagemURL = canvas.toDataURL("image/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});

btnEnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = json.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage("cadastro", JSON.stringify(converteRetorno));

    window.location.href = "./abrir-conta-form-3.html";
});