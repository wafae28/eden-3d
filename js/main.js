(function ($) {
    "use strict";

    // Spinner
    window.addEventListener('load', function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    });
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
   $(window).scroll(function () {
    if (window.innerWidth > 991.98) {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('position-fixed bg-dark shadow-sm');
        } else {
            $('.navbar').removeClass('position-fixed bg-dark shadow-sm');
        }
    }
});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);

// Gestion du formulaire de soumission
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si on arrive avec le paramètre success=true
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        // Afficher le message de succès
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
            // Scroll vers le formulaire
            document.getElementById('soumission').scrollIntoView({ behavior: 'smooth' });
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                successMessage.style.display = 'none';
                // Nettoyer l'URL sans recharger la page
                window.history.replaceState({}, document.title, window.location.pathname + '#soumission');
            }, 5000);
        }
    }
    
    // Gestion de l'envoi du formulaire avec effet loading
    const form = document.getElementById('projectSubmissionForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('.btn-submit');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Le formulaire sera soumis normalement vers Formspree
            // Le loading s'arrêtera après la redirection
        });
    }
});
