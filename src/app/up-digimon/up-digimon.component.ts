import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchDigimonService } from '../service/search-digimon.service';

@Component({
  selector: 'app-up-digimon',
  templateUrl: './up-digimon.component.html',
  styleUrls: ['./up-digimon.component.css']
})
export class UpDigimonComponent implements OnInit {
@Input() digimon:any;

  constructor(private route:ActivatedRoute, private router:Router, private digimonService:SearchDigimonService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.digimon = this.digimonService.getDigimon(id).subscribe(data => {
      this.digimon = data;
    })
  }

  goBack():void{
    this.router.navigate(['']);
  }
  onSubmit(f:NgForm){
    this.digimonService.updateDigimon(this.digimon).subscribe(data => {
      this.digimon = data
    });
    let link = ['/detail', this.digimon.id];
    this.router.navigate(link);

  }


}
