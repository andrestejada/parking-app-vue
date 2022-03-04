import { mount } from "@vue/test-utils";
import { Vehicle } from "../../interfaces";
import VehicleItem from './VehicleItem.vue';

describe('testing vehicle item', () => {
  const vehicle:Vehicle={
    id:1,
    plate:'NOL38F',
    entryDate:'2022-03-03T14:54:15.837Z',
    vehiculeType:'Moto'
  }
  const wrapper = mount(VehicleItem,{
    props:{
      vehicle    
    }
  })
  test('should be containe correct values', () => {
    const typeOfVehicle = wrapper.findAll('p')[0].text();
    const plate = wrapper.findAll('p')[1].text();
    expect(typeOfVehicle).toBe(vehicle.vehiculeType)
    expect(plate).toBe(vehicle.plate)
  });
});