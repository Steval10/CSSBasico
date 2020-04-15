Vue.component('padre',{

    template:
    `
    <div class="bg-dark p-5">
        <h4 class="text-white">Soy el padre: {{numeroPadre}}</h4>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombrePadre}}
        <hijo :numero = "numeroPadre" @nombreHijo = "nombrePadre = $event"></hijo>
        
    </div>   
    
    `,

    data(){
        return{
            numeroPadre : 0,
            nombrePadre : ''
        }
    }


    

})