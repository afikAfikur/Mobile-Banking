document
  .getElementById("addMoneybtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("admoney").style.display = "block";
    document.getElementById("paybillsec").style.display = "none";
    document.getElementById("hometrans").style.display = "none";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transactionsec").style.display = "none";
    document.getElementById("bonussec").style.display = "none";
    document.getElementById("transfermonye").style.display = "none";
  });
document
  .getElementById("cahsoutbtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cashout").style.display = "block";
    document.getElementById("paybillsec").style.display = "none";
    document.getElementById("hometrans").style.display = "none";
    document.getElementById("admoney").style.display = "none";
    document.getElementById("transactionsec").style.display = "none";
    document.getElementById("bonussec").style.display = "none";
    document.getElementById("transfermonye").style.display = "none";
  });
document
  .getElementById("transferbtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("transfermonye").style.display = "block";
    document.getElementById("paybillsec").style.display = "none";
    document.getElementById("hometrans").style.display = "none";
    document.getElementById("admoney").style.display = "none";
    document.getElementById("transactionsec").style.display = "none";
    document.getElementById("bonussec").style.display = "none";
    document.getElementById("cashout").style.display = "none";
  });
document.getElementById("bonusbtn").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("bonussec").style.display = "block";
  document.getElementById("paybillsec").style.display = "none";
  document.getElementById("hometrans").style.display = "none";
  document.getElementById("admoney").style.display = "none";
  document.getElementById("transactionsec").style.display = "none";
  document.getElementById("transfermonye").style.display = "none";
  document.getElementById("cashout").style.display = "none";
});
document
  .getElementById("transactionbtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("transactionsec").style.display = "block";
    document.getElementById("paybillsec").style.display = "none";
    document.getElementById("hometrans").style.display = "none";
    document.getElementById("admoney").style.display = "none";
    document.getElementById("bonussec").style.display = "none";
    document.getElementById("transfermonye").style.display = "none";
    document.getElementById("cashout").style.display = "none";
  });
document
  .getElementById("payBillbtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("paybillsec").style.display = "block";
    document.getElementById("transactionsec").style.display = "none";
    document.getElementById("hometrans").style.display = "none";
    document.getElementById("admoney").style.display = "none";
    document.getElementById("bonussec").style.display = "none";
    document.getElementById("transfermonye").style.display = "none";
    document.getElementById("cashout").style.display = "none";
  });
document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "../index.html";
});

// addmoney script
document
  .getElementById("formadmoney")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const acnum = document.getElementById("accountnum").value;
    const amountadd = document.getElementById("ammount").value;
    let numberAmount = Number(amountadd);
    const pinNumber = document.getElementById("pinnum").value;
    let mainBal = document.getElementById("upperbalance").innerText;
    let balance = Number(mainBal);

    if (acnum.length == 11) {
      if (pinNumber === "1234") {
        balance = balance + numberAmount;
        balstring = String(balance);
        document.getElementById("upperbalance").innerText = balstring;
        const container = document.getElementById("container");
        const template = document.querySelector(".items-inside");
        const addione = template.cloneNode(true);
        addione.querySelector(
          ".title"
        ).innerText = `Money Added -${numberAmount} TK`;
        addione.querySelector(".time").innerText = new Date().toLocaleString();
        container.appendChild(addione);
      } else {
        alert("Invalid Pin");
      }
    } else {
      alert("Invalid Information");
    }
  });
// cashout script
document
  .getElementById("cashoutform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const agNum = document.getElementById("agenNumbercashout").value;
    const amount = document.getElementById("ammountcashout").value;
    const amnum = Number(amount);

    const pin = document.getElementById("pincashout").value;
    let bal = document.getElementById("upperbalance").innerText;

    let numbal = Number(bal);

    if (agNum.length == 11) {
      if (pin == "1234") {
        numbal = numbal - amnum;
        numbalstring = String(numbal);
        document.getElementById("upperbalance").innerText = numbalstring;
        const container = document.getElementById("container");
        const template = document.querySelector(".items-inside");
        const addione = template.cloneNode(true);
        addione.querySelector(".title").innerText = `Cashout -${amnum} TK`;
        addione.querySelector(".time").innerText = new Date().toLocaleString();
        container.appendChild(addione);
      } else {
        alert("Invalid Pin");
      }
    } else {
      alert("Invalid Information");
    }
  });
