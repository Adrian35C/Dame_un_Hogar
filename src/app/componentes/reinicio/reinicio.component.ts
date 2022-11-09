import { Component, OnInit } from '@angular/core';
import { BotonesServicio,InterfaeceBotones } from '../services/botones.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reinicio',
  templateUrl: './reinicio.component.html',
  styleUrls: ['./reinicio.component.css']
})
export class ReinicioComponent implements OnInit {

  botones:InterfaeceBotones[]=[];

  constructor(
    private _botones :BotonesServicio,
    private _router:Router)
    { }

  ngOnInit(): void { 
    this.botones= this. _botones.getBotones();
    console.log(this.botones)
  }

  Mascotas(index:number){
    console.log("Index:",index);
    this._router.navigate(['/mascotas',index]);
  }

}
