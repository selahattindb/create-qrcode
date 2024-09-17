const input = document.querySelector("input");
const qrImg = document.querySelector("img");
const btnGenerate = document.querySelector("#generate");
const btnDownload = document.querySelector("#download");

btnGenerate.addEventListener("click", () => {
    const qrCode =`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
    qrImg.src = qrCode;
   
});

btnDownload.addEventListener("click", async () => {
    const response = await fetch(qrImg.src);
    const blob = response.blob();
    const dowloadLink = document.createElement("a")
    dowloadLink.setAttribute("download","qrcode");
    dowloadLink.href = URL.createObjectURL(blob);
    dowloadLink.download = "qrcode.jpg";
    dowloadLink.click();
});