// transfer script
document
  .getElementById("formtransfermoney")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const agNum = document.getElementById("agenNumbertransfer").value;
    const amount = document.getElementById("ammounttransfer").value;
    const amnum = Number(amount);

    const pin = document.getElementById("pintransfer").value;
    let bal = document.getElementById("upperbalance").innerText;

    let numbal = Number(bal);

    if (agNum.length == 11) {
      if (pin == "1234") {
        numbal = numbal - amnum;
        numbalstring = String(numbal);
        document.getElementById("upperbalance").innerText = numbalstring;
        const container = document.getElementById("container");
        const template = document.querySelector(".items-inside");
        const addione = template.cloneNode(true);
        addione.querySelector(
          ".title"
        ).innerText = `Transfer Ammount -${amnum} TK`;
        addione.querySelector(".time").innerText = new Date().toLocaleString();
        container.appendChild(addione);
      } else {
        alert("Invalid Pin");
      }
    } else {
      alert("Invalid Information");
    }
  });
// paybill script
document
  .getElementById("formpaybill")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const agNum = document.getElementById("agenNumberpaybill").value;
    const amount = document.getElementById("ammountpaybill").value;
    const amnum = Number(amount);

    const pin = document.getElementById("pinpaybill").value;
    let bal = document.getElementById("upperbalance").innerText;

    let numbal = Number(bal);

    if (agNum.length == 11) {
      if (pin == "1234") {
        numbal = numbal - amnum;
        numbalstring = String(numbal);
        document.getElementById("upperbalance").innerText = numbalstring;
        const container = document.getElementById("container");
        const template = document.querySelector(".items-inside");
        const addione = template.cloneNode(true);
        addione.querySelector(".title").innerText = `Bill Paid -${amnum} TK`;
        addione.querySelector(".time").innerText = new Date().toLocaleString();
        container.appendChild(addione);
      } else {
        alert("Invalid Pin");
      }
    } else {
      alert("Invalid Information");
    }
  });

// Bonus Js Code
cuponCode;

document
  .getElementById("bonusform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const cupon = document.getElementById("cuponCode").value;
    const firstcode = "get100";
    const seccode = "get500";
    const thirdcode = "get1000";
    let bal = document.getElementById("upperbalance").innerText;

    let numbal = Number(bal);
    if (cupon === firstcode) {
      numbal = numbal + 100;
      numbalstring = String(numbal);
      document.getElementById("upperbalance").innerText = numbalstring;
      const container = document.getElementById("container");
      const template = document.querySelector(".items-inside");
      const addione = template.cloneNode(true);
      addione.querySelector(".title").innerText = `Bonus Added -100 TK`;
      addione.querySelector(".time").innerText = new Date().toLocaleString();
      container.appendChild(addione);
    } else if (cupon == seccode) {
      numbal = numbal + 500;
      numbalstring = String(numbal);
      document.getElementById("upperbalance").innerText = numbalstring;
      const container = document.getElementById("container");
      const template = document.querySelector(".items-inside");
      const addione = template.cloneNode(true);
      addione.querySelector(".title").innerText = `Bonus Added -500 TK`;
      addione.querySelector(".time").innerText = new Date().toLocaleString();
      container.appendChild(addione);
    } else if (cupon === thirdcode) {
      numbal = numbal + 1000;
      numbalstring = String(numbal);
      document.getElementById("upperbalance").innerText = numbalstring;
      const container = document.getElementById("container");
      const template = document.querySelector(".items-inside");
      const addione = template.cloneNode(true);
      addione.querySelector(".title").innerText = `Bonus Added -1000 TK`;
      addione.querySelector(".time").innerText = new Date().toLocaleString();
      container.appendChild(addione);
    } else {
      alert("No Bonus Type get100 ,get500 ,get1000 to get bonus");
    }
  });
