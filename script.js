// Récupère l'Url de l'image
var urlImg = document.querySelector("img").src;
console.log(urlImg);
var Nb = 4;



// Bouton envoyer
var button = document.querySelector("button");

// Sur clic du bouton
    button.addEventListener('click', function(){
        
    Nb = Nb-1;
        
        if (Nb === -1)
            Nb = 4;
        
        // Récupère le début de l'url et concatène avec 4 et jpg
        var urlImgLast = urlImg.substr(0,urlImg.indexOf(".jpg")-1) + Nb + ".jpg";
        console.log(urlImgLast);
        
        //Remplace la valeur de l'url 
        document.querySelector("img").src = urlImgLast;
     })
