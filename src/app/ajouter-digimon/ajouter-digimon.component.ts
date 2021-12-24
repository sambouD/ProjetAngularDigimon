import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DIGIMONS } from '../bdd/digimons-list';
import { Digimon } from '../models/digimon';
import { SearchDigimonService } from '../service/search-digimon.service';

@Component({
  selector: 'app-ajouter-digimon',
  templateUrl: './ajouter-digimon.component.html',
  styleUrls: ['./ajouter-digimon.component.css']
})
export class AjouterDigimonComponent implements OnInit {

digimons = DIGIMONS;
@Input() digimon: Digimon = new Digimon();
  constructor(private router: Router, private digimonService: SearchDigimonService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){

    this.digimonService.addDigimon(this.digimon).subscribe(data => {
      this.digimon = data
    });
    let link = ['/detail', this.digimon.id];
    this.router.navigate(link);
    alert('Bravo! vous venez d\'avoir un nouveau compagnon ' + this.digimon.name + ' Je vous souhaite une bonne aventure dans le Digimonde !');

  }

}
