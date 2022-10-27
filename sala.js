document.getElementById('mainrpd').addEventListener('click', function(e) {

    window.open('http://127.0.0.1:5500', '_self');

    });   


    document.getElementById('buscar').addEventListener('click', function(e) {
        var link = document.getElementById('search').value;
        var aspas = ' " '; 
        console.log(aspas);
        var baseURI = "https://www.youtube.com/embed/"
        var linkf = link.slice(link.length - 11);
        linktratado=baseURI+linkf;
        console.log(linktratado);

document.getElementById('frame').src=linktratado;

    });
    document.getElementById('copyy').addEventListener('click', function(e) {
        var textocopiado = document.getElementById("texto").value;

        navigator.clipboard.writeText(textocopiado);

    })

