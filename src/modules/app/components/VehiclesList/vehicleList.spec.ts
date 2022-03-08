import VehiclesList from './VehiclesList.vue'
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import vehicles from '../../store'
import { VehiclesState } from '../../store/state';


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
  allVehicles:[
    {
      vehiculeType: "Carro",
      plate: "AVT789",
      entryDate: "2022-03-03T15:07:14.938Z",
      id: 23
    },
  ],
  cellsBikesInUse:0,
  cellsCarInUse:0,
});

describe('testing in the vehicleList component', () => {
  const wrapper=mount(VehiclesList,{
    global:{
      plugins:[store]
    }
  })
  test('should ', () => {
    console.log(wrapper.html())
  });
});