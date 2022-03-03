export const calculateCarRate =(quantityOfHour:number):number=>{
  const rateCarPerHour = 1000;
  const rateCarPerDay = 8000;
  let totalRate = 0;

  if (quantityOfHour <= 8) {
    totalRate = quantityOfHour * rateCarPerHour;
    return totalRate;
  }

  if(quantityOfHour >= 8 && quantityOfHour <= 24){
    totalRate = rateCarPerDay;
    return totalRate;
  }

   if(quantityOfHour > 24){
      const hourPerDay = 24
      const totalDays = Math.trunc(quantityOfHour / hourPerDay);
      const extraHours = quantityOfHour % hourPerDay;
      const ratePerDay = totalDays * rateCarPerDay;
      const ratePerExtraHour =extraHours * rateCarPerHour;
      totalRate = ratePerDay + ratePerExtraHour
      return totalRate;
  }
  return totalRate
}