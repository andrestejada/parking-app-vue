import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import FormParking from './FormParking.vue'
describe('testing in the FormParking container',  () => {
  
  const wrapper = mount(FormParking);

  test('should be validate input typeofvehicle is requiered ', async() => {
    const btnSubmit = wrapper.get('[type="submit"]')
    await btnSubmit.trigger('click')

    console.log(wrapper.html())     
    //const alerta = wrapper.get('#tipoDeVehiculo')
    //expect(alerta).toContain('Este campo es requerido')
  });

  // test('should be validate input plate msg is requiere', async() => {
  //   const btnSubmit = wrapper.get('[type="submit"]')
  //   const plate = wrapper.get('[label="Placa"]')

  //   await btnSubmit.trigger('click')
  //   console.log(plate.html())
  //   expect(plate.html()).toContain('Este campo es requerido')   
    
  // });
});