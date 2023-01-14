export interface InputListTravelDto {}

type Travel = {
  id: string;
  title: string;
};

export interface OutputListTravelDto {
  trips: Travel[];
}
