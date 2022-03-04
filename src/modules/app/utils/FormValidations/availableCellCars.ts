export const availableCellCars = (cellCarsInUse:number) => {
  const maxQuantityOfCell = 20;
  if (cellCarsInUse >= maxQuantityOfCell) {
    return false;
  }
  return true;
};
