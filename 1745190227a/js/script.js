 window.onload = function(){
        
        document.getElementById('Btn').onclick = startKomm;
}

function startKomm(){
        var text = document.getElementById('txt').value;
        if(text == 0) {
            return false;
        }
        else {
            var komm = document.createElement('div');
            komm.className = "com-text";
            var newText = document.createTextNode(text);
                
            komm.appendChild(newText);
                
            document.getElementById('com').appendChild(komm);
            return true;
        }
}