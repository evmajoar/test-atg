export interface IMinutes {
  id: number | string;
  time: number | string;
}

export interface IApiData {
  count: number;
  categories?: string[];
  blocks?: string[];
  minutes?: IMinutes[];
}
