
export const availableCellBikes = (cellBikesInUse:number) => {
  const maxQuantityOfCell = 10;
  if (cellBikesInUse >= maxQuantityOfCell) {
    return false;
  }
  return true;
};
