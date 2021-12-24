import { Component, OnInit } from '@angular/core';
import { Digimon } from '../models/digimon';
import { SearchDigimonService } from '../service/search-digimon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public digimons:Digimon[] = [];
  constructor(private dataService:SearchDigimonService) { }

  ngOnInit(): void {

    this.dataService.getDigimons().subscribe(data => {
      this.digimons = data;
      console.log(this.digimons);

    })
  }

}
