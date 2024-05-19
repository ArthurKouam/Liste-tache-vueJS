const app = Vue.createApp({
    data(){
        return{
            taches: [
                {
                    nom: "vaiselle",
                    fait: false,
                },
                {
                    nom: "cuisine",
                    fait: false,
                },
            ],
            nouveau: {
                nom: "",
                fait: false,
            }
        }
    },
    methods: {
        ajoute(){
            if (this.nouveau.nom != "") {
                this.taches.push(this.nouveau);
                this.nouveau = {nom: "", fait: false};
            }else{
                alert("Veuillez remplir le champs");
            }   
            this.save();
        }, 

        sup(i){
            this.taches.splice(i, 1);
            this.save();
        },

        vrai(index){
            this.taches[index].fait == false ? this.taches[index].fait = true : this.taches[index].fait = false;
                
        },
        save(){
            localStorage.setItem("task", JSON.stringify(this.taches));
        },
        loade(){
            let loadToStorage = localStorage.getItem("task");
            this.taches = JSON.parse(loadToStorage);
        }
        
    },
    computed: {
        
    },
})