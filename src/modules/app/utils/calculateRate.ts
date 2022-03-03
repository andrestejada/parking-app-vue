import { calculateHours } from "./calculateHours";
import { calculateMotoRate } from "./calculateMotoRate";
import { calculateCarRate } from './calculateCarRate';
export const calculateRate = (date: string | Date, typeVehicle: string) => {
  const quantityOfhour = calculateHours(date);
  console.log(quantityOfhour)
  let totalRate: number; 
  
  if(typeVehicle === 'Moto'){
    totalRate = calculateMotoRate(quantityOfhour);
  }else{
    totalRate = calculateCarRate(quantityOfhour);
  } 
  console.log(totalRate)
  return totalRate
 
};
