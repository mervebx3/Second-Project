function farben(){


    document.getElementById('txtInput').oninput = function(change){
        var input = document.getElementById('box').style.backgroundColor =this.value; 
       // alert(`${input} das ist der Input`);
    };

}