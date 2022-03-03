export const isValitePlate = (plate:string)=>{
  const regex = new RegExp('[a-zA-Z]{3}[0-9]{2}[a-zA-Z0-9]');
  const isValite = regex.test(plate);
  if(isValite){
    return true
  }else{
    return'Placa no valida'
  }

}