
(function () {

    var model = {
        skillCounter: 0,
        navToggled: false,
    }

    var app = {

        init: function () {
            this.cacheDOM();
            this.bindEvents();
            this.toggleScroll();
            this.showSkill(model.skillCounter, 0);
        },

        cacheDOM: function () {
            this.$skill = document.getElementsByClassName('skill');
            this.$skillArrow = $('.slider-arrow');
            this.$navOverlay = $('.nav-overlay');
            this.$toggleNav = $('.toggle-nav');
        },

        bindEvents: function () {
            this.$skillArrow.on('click', this.skillSlider.bind(this));
            this.$toggleNav.on('click', this.toggleNav.bind(this));
            $(window).scroll(this.toggleScroll);
            $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(this.smoothScroll);
        },

        toggleScroll: function () {
            if ($(document).scrollTop() > 0) {
                $('nav').addClass('nav-scroll');
            } else {
                $('nav').removeClass('nav-scroll');
            }

            var scrollBarLocation = $(this).scrollTop();
            $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').each(function () {
                var sectionOffset = $(this.hash).offset().top;
                if (Math.floor(sectionOffset) <= scrollBarLocation) {
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        },

        showSkill: function (j, value) {
            var length = this.$skill.length;
            for (var i = 0; i < length; i++) {
                $(this.$skill[i]).hide();
            }
            if (value == 0) {
                $(this.$skill[j]).show();
            }
            else if (value > 0) {
                this.animateCSS($(this.$skill[j]), "fadeIn");
                /* $(this.$skill[j]).addClass("animate__animated animate__fadeInLeft").show()
                .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                    $(this.$skill[j]).removeClass("animate__animated animate__fadeInLeft");
                  }) */
            }
            else {//else neg transition, transition to left
                this.animateCSS($(this.$skill[j]), "fadeIn");
                /* $(this.$skill[j]).addClass("animate__animated animate__fadeInRight").show()
                .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                    $(this.$skill[j]).removeClass("animate__animated animate__fadeInRight");
                  }) */
            }

        },

        skillSlider: function (e) {
            var i = $(e.target).attr('value');
            model.skillCounter += Number(i);
            if (model.skillCounter < 0) {
                model.skillCounter = this.$skill.length - 1;
            }
            this.showSkill(model.skillCounter % this.$skill.length, i);
        },

        toggleNav: function () {
            if (model.navToggled) {
                this.$navOverlay.css('width', '0%');
                model.navToggled = false;
            } else {
                this.$navOverlay.css('width', '100%');
                model.navToggled = true;
            }
        },

        smoothScroll: function (e) {
            e.preventDefault();
            (model.navToggled) ? app.toggleNav() : '';
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000);
        },

        animateCSS: function (node, animation, prefix = 'animate__') {
            // We create a Promise and return it
            new Promise((resolve, reject) => {
                const animationName = `${prefix}${animation}`;
                //const node = document.querySelector(element);

                node.addClass(`${prefix}animated`+" "+animationName).show();

                // When the animation ends, we clean the classes and resolve the Promise
                function handleAnimationEnd() {
                    node.classList.remove(`${prefix}animated`, animationName);
                    resolve('Animation ended');
                }

                node.addEventListener('animationend', handleAnimationEnd, { once: true });
            });
        },

    }

    app.init()

})();