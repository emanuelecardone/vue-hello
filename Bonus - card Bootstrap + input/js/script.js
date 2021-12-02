Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',

        data: {
            // Stili
            cardClass: 'card',
            cardStyle: 'width: 18rem;',
            mainImageSrc: 'img/squidgame1.jfif',
            mainImageClass: 'card-img-top',
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
            helpClass: 'form-text',
            fluidClass: 'container-fluid',
            rowClass: 'row row-cols-3',
            colClass: 'col',
            othersWrapperClass: 'other_images_sub_wrapper w-100 h-100',
            othersImageClass: 'other_image w-100 h-100',
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
            imagesNames: '(Index: 1, 2, 3)',
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
            switchImage: function(){
                // Effetto toggle: se la src dell'immagine grande non è quella che corrisponde con l'index che scrivo nella input, lo diventa. 
                // La foto piccola che corrisponde alla mia scelta assumerà la src che aveva l'immagine grande
                // Se scelgo Index 1, quella che era grande diventerà Index 1. Se riscrivo Index 1 si riscambiano
                // Se ho scelto Index 1 e poi scrivo Index 3, la Index 1 diventa main e poi diventa Index 3, la vecchia Index 3 ora sarà main
                // Questo switch è possibile in qualsiasi momento tenendo sempre conto della posizione attuale dell'immagine che voglio guardare
                switch(this.inputContent){
                    case '1':
                        if(this.mainImageSrc !== 'img/squidgame2.jpg'){
                            this.secondOtherImageSrc = this.mainImageSrc;
                            this.mainImageSrc = 'img/squidgame2.jpg';
                            break;
                        } else{
                            this.mainImageSrc = this.secondOtherImageSrc;
                            this.secondOtherImageSrc = 'img/squidgame2.jpg';
                            break;
                        }
                    case '2':
                        if(this.mainImageSrc !== 'img/squidgame3.jpg'){
                            this.thirdOtherImageSrc = this.mainImageSrc;
                            this.mainImageSrc = 'img/squidgame3.jpg';
                            break;
                        } else{
                            this.mainImageSrc = this.thirdOtherImageSrc;
                            this.thirdOtherImageSrc = 'img/squidgame3.jpg';
                            break;
                        }
                    case '3':
                        if(this.mainImageSrc !== 'img/squidgame4.jpg'){
                            this.fourthOtherImageSrc = this.mainImageSrc;
                            this.mainImageSrc = 'img/squidgame4.jpg';
                            break;
                        } else{
                            this.mainImageSrc = this.fourthOtherImageSrc;
                            this.fourthOtherImageSrc = 'img/squidgame4.jpg';
                            break;
                        }
                        
                }
            }
        }
    }
);