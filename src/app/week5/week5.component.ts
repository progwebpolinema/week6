import { Component, OnInit } from '@angular/core';
import { Buku } from '../shared/buku';

@Component({
  selector: 'app-week5',
  templateUrl: './week5.component.html',
  styleUrls: ['./week5.component.css']
})
export class Week5Component implements OnInit {
  daftarBuku:Buku[] = [];
  judul = '';
  penerbit = '';
  pengarang = '';
  buku;

  constructor() { }

  ngOnInit() {
  }

  tambahBuku(){
    this.buku = new Buku(this.judul, this.pengarang, this.penerbit);
    this.daftarBuku.push(this.buku);
    this.judul = '';
    this.pengarang = '';
    this.penerbit = '';
  }

}
