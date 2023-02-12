export interface InputCreateTravelDto {
  title: string;
  destination?: string;
  start_date: string;
  user_id: string;
}

export interface OutputCreateTravelDto {
  id: string;
  title: string;
  destination?: string;
}
