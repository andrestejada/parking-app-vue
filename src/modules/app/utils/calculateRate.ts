import { calculateHours } from "./calculateHours";
import { calculateMotoRate } from "./calculateMotoRate";
import { calculateCarRate } from './calculateCarRate';
export const calculateRate = (date: string | Date, typeVehicle: string) => {
  const quantityOfhour = calculateHours(date);
  let totalRate: number; 
  
  if(typeVehicle === 'Moto'){
    totalRate = calculateMotoRate(quantityOfhour);
  }else{
    totalRate = calculateCarRate(quantityOfhour);
  } 
  return totalRate
 
};
