import Vue from 'vue'
import VueForm from 'vue-form'

let options = {
    validators:{
        'in-between-spaces': function(value){
            return !value.includes(' ')
        },

        'have-valid-number': function(value){
            return value >= 0 && value <=10
        }
    }
}

Vue.use(VueForm, options)