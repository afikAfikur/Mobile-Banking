 document.getElementById("addMoneybtn").addEventListener('click',function(event){
            event.preventDefault();
            document.getElementById('admoney').style.display='block';
            document.getElementById('paybillsec').style.display='none';
            document.getElementById('hometrans').style.display='none';
            document.getElementById('cashout').style.display='none';
            document.getElementById('transactionsec').style.display='none';
            document.getElementById('bonussec').style.display='none';
            document.getElementById('transfermonye').style.display='none';
           

        })
        document.getElementById("cahsoutbtn").addEventListener('click',function(event){
          event.preventDefault();
             document.getElementById('cashout').style.display='block';
            document.getElementById('paybillsec').style.display='none';
            document.getElementById('hometrans').style.display='none';
            document.getElementById('admoney').style.display='none';
            document.getElementById('transactionsec').style.display='none';
            document.getElementById('bonussec').style.display='none';
            document.getElementById('transfermonye').style.display='none';
           

        })
        document.getElementById("transferbtn").addEventListener('click',function(event){
           event.preventDefault();
            document.getElementById('transfermonye').style.display='block';
            document.getElementById('paybillsec').style.display='none';
            document.getElementById('hometrans').style.display='none';
            document.getElementById('admoney').style.display='none';
            document.getElementById('transactionsec').style.display='none';
            document.getElementById('bonussec').style.display='none';
            document.getElementById('cashout').style.display='none';
           

        })
        document.getElementById("bonusbtn").addEventListener('click',function(event){
            event.preventDefault();
            document.getElementById('bonussec').style.display='block';
            document.getElementById('paybillsec').style.display='none';
            document.getElementById('hometrans').style.display='none';
            document.getElementById('admoney').style.display='none';
            document.getElementById('transactionsec').style.display='none';
            document.getElementById('transfermonye').style.display='none';
            document.getElementById('cashout').style.display='none';
           

        })
        document.getElementById("transactionbtn").addEventListener('click',function(event){
            event.preventDefault();
            document.getElementById('transactionsec').style.display='block';
            document.getElementById('paybillsec').style.display='none';
            document.getElementById('hometrans').style.display='none';
            document.getElementById('admoney').style.display='none';
            document.getElementById('bonussec').style.display='none';
            document.getElementById('transfermonye').style.display='none';
            document.getElementById('cashout').style.display='none';
           

        })
        document.getElementById("payBillbtn").addEventListener('click',function(event){
          event.preventDefault();
            document.getElementById('paybillsec').style.display='block';
            document.getElementById('transactionsec').style.display='none';
            document.getElementById('hometrans').style.display='none';
            document.getElementById('admoney').style.display='none';
            document.getElementById('bonussec').style.display='none';
            document.getElementById('transfermonye').style.display='none';
            document.getElementById('cashout').style.display='none';
           

        })
       document.getElementById('logout').addEventListener('click',function(){
            window.location.href="../index.html"
        })
      
        // addmoney script
        document.getElementById('formadmoney').addEventListener('submit',function(event){
            event.preventDefault();
 const acnum=document.getElementById('accountnum').value;
        const amountadd=document.getElementById('ammount').value;
        let numberAmount=Number(amountadd);
        const pinNumber=document.getElementById('pinnum').value;
        let mainBal=document.getElementById('upperbalance').innerText;
        let balance=Number(mainBal);
        
            if(acnum.length==11){
                if(pinNumber==='1234'){
                    balance=balance+numberAmount;
                    setbal=balance;
                    localStorage.setItem('upperbalance',setbal);
                    balstring=String(balance);
                    document.getElementById('upperbalance').innerText=balstring;
                }
                else{
                    alert("Invalid Pin");
                }
            }
            else{
                alert("Invalid Information");
            }
        })
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
            } else {
              alert("Invalid Pin");
            }
          } else {
            alert("Invalid Information");
          }
        });