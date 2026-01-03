document.getElementById('addMoney').addEventListener('click',function(){
            window.location.href="../addMoney.html"
        })
        document.getElementById('cahsout').addEventListener('click',function(){
            window.location.href="../cashout.html"
        })
        document.getElementById('transfer').addEventListener('click',function(){
            window.location.href="../transfermoney.html"
        })
        document.getElementById('bonus').addEventListener('click',function(){
            window.location.href="../bonus.html"
        })
        document.getElementById('transaction').addEventListener('click',function(){
            window.location.href="../transactions.html"
        })
        document.getElementById('payBill').addEventListener('click',function(){
            window.location.href="../paybill.html"
        })
  document.getElementById('logout').addEventListener('click',function(){
            window.location.href="../index.html"
        })
       
        document.getElementById('form').addEventListener('submit',function(event){
            event.preventDefault();
 const acnum=document.getElementById('accountnum').value;
        const amountadd=document.getElementById('ammount').value;
        let numberAmount=Number(amountadd);
        const pinNumber=document.getElementById('pinnum').value;
        let mainBal=document.getElementById('upperbalance').innerText;
        let balance=Number(mainBal);
        let setbal=localStorage.getItem('upperbalance');
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
