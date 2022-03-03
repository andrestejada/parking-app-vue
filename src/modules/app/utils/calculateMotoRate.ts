export const calculateMotoRate =(quantityOfHour:number):number=>{
  const rateMotoPerHour = 500;
  const rateMotoPerDay = 4000;
  let totalRate = 0;

  if (quantityOfHour <= 8) {
    totalRate = quantityOfHour * rateMotoPerHour;
    return totalRate;
  }

  if(quantityOfHour >= 8 && quantityOfHour <= 24){
    totalRate = rateMotoPerDay;
    return totalRate;
  }

   if(quantityOfHour > 24){
      const hourPerDay = 24
      const totalDays = Math.trunc(quantityOfHour / hourPerDay);
      const extraHours = quantityOfHour % hourPerDay;
      const ratePerDay = totalDays * rateMotoPerDay;
      const ratePerExtraHour =extraHours * rateMotoPerHour;
      totalRate = ratePerDay + ratePerExtraHour
      return totalRate;
  }
  return totalRate
}