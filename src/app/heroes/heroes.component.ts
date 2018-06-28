import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*hero: Hero = {id: 1, name: 'Winstorm'};*/
  /*heroes = HEROES; */
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    console.log('HeroesComponent Constructor');
  }

  ngOnInit() {
    console.log('HeroesComponent ngOnInit');
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  keyupHandler(event) {
   this.selectedHero.name = event.target.value;
  }

  getHeroes(): void {
    /*this.heroes = this.heroService.getHeroes();*/
    /*Observable<Hero[]> */
    this.heroService.getHeroes()
                    .subscribe(heroes => this.heroes = heroes);
  }
}
