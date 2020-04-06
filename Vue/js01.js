const app = new Vue({
    el:'#app',
    data:{
        titulo:'Wandita Lucia',
        carros:[
            {nombre:'BMW', cantidad:2},
            {nombre:'MAZDA', cantidad:7},
            {nombre:'CHEVY', cantidad:0},
        ],
        nuevocarro:'',
        total:0
    },
    methods:{
        agregarcarro(){
            this.carros.push(
            {
                nombre:this.nuevocarro, cantidad:0
            })
            this.nuevocarro = '' ;
        }
        
    },
    computed:{
        sumarCarros(){
            this.total = 0;
            for(xxx of this.carros){
                
                this.total += xxx.cantidad
            }
            return this.total
        }
    }
})
