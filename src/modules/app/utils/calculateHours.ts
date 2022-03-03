import { differenceInHours } from 'date-fns'


export const calculateHours=(date:string|Date)=>{
  const entryDate = new Date(date)
  const currentDay = new Date()
  const quantiyofHours = differenceInHours(currentDay,entryDate,{roundingMethod:'ceil'});
  return quantiyofHours;
}