import { TestBed, async, fakeAsync } from '@angular/core/testing';

import { ApiServiceService } from './api-service.service';
import Pretender from 'pretender';
import { HttpClientModule } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';

//TODO setup pretender

const pokemons = [{
  "id_pokemon": 1,
  "name": {
    "de": "Bisasam",
    "en": "Bulbasaur",
    "fr": "Bulbizarre",
    "ja": "フシギダネ",
    "ko": "이상해씨",
    "zh-hans": "妙蛙种子",
    "zh-hant": "妙蛙種子"
  },
  "generation": 1,
  "enable": true
},
{
  "id_pokemon": 152,
  "name": {
    "de": "Endivie",
    "en": "Chikorita",
    "fr": "Germignon",
    "ja": "チコリータ",
    "ko": "치코리타",
    "zh-hans": "菊草叶",
    "zh-hant": "菊草葉"
  },
  "generation": 2,
  "enable": true
},
{
  "id_pokemon": 252,
  "name": {
    "de": "Geckarbor",
    "en": "Treecko",
    "fr": "Arcko",
    "ja": "キモリ",
    "ko": "나무지기",
    "zh-hans": "木守宫",
    "zh-hant": "木守宮"
  },
  "generation": 3,
  "enable": true
},
{
  "id_pokemon": 387,
  "name": {
    "de": "Chelast",
    "en": "Turtwig",
    "fr": "Tortipouss",
    "ja": "ナエトル",
    "ko": "모부기",
    "zh-hans": "草苗龟",
    "zh-hant": "草苗龜"
  },
  "generation": 4,
  "enable": true
},
{
  "id_pokemon": 495,
  "name": {
    "de": "Serpifeu",
    "en": "Snivy",
    "fr": "Vipélierre",
    "ja": "ツタージャ",
    "ko": "주리비얀",
    "zh-hans": "藤藤蛇",
    "zh-hant": "藤藤蛇"
  },
  "generation": 5,
  "enable": true
},
{
  "id_pokemon": 650,
  "name": {
    "de": "Igamaro",
    "en": "Chespin",
    "fr": "Marisson",
    "ja": "ハリマロン",
    "ko": "도치마론",
    "zh-hans": "哈力栗",
    "zh-hant": "哈力栗"
  },
  "generation": 6,
  "enable": true
}];

const server = new Pretender(function () {
  this.get(origin + '/api/pokemon/:id', request => {
    let pkmn = pokemons.find(x => x.id_pokemon == request.params.id)
    return [200, { ContentType: 'application/json' }, JSON.stringify(pkmn)];
  });
  this.get(origin + '/api/pokemon/random', request => {
    let gen = []
    if (JSON.parse(request.queryParams.one)) gen.push(1)
    if (JSON.parse(request.queryParams.two)) gen.push(2)
    if (JSON.parse(request.queryParams.three)) gen.push(3)
    if (JSON.parse(request.queryParams.four)) gen.push(4)
    if (JSON.parse(request.queryParams.five)) gen.push(5)
    if (JSON.parse(request.queryParams.six)) gen.push(6)
    if (JSON.parse(request.queryParams.seven)) gen.push(7)
    var pkmn = pokemons.find(x => gen.includes(x.generation))
    return [200, { ContentType: 'application/json' }, JSON.stringify(pkmn)];
  });
});

describe('ApiServiceService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
      ],
      providers: [
        SettingsService
      ]
    }).compileComponents();
  }));
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);
    expect(service).toBeTruthy();
  });

  it('Get one Pokemon by id', async () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);

    const pkmn = await service.getOnePkmById(1).toPromise();
    expect(pkmn.id_pokemon).toBe(1);
  });

  it('Get one Pokemon by gens', async () => {
    const settingsService: SettingsService = TestBed.get(SettingsService);

    settingsService.editGens({ one: false, two: false, three: true, four: false, five: false, six: false, seven: false })

    const service: ApiServiceService = TestBed.get(ApiServiceService);

    const pkmn = await service.getOneRandomPkm().toPromise();

    expect(pkmn.generation).toBe(3);
  });
});
