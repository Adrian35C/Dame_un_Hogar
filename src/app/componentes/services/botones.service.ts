import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BotonesServicio {

    Botones:InterfaeceBotones [] = [
    
        {
         titulo:'Mandar Correo'
        },
    
        {
         titulo:'Regresar'
        }
           
    ]
    
    getBotones(){
        return this.Botones;
    }

    getBoton(idx:any){
        return this.Botones[idx];
    }
    
    }

export interface InterfaeceBotones {
    titulo: string
}
