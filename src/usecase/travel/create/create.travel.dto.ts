export interface InputCreateTravelDto {
  title: string;
  destination?: string;
  start_date: string;
}

export interface OutputCreateTravelDto {
  id: string;
  title: string;
  destination?: string;
}
