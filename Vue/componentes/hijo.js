Vue.component('hijo',{

    template:
    `
    <div class="bg-success py-2">
        <h4>Soy Wandita {{numero}}</h4>
        <h5>{{nombre}}</h5>
    </div>   
    
    `,

    props:['numero'],

    data(){
        return{
            nombre: 'Oliver'
        }
    },

    mounted(){
        this.$emit('nombreHijo',this.nombre)
    }


    

})