import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchDigimonService } from '../service/search-digimon.service';

@Component({
  selector: 'app-detail-digimon',
  templateUrl: './detail-digimon.component.html',
  styleUrls: ['./detail-digimon.component.css']
})
export class DetailDigimonComponent implements OnInit {
digimon:any;

  constructor(private route:ActivatedRoute, private router:Router, private digimonService:SearchDigimonService) { }

  ngOnInit(): void {
    let id =this.route.snapshot.params['id'];
    this.digimon = this.digimonService.getDigimon(id).subscribe(data => {
      this.digimon = data;
    })
  }

  goBack():void{
    this.router.navigate(['']);
  }

  remove(){
    this.digimonService.deleteDigimon(this.digimon).subscribe(_=> this.goBack());
  }

}
