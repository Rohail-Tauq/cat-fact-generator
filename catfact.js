const URL = "https://catfact.ninja/fact";
const factpara = document.querySelector("#facts");
const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");
const body = document.querySelector("body");
const whiteCat = document.querySelector("#cat");

btn.addEventListener("click", async () => {
  console.log("getting data......");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  factpara.innerText = data.fact;
});