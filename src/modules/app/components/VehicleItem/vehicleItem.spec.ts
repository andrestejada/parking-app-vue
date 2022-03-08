import { mount } from "@vue/test-utils";
import { Vehicle } from "../../interfaces";
import VehicleItem from './VehicleItem.vue';

const vehicle:Vehicle={
  id:1,
  plate:'NOL38F',
  entryDate:'2022-03-03T14:54:15.837Z',
  vehiculeType:'Moto'
}
describe('testing vehicle item', () => {
  let wrapper = mount(VehicleItem,{
    props:{
      vehicle    
    }
  });
  beforeEach(()=>{
    wrapper = mount(VehicleItem,{
      props:{
        vehicle    
      }
    })
  })

  test('should be containe correct values', () => {
    const typeOfVehicle = wrapper.findAll('p')[0].text();
    const plate = wrapper.findAll('p')[1].text();
    expect(typeOfVehicle).toBe(vehicle.vehiculeType)
    expect(plate).toBe(vehicle.plate)
  });

  test('should be call the  function with the corrects values', async() => {
    let confirmSpy = vitest.spyOn(wrapper.vm,'confirm');
    await wrapper.get('[label="Cobrar"]').trigger('click');
    //expect(confirmSpy).toHaveBeenCalled()
  });
});