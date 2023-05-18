/* RICHIESTA
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: "Hello Vue",
            immagine: "https://picsum.photos/200/300"
        }
    }
}).mount("#myApp");