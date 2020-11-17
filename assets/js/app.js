
const sr = ScrollReveal({
    reset: true
});
sr.reveal("#card", {
    delay: 5000,
    origin: "right",
    distance: 300+'px',
    duration: 2000,
    reset: true
})
const home = {
    template: "#home",
    data() {
        return {
            menu: true,
            unique: false,
            craft: false,
            discover: false,
            zoom: false,
        }
    },
    
    methods: {
       uniqu: function (){
          if(this.unique == false){
              this.unique = true;
              this.craft = false;
              this.discover = false;
              this.zoom = false
          } else if(this.unique == true){
            this.craft = false;
            this.discover = false;
            this.zoom = false
          }
          this.menu = false
        },
        craftt: function (){
            if(this.craft == false){
                this.craft = true;
                this.unique = false;
                this.discover = false;
                this.zoom = false
            } else if(this.craft == true){
            this.unique = false;
            this.discover = false;
            this.zoom = false
            }
            this.menu = false
        },
        discovery: function (){
            if(this.discover == false){
                this.discover = true;
                this.craft = false;
                this.unique = false;
                this.zoom = false
            } else if(this.discover == true){
            this.craft = false;
            this.unique = false;
            this.zoom = false
            }
            this.menu = false
        },
        zoome: function (){
            if(this.zoom == false){
                this.zoom = true;
                this.craft = false;
                this.discover = false;
                this.unique = false
            } else if(this.zoom == true){
                this.craft = false;
                this.discover = false;
                this.unique = false
            }
            this.menu = false
        }
  },
    
}

const contact = {
    template: "#contact",
    data() {
        return {
            show: false,
            link: "https://free.facebook.com/?_rdr",
            modalshow: false,
            modalshow1: false
        }
    },
    methods: {
        showModal: function(){
            if (this.modalshow == false) {
                this.modalshow = true
            }
        },
        hideModal: function(){
            this.modalshow = false
        }
    },
}

const router = new VueRouter({
    routes:[
        {path: '/', component: home},
        {path: '/contact', component: contact}
    ]  
})
const vue = new Vue({
    router,

}).$mount("#app")