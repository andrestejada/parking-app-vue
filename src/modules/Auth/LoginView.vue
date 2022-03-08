<template>
  <div class="main-container row items-center justify-center">
    <div class="form-login-container col-11 col-sm-6 col-md-4 col-lg-3" >
      <h4 class="text-h4 q-mb-sm text-center">Login</h4>
      <q-separator color="secondary" size="3px" class="q-mb-lg" />  
      <q-form
        class="q-gutter-md q-mt-sm"
        @submit.prevent="login"
      > 
      <q-input
        type="text"
        filled
        label="Email"
        placeholder="correo@correo.com"
        lazy-rules
        v-model="loginValues.email"
        :rules="[ val => val && val.length > 0 || 'El correo es obligatorio' ,isValidEmail]"
      />

      <q-input
        filled
        type="password"
        label="Contaseña"
        placeholder="*******"
        lazy-rules
        v-model="loginValues.password"
        :rules="[ val => val && val.length > 0 || 'La contraseña es obligatoria']"
      />
       <div v-if="msgError" inline-actions class="text-white bg-red q-pa-md text-center">
        {{msgError}}
      </div>
      <div class="row justify-center" >
        <q-btn class="col-6" label="Iniciar Sesion" type="submit" color="secondary"/>
      </div>
    </q-form>
    </div>  
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { isValidEmail } from './utils/emailValidation';
interface LoginValues{
  email:string;
  password:string
}
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter()
    const initialValues:LoginValues = {
      email:'',
      password:''
    }
    const loginValues = ref<LoginValues>({...initialValues});
    const msgError = ref('')
    return{
      msgError,
      loginValues,
      isValidEmail,
      login:async()=>{
        msgError.value=''
        const {ok,msg} = await store.dispatch('auth/login',loginValues.value)
        if(!ok){
          msgError.value = msg
          return
        }
        router.push({name:'app'})
      }
    }
  },
})
</script>


<style scoped lang="scss">
  .main-container{
    width: 100vw;
    height: 100vh;
    background-color: rgb(230, 255, 247);
  }

  .form-login-container{
    border-radius: 15px;
    border: 1px solid #e5e4e4;
    padding: 1em;
    background-color: #fff;
    height:300px;
    box-shadow: 0px 0px 1px 1px #c7c7c721;
  }
</style>