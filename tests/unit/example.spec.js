import {apiCalls} from '../utils.js';
import data from '../data.js';
import mockAxios from 'axios';


let mockData = {"adult":false,"backdrop_path":"/hMbP23EkGk6tjEjRZQXhnVAl5fW.jpg","belongs_to_collection":null,"budget":50000000,"genres":[{"id":14,"name":"Fantasy"},{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":878,"name":"Science Fiction"}],"homepage":"https://hellboy.movie","id":456740,"imdb_id":"tt2274648","original_language":"en","original_title":"Hellboy","overview":"Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.","popularity":130.12,"poster_path":"/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg","production_companies":[{"id":48738,"logo_path":null,"name":"Campbell Grobman Films","origin_country":"US"},{"id":552,"logo_path":"/9dGdLfm3GteWeUDtD9c9tvlidUG.png","name":"Dark Horse Entertainment","origin_country":"US"},{"id":1020,"logo_path":"/kuUIHNwMec4dwOLghDhhZJzHZTd.png","name":"Millennium Films","origin_country":"US"},{"id":491,"logo_path":"/rUp0lLKa1pr4UsPm8fgzmnNGxtq.png","name":"Summit Entertainment","origin_country":"US"},{"id":120256,"logo_path":null,"name":"Boyana Film Studios","origin_country":""},{"id":92915,"logo_path":null,"name":"Encore Films","origin_country":""},{"id":840,"logo_path":null,"name":"Lawrence Gordon Productions","origin_country":""}],"production_countries":[{"iso_3166_1":"BG","name":"Bulgaria"},{"iso_3166_1":"GB","name":"United Kingdom"},{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2019-04-10","revenue":44664690,"runtime":120,"spoken_languages":[{"english_name":"German","iso_639_1":"de","name":"Deutsch"},{"english_name":"Russian","iso_639_1":"ru","name":"Pусский"},{"english_name":"Turkish","iso_639_1":"tr","name":"Türkçe"},{"english_name":"English","iso_639_1":"en","name":"English"}],"status":"Released","tagline":"Demons Have Demons Too","title":"Hellboy","video":false,"vote_average":5.5,"vote_count":2367};

let mockDataTest = {"adult":false,"backdrop_path":"/hMbP23EkGk6tjEjRZQXhnVAl5fW.jpg","belongs_to_collection":null,"budget":50000000,"genres":[{"id":14,"name":"Fantasy"},{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":878,"name":"Science Fiction"}],"homepage":"https://hellboy.movie","id":456740,"imdb_id":"tt2274648","original_language":"en","original_title":"Hellboy","overview":"Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.","popularity":130.12,"poster_path":"/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg","production_companies":[{"id":48738,"logo_path":null,"name":"Campbell Grobman Films","origin_country":"US"},{"id":552,"logo_path":"/9dGdLfm3GteWeUDtD9c9tvlidUG.png","name":"Dark Horse Entertainment","origin_country":"US"},{"id":1020,"logo_path":"/kuUIHNwMec4dwOLghDhhZJzHZTd.png","name":"Millennium Films","origin_country":"US"},{"id":491,"logo_path":"/rUp0lLKa1pr4UsPm8fgzmnNGxtq.png","name":"Summit Entertainment","origin_country":"US"},{"id":120256,"logo_path":null,"name":"Boyana Film Studios","origin_country":""},{"id":92915,"logo_path":null,"name":"Encore Films","origin_country":""},{"id":840,"logo_path":null,"name":"Lawrence Gordon Productions","origin_country":""}],"production_countries":[{"iso_3166_1":"BG","name":"Bulgaria"},{"iso_3166_1":"GB","name":"United Kingdom"},{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2019-04-10","revenue":44664690,"runtime":120,"spoken_languages":[{"english_name":"German","iso_639_1":"de","name":"Deutsch"},{"english_name":"Russian","iso_639_1":"ru","name":"Pусский"},{"english_name":"Turkish","iso_639_1":"tr","name":"Türkçe"},{"english_name":"English","iso_639_1":"en","name":"English"}],"status":"Released","tagline":"Demons Have Demons Too","title":"Hellboy","video":false,"vote_average":5.5,"vote_count":2367}

jest.mock('axios');


describe('api calls', () => {
  afterEach(jest.clearAllMocks);

  test('should return a single movie', async() => {
    mockAxios.get.mockResolvedValue(mockData)
    const result = await apiCalls.fetchSingleMovie(456740);
    expect(result).toEqual(mockDataTest);
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  });

  test('should return a list of movies', async() => {
    mockAxios.get.mockResolvedValue(data)
    const result = await apiCalls.getTrendingMovies();
    expect(result.results).toHaveLength(20)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  });

  test('should return a list of 5 movies', async() => {
    mockAxios.get.mockResolvedValue(data);
    const result = await apiCalls.fetchRecommendations(456740)
    expect(result.results.slice(0, 5)).toHaveLength(5);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

})