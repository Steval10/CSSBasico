Vue.component ('saludo',{
    template:
    `
    <div>
        <h3>{{saludo}}</h3>
        
    </div>   

    `
    ,
    data(){
        return{
            saludo : 'Contador'
        }
    }
})