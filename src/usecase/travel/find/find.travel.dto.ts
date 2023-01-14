export interface InputFindTravelDto {
  id: string;
}

export interface OutputFindTravelDto {
  id: string;
  user_id?: string;
  title: string;
  destination?: string;
}
