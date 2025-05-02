// Gestion du header transparent au scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});

// Gestion des onglets avec animation améliorée
function openTab(tabName, event) {
    if (event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
    }

    // Vérifie si l'onglet est déjà actif
    const targetTab = document.getElementById(tabName);
    const isCurrentTab = targetTab.classList.contains('active');

    if (isCurrentTab) {
        // Si l'onglet est déjà actif, ne rien faire
        return;
    }

    // Désactiver tous les boutons d'onglets d'abord
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Activer le bouton correspondant
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        if (button.getAttribute('href') === '#' + tabName) {
            button.classList.add('active');
        }
    });

    // Animation de sortie - masquer l'onglet actif progressivement
    const activeContent = document.querySelector('.tab-content.active');

    // Masquer l'onglet actif
    if (activeContent) {
        activeContent.style.opacity = '0';
        activeContent.style.transform = 'translateY(20px)';

        // Utiliser setTimeout pour laisser l'animation se produire avant de changer l'onglet
        setTimeout(() => {
            // Cacher tous les onglets
            const tabContents = document.getElementsByClassName('tab-content');
            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove('active');
                // Réinitialiser le style pour tous les onglets
                tabContents[i].style.opacity = '';
                tabContents[i].style.transform = '';
            }

            // Afficher l'onglet demandé
            targetTab.classList.add('active');

            // Mettre à jour l'URL avec le hash sans recharger la page
            history.pushState(null, null, '#' + tabName);
        }, 300); // Correspond à la moitié du temps de transition
    } else {
        // Premier chargement ou aucun onglet actif
        const tabContents = document.getElementsByClassName('tab-content');
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove('active');
            tabContents[i].style.opacity = '';
            tabContents[i].style.transform = '';
        }

        targetTab.classList.add('active');
        history.pushState(null, null, '#' + tabName);
    }
}

// Vérifier s'il y a un hash dans l'URL au chargement
window.addEventListener('load', function () {
    // D'abord, vérifie s'il y a un paramètre tab dans l'URL (ancien format)
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');

    if (tab) {
        openTab(tab);
        return;
    }

    // Ensuite, vérifie s'il y a un hash dans l'URL (nouveau format)
    const hash = window.location.hash.substring(1); // Enlever le # du début
    if (hash) {
        openTab(hash);
    }
});

// Écouter les changements de hash dans l'URL
window.addEventListener('hashchange', function () {
    const hash = window.location.hash.substring(1);
    if (hash) {
        openTab(hash);
    }
});

// Vérifier s'il y a un hash dans l'URL au chargement
window.addEventListener('load', function () {
    // D'abord, vérifie s'il y a un paramètre tab dans l'URL (ancien format)
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');

    if (tab) {
        openTab(tab);
        return;
    }

    // Ensuite, vérifie s'il y a un hash dans l'URL (nouveau format)
    const hash = window.location.hash.substring(1); // Enlever le # du début
    if (hash) {
        openTab(hash);
    }
});

// Écouter les changements de hash dans l'URL
window.addEventListener('hashchange', function () {
    const hash = window.location.hash.substring(1);
    if (hash) {
        openTab(hash);
    }
});