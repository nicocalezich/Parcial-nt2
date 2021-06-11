<template>

  <div class="jumbotron">
    <vue-form :state="formState" @submit.prevent="agregar()">
      <validate tag="div">
        <label for="nombre" class="mt-1">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          autocomplete="off"
          class="form-control mt-1"
          v-model.trim="formData.nombre"
          :minlength="caracterMin"
          :maxlength="caracterMax"
          required
          in-between-spaces
        >
        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Debe completar este campo</div>
          <div slot="minlength" class="alert alert-danger mt-1">Debe ingresar como minimo {{caracterMin}} caracteres</div>
          <div v-if="formData.nombre.length == caracterMax" class="alert alert-warning mt-1">Puede ingresar como maximo {{caracterMax}} caracteres</div>
          <div slot="in-between-spaces" class="alert alert-danger mt-1">No se permiten espacios intermedios</div>
        </field-messages>
      </validate> 

      <validate tag="div"> 
        <label for="apellido" class="mt-1">Apellido</label>
        <input 
          type="text" 
          id="apellido"
          name="apellido"
          autocomplete="off"
          class="form-control mt-1"
          v-model.trim="formData.apellido"
          :minlength="caracterMin"
          :maxlength="caracterMax"
          required
          in-between-spaces

        >
        <field-messages name="apellido" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Debe completar este campo</div>
          <div slot="minlength" class="alert alert-danger mt-1">Debe ingresar como minimo {{caracterMin}} caracteres</div>
          <div v-if="formData.apellido.length == caracterMax" class="alert alert-warning mt-1">Puede ingresar como maximo {{caracterMax}} caracteres</div>
          <div slot="in-between-spaces" class="alert alert-danger mt-1">No se permiten espacios intermedios</div>
        </field-messages>
      </validate>  

       <validate tag="div"> 
        <label for="nota" class="mt-1">Nota</label>
        <input
          type="number"
          id="nota" 
          name="nota"
          autocomplete="off"
          class="form-control mt-1"
          v-model.trim="formData.nota"
          required
          have-valid-number
        >
         <field-messages name="nota" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Debe completar este campo</div>
          <div slot="have-valid-number" class="alert alert-danger mt-1">La nota debe ser un valor entre 0 y 10</div>
        </field-messages>
      </validate> 
      <button type="submit" :disabled="formState.$invalid" class="btn btn-success mt-3">Agregar</button>
    </vue-form>
    <br>
    <table class="table table-dark">
      <thead>
        <th>Nombre y apellido</th>
        <th>Nota</th>
      </thead>
      <tbody>   
        <tr v-for="(object,index) in alumnos" :key="index" class="table-darprimaryk">
          <td class="table-active">{{object.nombre}} {{object.apellido}}</td>
          <td :style="getColores(object.nota)" class="table-active">{{object.nota}}</td>
        </tr>
        <tr>
          <td :style="getColores(promedio)" class="table-active">El promedio de notas es: {{promedio}}</td>
          <td class="table-active"></td>
        </tr>
      </tbody>
    </table>   
    
   
  </div>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formData: this.getInicialData(),
        formState: {},
        caracterMin: 3,
        caracterMax: 15,
        alumnos: [],
        cantNotas: 0,
        sumaTot: 0,

      }
    },
    methods: {
      getInicialData(){
        return{
          nombre: '',
          apellido: '',
          nota: ''
        }
      },

      agregar(){
        console.log({...this.formData})
        this.alumnos.push({...this.formData})
        this.sumarNota(parseFloat(this.formData.nota))
        this.contarNota()
        console.log('suma total',this.sumaTot,'cantidad',this.cantNotas)
        this.formData = this.getInicialData()
        this.formState._reset() 
      },
      sumarNota(nota){
         this.sumaTot += nota
      },
      contarNota(){
        this.cantNotas += 1
      },
      getColores(nota){
        if(nota >=0 && nota<=3){
          return  {
             color: 'red',
           }
          }
          else if(nota >=4 && nota<=6){
            return  {
             color: 'yellow',
           }
          }
          else if(nota >=7 && nota<=10){
            return  {
             color: 'green',
           }
          }
        
      },

    },
    computed: {
      promedio(){
        return this.sumaTot/this.cantNotas
      }
    }
}

</script>

<style scoped lang="css">

 .jumbotron{
   background-color: rgb(128, 110, 133);
   padding: 50px;
 }
 label{
   font-size: 21px;
   color: white;
 }
 table{
   color: black;
 }

 
</style>
