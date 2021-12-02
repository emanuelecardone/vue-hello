// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            titleContent: 'Ciao sono un titolo H1',
            imageSource: 'img/niagara.jpg',
            imageAlt: 'Cascate del Niagara',
            imageClass: 'image_size'
        }
    }
);