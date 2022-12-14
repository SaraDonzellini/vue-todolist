const { createApp } = Vue


createApp({
    data() {
        return {
            newItem : '',

            buyingList : [
                {
                    text : "latte",
                    done : true,
                },
                {
                    text : "pane",
                    done : false,
                },
                {
                    text : "biscotti",
                    done : true,
                },
                {
                    text : "pasta all'uovo",
                    done : false,
                },
                {
                    text : "crocchette per il gatto",
                    done : false,
                },
                {
                    text : "stracchino",
                    done : false,
                },
                {
                    text : "frutta",
                    done : false,
                },
                {
                    text : "calzini",
                    done : true,
                },
                {
                    text : "paperella di gomma",
                    done : false,
                },
                {
                    text : "lenti a contatto",
                    done : true,
                },
            ]

        }
    },
    methods: {
        removeFromList(itemToRemove){
            const listIndex = this.buyingList.indexOf(itemToRemove);
            if ( listIndex > -1 ) {
                this.buyingList.splice(listIndex, 1)
            }
        },
        addToList(){
            if (this.newItem != '' && this.newItem.length >= 2) {
                let newObject = { text: this.newItem, done: false}
                this.buyingList.push(newObject);
                this.newItem = '';
                
            }
        },
        invertLineThrough(index){
            if (this.buyingList[index].done) {
                this.buyingList[index].done = false

            } else {
                this.buyingList[index].done = true
            }
        }
    },
    created(){

    }


}).mount('#app')