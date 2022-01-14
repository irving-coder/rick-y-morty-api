(function(){
    'use strict';
    
    // var page = 1;

    // page.innerHTML = 1;
    // console.log(page.elements);

    // var articles = document.getElementById('articles');

    // no logro conseguir el valor de 'entrada'
    let entrada = document.querySelector('#entrada').value;
    let form = document.querySelector('#form');

    form.addEventListener('submit', function(){
        console.log(entrada);
    });

    fetch('https://rickandmortyapi.com/api/character/?page='+entrada.value)
        .then(response => response.json())
        .then(data => { // Sólo regresa la primera página
            var users = data.results;
            
            users.map((user) => { 
                var article = document.createElement('article');
                
                let character = '<h4>'+ user.name +'</h4>'+
                            '<li>Status:'+ user.status +'</li>'+
                            '<li>Origin: '+ user.origin.name +'</li>'+
                            '<img src='+ user.image +' />';  
                    
                article.innerHTML = character;
                articles.appendChild(article);
            });
        });
})();