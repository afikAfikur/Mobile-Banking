      document
        .getElementById("addMoney")
        .addEventListener("click", function () {
          window.location.href = "../addMoney.html";
        });
      document.getElementById("cahsout").addEventListener("click", function () {
        window.location.href = "../cashout.html";
      });
      document
        .getElementById("transfer")
        .addEventListener("click", function () {
          window.location.href = "../transfermoney.html";
        });
      document.getElementById("bonus").addEventListener("click", function () {
        window.location.href = "../bonus.html";
      });
      document
        .getElementById("transaction")
        .addEventListener("click", function () {
          window.location.href = "../transactions.html";
        });
      document.getElementById("payBill").addEventListener("click", function () {
        window.location.href = "../paybill.html";
      });
      document.getElementById('logout').addEventListener('click',function(){
            window.location.href="../index.html"
        })
        // here starts the code
        let savedbalance = localStorage.getItem("upperbalance");
document.getElementById("upperbalance").innerText = savedbalance;
document
  .getElementById("formcashout")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const agNum = document.getElementById("agenNumber").value;
    const amount = document.getElementById("ammount").value;
    const amnum = Number(amount);

    const pin = document.getElementById("pin").value;
    let bal = document.getElementById("upperbalance").innerText;

    let numbal = Number(bal);

    if (agNum.length == 11) {
      if (pin == "1234") {
        numbal = numbal - amnum;
        numbalstring = String(numbal);
        document.getElementById("upperbalance").innerText = numbalstring;
      } else {
        alert("Invalid Pin");
      }
    } else {
      alert("Invalid Information");
    }
  });
