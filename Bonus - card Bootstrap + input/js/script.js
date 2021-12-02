Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            // Stili
            cardClass: 'card',
            cardStyle: 'width: 18rem;',
            imageSrc: 'img/squidgame1.jfif',
            imageClass: 'card-img-top',
            imageAlt: 'Immagine di Squid Game',
            cardBodyClass: 'card-body',
            cardTitleClass: 'card-title',
            cardTextClass: 'card-text',
            cardBtnHref: '#',
            cardBtnClass: 'btn btn-primary',

            // Contenuti
            cardTitleContent: 'Squid Game',
            cardTextContent: 'The Squid Game series revolves around a contest where 456 players, all of whom are in deep financial debt, risk their lives to play a series of deadly children\'s games for the chance to win a 45.6$ billion prize.',
            cardBtnContent: 'Switch image'
        },
        methods: {

        }
    }
);