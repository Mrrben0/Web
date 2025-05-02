// Document ready function pour s'assurer que le DOM est chargé
document.addEventListener('DOMContentLoaded', function () {
    // ===== FAQ TOGGLE =====
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const toggle = question.querySelector('.faq-toggle');

            // Fermer toutes les autres réponses
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) {
                    item.classList.remove('active');
                }
            });

            document.querySelectorAll('.faq-toggle').forEach(item => {
                if (item !== toggle) {
                    item.textContent = '+';
                }
            });

            // Basculer l'état de la réponse actuelle
            answer.classList.toggle('active');

            if (toggle.textContent === '+') {
                toggle.textContent = '-';
            } else {
                toggle.textContent = '+';
            }
        });
    });

    // ===== HEADER TRANSPARENT AU SCROLL =====
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });

    // ===== AFFICHER PLUS DE SERVICES =====
    // Sélectionner le bouton "Tous nos services"
    const moreServicesBtn = document.querySelector('.services-cta .services-button');

    // Services additionnels à afficher
    const additionalServices = [
        {
            icon: "img/Logo/Logo7.gif",
            title: "Coaching Conjugal",
            description: "Séances individuelles ou en couple, en périnatalité ou pour toute autre raison. J'offre une écoute active, bienveillante et sans jugement pour comprendre les difficultés, envisager des changements et, si besoin, proposer des outils pour améliorer la relation. Parfois, être entendu suffit à soulager et à avancer.",
            price: "30€ la séance",
            link: "services/Coaching-Conjugal.html"
        },
        {
            icon: "img/Logo/Logo10.gif",
            title: "Soutien post-partum",
            description: "Un accompagnement personnalisé pour vous soutenir pendant cette période d'adaptation. Conseils sur l'allaitement, le sommeil, la récupération physique et le bien-être émotionnel de toute la famille.",
            price: "70€ la séance",
            link: "services/Soutien-Post-Partum.html"
        },
        {
            icon: "img/Logo/Logo9.gif",
            title: "Ateliers collectifs",
            description: "Rejoignez nos ateliers en petit groupe pour partager, apprendre et vous soutenir mutuellement. Thématiques variées : portage, diversification alimentaire, motricité libre...",
            price: "35€ par personne",
            link: "services/Ateliers-Collectifs.html"
        }
    ];

    let servicesExpanded = false;

    // Ajouter un écouteur d'événement au bouton
    if (moreServicesBtn) {
        moreServicesBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (!servicesExpanded) {
                // Créer et ajouter les nouvelles cartes de services
                const servicesGrid = document.querySelector('.services-grid');

                additionalServices.forEach(service => {
                    const serviceCard = document.createElement('div');
                    serviceCard.className = 'service-card';
                    serviceCard.style.opacity = '0';
                    serviceCard.style.transform = 'translateY(20px)';
                    serviceCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

                    serviceCard.innerHTML = `
                        <a href="${service.link}">
                            <div class="service-icon">
                                <img src="${service.icon}" alt="Icône ${service.title}" class="service-icon-img">
                            </div>
                            <h3>${service.title}</h3>
                            <p>${service.description}</p>
                            <div class="service-price">${service.price}</div>
                        </a>
                    `;

                    servicesGrid.appendChild(serviceCard);

                    // Animation d'apparition
                    setTimeout(() => {
                        serviceCard.style.opacity = '1';
                        serviceCard.style.transform = 'translateY(0)';
                    }, 50);
                });

                // Changer le texte du bouton
                moreServicesBtn.textContent = 'Voir moins';
                servicesExpanded = true;
            } else {
                // Supprimer les services supplémentaires
                const servicesGrid = document.querySelector('.services-grid');
                const serviceCards = servicesGrid.querySelectorAll('.service-card');

                // Supprimer les 3 dernières cartes
                for (let i = serviceCards.length - 1; i >= serviceCards.length - 3; i--) {
                    const card = serviceCards[i];
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        servicesGrid.removeChild(card);
                    }, 500);
                }

                // Changer le texte du bouton
                moreServicesBtn.textContent = 'Tous nos services';
                servicesExpanded = false;
            }
        });
    }

    // Animation pour les éléments au scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.info-card, .about-text, .about-image, .form-group, .social-card').forEach(el => {
        observer.observe(el);
        el.classList.add('fade-element');
    });

    // ===== GESTION DES LIENS DANS LES CARTES DE SERVICE =====
    // Empêcher les événements de clic sur les cartes de service de propager vers les liens
    document.querySelectorAll('.service-card').forEach(card => {
        // Nous n'ajoutons pas d'écouteur d'événement ici car nous utilisons les liens natifs
    });

    // ===== CARROUSEL AUTOMATIQUE POUR LES TÉMOIGNAGES =====
    // Témoignages à afficher
    const testimonials = [
        {
            text: "Les massages ont vraiment aidé mon bébé à mieux dormir et à être plus détendu. Je recommande!",
            author: "Sophie L.",
            info: "Maman de Jules, 4 mois"
        },
        {
            text: "Les ateliers m'ont donné confiance et des outils précieux pour ces premiers mois si importants.",
            author: "Marie T.",
            info: "Maman de Léa, 2 mois"
        },
        {
            text: "Le bain enveloppé a transformé nos moments avec notre fille. Elle est beaucoup plus sereine!",
            author: "Thomas R.",
            info: "Papa de Chloé, 3 mois"
        },
        {
            text: "Merci pour cette écoute bienveillante qui m'a aidée à traverser le baby blues. Un soutien précieux.",
            author: "Émilie D.",
            info: "Maman de Lucas, 6 mois"
        },
        {
            text: "Les séances de baby spa sont devenues notre rituel préféré. Notre petit garçon adore l'eau!",
            author: "Claire M.",
            info: "Maman de Noah, 5 mois"
        },
        {
            text: "Grâce à vos conseils, j'ai repris confiance en mes capacités de maman. Merci pour votre pédagogie.",
            author: "Julie B.",
            info: "Maman d'Emma, 2 mois"
        }
    ];

    // Sélectionner le conteneur des témoignages
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    const dotNav = document.querySelector('.testimonial-nav');

    // Vérifier si les éléments existent
    if (testimonialsGrid && dotNav) {
        // Créer les pastilles de navigation
        dotNav.innerHTML = ''; // Effacer les pastilles existantes
        const dotColors = ['dot-green', 'dot-pink', 'dot-beige'];

        for (let i = 0; i < testimonials.length / 2; i++) {
            const dot = document.createElement('div');
            dot.className = `nav-dot ${dotColors[i % 3]}${i === 0 ? ' active' : ''}`;
            dot.setAttribute('data-index', i);
            dotNav.appendChild(dot);
        }

        // Index courant des témoignages affichés (par paire)
        let currentIndex = 0;

        // Fonction pour afficher une paire de témoignages
        function showTestimonials(index) {
            // Calculer les indices des deux témoignages à afficher
            const firstIndex = index * 2;
            const secondIndex = firstIndex + 1;

            // Vérifier si les indices sont valides
            if (firstIndex >= testimonials.length) return;

            // Préparer le contenu HTML
            testimonialsGrid.innerHTML = '';

            // Ajouter le premier témoignage
            const card1 = createTestimonialCard(testimonials[firstIndex]);
            testimonialsGrid.appendChild(card1);

            // Ajouter le deuxième témoignage s'il existe
            if (secondIndex < testimonials.length) {
                const card2 = createTestimonialCard(testimonials[secondIndex]);
                testimonialsGrid.appendChild(card2);
            }

            // Mettre à jour les pastilles de navigation
            document.querySelectorAll('.nav-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });

            // Animation d'entrée
            const cards = testimonialsGrid.querySelectorAll('.testimonial-card');
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateX(20px)';

                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateX(0)';
                }, 50);
            });
        }

        // Fonction pour créer une carte de témoignage
        function createTestimonialCard(testimonial) {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.style.transition = 'opacity 0.15s ease, transform 0.15s ease';

            card.innerHTML = `
                <p class="testimonial-text">"${testimonial.text}"</p>
                <p class="testimonial-author">${testimonial.author}</p>
                <p class="testimonial-info">${testimonial.info}</p>
            `;

            return card;
        }

        // Rotation automatique
        function rotateTestimonials() {
            currentIndex = (currentIndex + 1) % (testimonials.length / 2);
            showTestimonials(currentIndex);
        }

        // Initialiser l'affichage
        showTestimonials(0);

        // Démarrer la rotation automatique (toutes les 15 secondes)
        let intervalId = setInterval(rotateTestimonials, 15000);

        // Ajouter des écouteurs d'événements aux pastilles pour une navigation manuelle
        document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                currentIndex = index;
                showTestimonials(index);

                // Réinitialiser le timer pour éviter un changement trop rapide après un clic
                clearInterval(intervalId);
                intervalId = setInterval(rotateTestimonials, 15000);
            });
        });
    }

    // ------------------------
    // Carrousel sans dots
    // ------------------------
    const track = document.getElementById('carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.getElementById('next-button');
        const prevButton = document.getElementById('prev-button');

        let currentSlide = 0;

        // Mise à jour de l'affichage
        function updateCarousel() {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
        }

        // Navigation boutons
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                updateCarousel();
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateCarousel();
            });
        }

        // Mise à jour automatique sur redimensionnement
        window.addEventListener('resize', updateCarousel);

        // Lancement initial
        updateCarousel();
    }
});