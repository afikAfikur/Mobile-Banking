 document.getElementById('btnLogin').addEventListener('click',function(){
      const num=document.getElementById('number').value;
      const pass=parseInt(document.getElementById('pin').value);
      if(num=='01309549619' && pass==1234){
        window.location.href="./home.html"
      }
      else{
        alert("Invalid password or pin");
      }
    })

    

    
