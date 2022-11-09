import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MascotaServicio {

Mascotas:InterfaeceMascotas [] = [

    {
        nombre: 'Patata',
        descripcion: 'Perrito encontrando en Apodaca, muy cariñoso y amigable ideal para los niños.',
        imagen:'../../../assets/mascotas/img1.jpg',
        edad:'Se calcula entre 1 o 2 meses'
    },

    {
        nombre: 'Jax',
        descripcion: 'Perrito muy amigable y muy jugeton con los demas perritos del asilo.',
        imagen:'../../../assets/mascotas/img3.jpg',
        edad:'2 meses'
    },

    {
        nombre: 'Aula',
        descripcion: 'Perrita timida muy tranquila y comelona y dormilona.',
        imagen:'../../../assets/mascotas/img2.png',
        edad:'1 mes'
    }
]


getMascotas(){
    return this.Mascotas;
}



}



export interface InterfaeceMascotas {
    nombre :string,
    descripcion:string,
    imagen:string,
    edad:string
}

