import { mount } from "@vue/test-utils";
import FormParking from './FormParking.vue'
describe('testing in the FormParking container',  () => {
  
  const wrapper = mount(FormParking);

  test('should be validate inputs field cant be empty', async() => {
    const btnSubmit = wrapper.get('[type="submit"]')
    const plate = wrapper.get('[label="Placa"]')

    await btnSubmit.trigger('click')

    let typeOfVehicules = wrapper.get('[label="Tipo de Vehiculo"]')
    console.log(wrapper.find('div').html())
    
    
    
  });
});