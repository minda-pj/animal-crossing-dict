export interface VillagersRequestDto {
  name?: string;
  species?: Species;
  personality?: Personality;
  game?: Game;
  birthmonth?: string;
  birthday?: string;
  nhdetails?: string;
  excludedetails?: string;
  thumbsize?: number;
}

export type Species =
  | "alligator"
  | "anteater"
  | "bear"
  | "bear cub"
  | "bird"
  | "bull"
  | "cat"
  | "cub"
  | "chicken"
  | "cow"
  | "deer"
  | "dog"
  | "duck"
  | "eagle"
  | "elephant"
  | "frog"
  | "goat"
  | "gorilla"
  | "hamster"
  | "hippo"
  | "horse"
  | "koala"
  | "kangaroo"
  | "lion"
  | "monkey"
  | "mouse"
  | "octopus"
  | "ostrich"
  | "penguin"
  | "pig"
  | "rabbit"
  | "rhino"
  | "rhinoceros"
  | "sheep"
  | "squirrel"
  | "tiger"
  | "wolf";

export type Personality =
  | "big sister"
  | "cranky"
  | "jock"
  | "lazy"
  | "normal"
  | "peppy"
  | "sisterly"
  | "smug"
  | "snooty";

export type Game =
  | "DNM"
  | "AC"
  | "E_PLUS"
  | "WW"
  | "CF"
  | "NL"
  | "WA"
  | "NH"
  | "FILM"
  | "HHD"
  | "PC";
