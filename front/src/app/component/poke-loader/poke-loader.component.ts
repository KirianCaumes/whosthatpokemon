import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-loader',
  templateUrl: './poke-loader.component.html',
  styleUrls: ['./poke-loader.component.scss']
})
export class PokeLoaderComponent implements OnInit {

  selectedId = "normal"

  constructor() { }

  ngOnInit() {

    const ids = ['normal', 'great', 'ultra', 'master', 'safari']

    this.selectedId = ids[Math.floor(Math.random() * Math.floor(ids.length))]

  }

}
