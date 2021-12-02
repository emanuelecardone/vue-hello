Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',

        data: {
            // Stili
            cardClass: 'card',
            cardStyle: 'width: 18rem;',
            mainImageSrc: 'img/squidgame1.jfif',
            mainImageClass: 'w-100 h_200p',
            mainImageAlt: 'Immagine di Squid Game',
            cardBodyClass: 'card-body',
            cardTitleClass: 'card-title',
            cardTextClass: 'card-text',
            cardBtnHref: '#',
            cardBtnClass: 'btn btn-primary',
            formClass: 'form_wrapper my-3 d-none',
            othersClass: 'other_images_main_wrapper w-100 pb-2 d-none',
            labelFor: 'exampleInputText',
            labelClass: 'form-label',
            inputType: 'text',
            inputClass: 'form-control',
            inputAriaDescribedBy: 'textHelp',
            helpClass: 'form-text mb-3',
            fluidClass: 'container-fluid',
            rowClass: 'row row-cols-4',
            colClass: 'col',
            othersWrapperClass: 'other_images_sub_wrapper w-100 h-100',
            othersFirstClass: 'other_image other_1 active',
            othersSecondClass: 'other_image other_2',
            othersThirdClass: 'other_image other_3',
            othersFourthClass: 'other_image other_4',
            firstOtherImageSrc: 'img/squidgame1.jfif',
            firstOtherImageAlt: 'Immagine di Squid Game 1',
            secondOtherImageSrc: 'img/squidgame2.jpg',
            secondOtherImageAlt: 'Immagine di Squid Game 2',
            thirdOtherImageSrc: 'img/squidgame3.jpg',
            thirdOtherImageAlt: 'Immagine di Squid Game 3',
            fourthOtherImageSrc: 'img/squidgame4.jpg',
            fourthOtherImageAlt: 'Immagine di Squid Game 4',

            // Contenuti
            cardTitleContent: 'Squid Game',
            cardTextContent: 'The Squid Game series revolves around a contest where 456 players, all of whom are in deep financial debt, risk their lives to play a series of deadly children\'s games for the chance to win a 45.6$ billion prize.',
            cardBtnContent: 'Switch image',
            labelContent: 'Type here the index of the image',
            imagesNames: '(Index: 1, 2, 3, 4)',
            inputContent: '',
            othersBtnContent: 'Confirm'
        },

        methods: {
            // Rimozione d-none al click di button (effetto toggle apri-chiudi)
            showFormAndOthers: function(){
                if(this.cardBtnContent === 'Switch image'){
                    this.formClass = 'form_wrapper my-3';
                    this.othersClass = 'other_images_main_wrapper w-100 pb-2';
                    this.cardBtnContent = 'Close';
                } else{
                    this.formClass = 'form_wrapper my-3 d-none';
                    this.othersClass = 'other_images_main_wrapper w-100 pb-2 d-none';
                    this.cardBtnContent = 'Switch image';
                }
                
            },
            // Viene mostrata come immagine grande quella corrispondente all'index inserito nell'input dall'utente
            // La thumb corrispondente avrà un'animazione e la classe active
            // Inoltre, rimuoverà la classe active a tutte le altre così sono sicuro di rimuovere l'active da qualsiasi thumb sia active
            switchImage: function(){
                switch(this.inputContent){
                    case '1':
                        this.mainImageSrc = this.firstOtherImageSrc;
                        this.othersFirstClass = 'other_image other_1 active';
                        this.othersSecondClass= 'other_image other_2';
                        this.othersThirdClass= 'other_image other_3';
                        this.othersFourthClass= 'other_image other_4';
                        break;
                    case '2':
                        this.mainImageSrc = this.secondOtherImageSrc;
                        this.othersFirstClass = 'other_image other_1';
                        this.othersSecondClass= 'other_image other_2 active';
                        this.othersThirdClass= 'other_image other_3';
                        this.othersFourthClass= 'other_image other_4';
                        break;
                    case '3':
                        this.mainImageSrc = this.thirdOtherImageSrc;
                        this.othersFirstClass = 'other_image other_1';
                        this.othersSecondClass= 'other_image other_2';
                        this.othersThirdClass= 'other_image other_3 active';
                        this.othersFourthClass= 'other_image other_4';
                        break;
                    case '4':
                        this.mainImageSrc = this.fourthOtherImageSrc;
                        this.othersFirstClass = 'other_image other_1';
                        this.othersSecondClass= 'other_image other_2';
                        this.othersThirdClass= 'other_image other_3';
                        this.othersFourthClass= 'other_image other_4 active';
                        break;
                }
            }
        }
    }
);