export interface FinancialMatrics {
  group: string,
  metrics: metric[]
}

export interface metric {
  name: string,
  checked: boolean
}

export interface Tile {
  cols: number;
  color: string;
}
