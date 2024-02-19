// const buttons = document.querySelectorAll('button');
// // for(let i = 0; i < buttons.length; i++){
// //     buttons[i].disabled = i < 36;
// // }
// let totalResult = 0;

// function calculateTicketFee(event){
//     const result = event * 550;
//     // console.log(result);

//     const p = document.createElement('p');
//     p.textContent = `Result for Button ${event}: ${result}`;

//     document.body.appendChild(p);
//      totalResult += result;

//      updateTotalResult();

//     //  button color change
//     // buttons[event].classList.add('button-green')

// }

// function updateTotalResult(){
//     const totalP = document.getElementById('totalResult');
//     totalP.textContent = `Total: ${totalResult}`;
// }



// ----------------------------
const buttons = document.querySelectorAll('button');
// for(let i = 0; i < buttons.length; i++){
    // buttons[i].disabled = i < 36;
// }
let totalResult = 0;

function calculateTicketFee(event){
    const result = event * 550;
    console.log(result);

    const p = document.createElement('p');
    p.textContent = `Result for Button ${event}: ${result}`;

    document.body.appendChild(p);
     totalResult += result;

     updateTotalResult();

}

function updateTotalResult(){
    const totalP = document.getElementById('totalResult');
    totalP.textContent = `Total: ${totalResult}`;
}

const allBtn = document.getElementsByClassName("allbtn");
let count = 0;

for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    count = count + 1;

    const sitNumber = event.target.childNodes[0];
    const sitName = event.target.parentNode.childNodes[3].innerText;
    const sitPrice = event.target.parentNode.childNodes[1].childNodes[3];
    // console.log(event.target.childNodes[0])
    // console.log()

    const appendOutput = document.getElementById("append-section");
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = sitNumber;
    const p2 = document.createElement("p");
    p2.innerText = sitName;
    const p3 = document.createElement("p");
    p3.innerText = sitPrice;

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3)
    appendOutput.appendChild(li);

    // const totalCost = document.getElementById('total-result').innerText;

    // const convertedTotalCost = parseInt(totalCost);
    // document.getElementById('total-result').innerText = convertedTotalCost + parseInt(sitPrice);

    setInnerText("cart-count", count);
  });
}
let sitCount = 40;
for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    sitCount = sitCount - 1;
    document.getElementById("sit-count").innerText = sitCount;
  });
}



function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
