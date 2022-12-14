const { createApp } = Vue


createApp({
    data() {
        return {
            index : 0,
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
        
    },
    created(){


    }


}).mount('#app')