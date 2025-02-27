import { Personality, Species } from "./request";

export interface VillagersResponseDto {
  url: string;
  name: string;
  alt_name: string;
  title_color: string;
  text_color: string;
  id: string;
  image_url: string;
  species: Species;
  personality: Personality;
  gender: Gender;
  birthday_month: string;
  birthday_day: string;
  sign: Sign;
  quote: string;
  phrase: string;
  prev_phrases: string[];
  clothing: string;
  islander: boolean;
  debut: Debut;
  appearances: Appearances[];
  nh_details: NhDetails;
}

export type Gender = "Male" | "Female";

export type Sign =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";

export type Debut =
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

export type Appearances =
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

export interface NhDetails {
  image_url: string;
  photo_url: string;
  icon_url: string;
  quote: string;
  "sub-personality": SubPersonality;
  catchphrase: string;
  clothing: string;
  clothing_variation: string;
  fav_styles: string[];
  fav_colors: string[];
  hobby: Hobby;
  house_interior_url: string;
  house_exterior_url: string;
  house_wallpaper: string;
  house_flooring: string;
  house_music: string;
  house_music_note: string;
  umbrella: string;
}

export type SubPersonality = "A" | "B";

export type Hobby =
  | "Education"
  | "Fashion"
  | "Fitness"
  | "Music"
  | "Nature"
  | "Play";
