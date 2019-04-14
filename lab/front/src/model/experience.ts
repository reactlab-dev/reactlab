export interface Experience {
  id: string;
  name: string;
  description: string;
  organisation: string;
  practices: string[];
  location: string;
  teamGeneral: People[];
  teamInvolved: People[];
}

export interface People {
  name: string;
  role: string;
}

export interface Infos {
  name?: string;
  description?: string;
  organisation?: string;
  location?: string;
  practices: string[];
}

export interface Teams {
  generalTeam: Array<Partial<People>>;
  involvedTeam: Array<Partial<People>>;
}
