<template>

  <section class="src-components-tabla">
     <table class="table table-light">
      <thead>
        <th>Nro. de pregunta</th>
        <th>Respuestas</th>
      </thead>
      <tbody>   
        <tr v-for="(object,index) in preguntas" :key="index">
          <td class="table-active">{{object.numero}}</td>
          <td class="table-active">{{object.respuestas}}</td>
        </tr>
      </tbody>
    </table>  
  
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-tabla',
    props: [],
    mounted () {

    },
    data () {
      return {
       preguntas : [
        { numero: 1, respuestas: ['c'] },
        { numero: 2, respuestas: ['c'] },
        { numero: 3, respuestas: ['a','b'] },
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
 table{
   color: black;
 }
</style>
