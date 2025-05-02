document.addEventListener('DOMContentLoaded', function() {
    // Appliquer uniquement aux liens de navigation interne
    var internalLinks = document.querySelectorAll('nav a, .main-navigation a');
    
    internalLinks.forEach(function(link) {
      // Ne pas appliquer aux ancres sur la même page
      if (!link.getAttribute('href').startsWith('#')) {
        link.addEventListener('click', function(e) {
          // Vérifier si c'est un lien interne au site
          if (link.hostname === window.location.hostname) {
            var href = this.getAttribute('href');
            
            // Ne pas interférer avec les comportements par défaut spéciaux
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && href) {
              e.preventDefault();
              
              // Afficher l'écran de transition
              var transition = document.getElementById('page-transition');
              transition.style.display = 'flex';
              
              // Petit délai pour que le CSS se mette à jour
              setTimeout(function() {
                transition.style.opacity = '1';
                
                // Rediriger après un court délai
                setTimeout(function() {
                  window.location.href = href;
                }, 100);
              }, 1);
            }
          }
        });
      }
    });
  });