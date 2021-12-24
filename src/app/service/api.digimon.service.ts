import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { DIGIMONS } from '../bdd/digimons-list';




export class InMemoryDataService implements InMemoryDbService{
  createDb() {

    let digimons = DIGIMONS;
    return {digimons};
  }
}
