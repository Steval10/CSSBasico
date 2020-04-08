const app = new Vue({
    el: '#app',
    data:{
        Titulo: 'Gym',
        Tareas:[],
        nuevaTarea:''
    },
    methods:{
        agregarTarea(){
            this.Tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            this.nuevaTarea = ''
            localStorage.setItem("gym-db",JSON.stringify(this.Tareas));
        },
        activarTarea(index){
            this.Tareas[index].estado = true
            localStorage.setItem("gym-db",JSON.stringify(this.Tareas));
        },
        eliminar(index){
            this.Tareas.splice(index,1)
            localStorage.setItem("gym-db",JSON.stringify(this.Tareas));
        }
    },
    created(){
        let datosLS = JSON.parse(localStorage.getItem("gym-db"))
        if(datosLS == null){
            this.Tareas = []
        }
        else{
            this.Tareas = datosLS
        }
    }
}) 