(function(){
    'use strict';
    
    var page = 1;

    var articles = document.getElementById('articles');

    fetch('https://rickandmortyapi.com/api/character/?page='+page)
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