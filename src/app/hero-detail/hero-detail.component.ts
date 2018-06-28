import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    /* + 는 string을 number type으로 변환 */
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
                    .subscribe(hero_arg => this.hero = hero_arg);
  }
}
