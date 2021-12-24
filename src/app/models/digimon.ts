export class Digimon {
  id?:number;
  name: string;
  picture: string;
  level: string;
  attack: number;
  agility: number;
  type: string;


  constructor(

    name: string = '',
    picture: string = '',
    level: string = '',
    attack: number = 0,
    agility: number = 0,
    type: string = ''
  ){

    this.name = name;
    this.picture = picture;
    this.level = level;
    this.attack = attack;
    this.agility = agility;
    this.type = type;

  }
}


