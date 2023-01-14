export interface InputCreateTravelDto {
  title: string;
  destination?: string;
}

export interface OutputCreateTravelDto {
  id: string;
  title: string;
  destination?: string;
}
