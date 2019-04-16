export interface Experience {
  id: string;
  name: string;
  description: string;
  organisation: string;
  expertise: string;
  practices: string[];
  location: string;
  team: People[];
}

export interface People {
  name: string;
  role: string;
}
