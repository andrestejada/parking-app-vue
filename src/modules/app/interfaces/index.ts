export interface FormValues {
  plate: string;
  vehiculeType: string;
}

export interface Vehicle {
  id:number,
  plate:string,
  vehiculeType:string,
  entryDate:Date |string
}