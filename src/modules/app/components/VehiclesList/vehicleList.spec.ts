import VehiclesList from './VehiclesList.vue'
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import vehicles from '../../store'
import { VehiclesState } from '../../store/state';
import { Vehicle } from '../../interfaces/index';
import { vehiclesApi } from '../../../../api/vehicles';

const allVehiclesResponse:Vehicle[]=[
  {
    vehiculeType: "Carro",
    plate: "AVT789",
    entryDate: "2022-03-03T15:07:14.938Z",
    id: 23
  },
  {
    vehiculeType: "Moto",
    plate: "NOL38F",
    entryDate: "2022-03-02T15:07:14.938Z",
    id: 24
  },
]

const createVuexStore =(initialState:VehiclesState)=>createStore({
  modules:{
    vehicles:{
      ...vehicles,
      state:{
        ...initialState
      }
    }
  }
})

const store = createVuexStore({
  allVehicles:[],
  cellsBikesInUse:0,
  cellsCarInUse:0,
});


describe('testing in the vehicleList component', () => {
  vi.spyOn(vehiclesApi,'get').mockResolvedValue({data:allVehiclesResponse})
  const wrapper=mount(VehiclesList,{
    global:{
      plugins:[store],
      
    }
  })
  test('should be render all vehicle items getting to the store', () => {
    const quantityOfVehicles = wrapper.find('ul').element.childElementCount
    expect(quantityOfVehicles).toBe(allVehiclesResponse.length)
  });
});