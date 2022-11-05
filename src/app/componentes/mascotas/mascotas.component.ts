import { Component, OnInit } from '@angular/core';
import { MascotaServicio,InterfaeceMascotas } from '../services/mascotas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

mascotas:InterfaeceMascotas []=[];

  constructor(private _datosmascotas :MascotaServicio,
    private _router:Router) { }

  ngOnInit(): void {
    this.mascotas= this. _datosmascotas.getMascotas();
    console.log(this.mascotas)
  }

  Mascotas(index:number){
    console.log("Index:",index);
    this._router.navigate(['/mascotas',index]);
  }

}
