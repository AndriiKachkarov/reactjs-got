 export default class GotService {

    _apiBase = 'https://www.anapioficeandfire.com/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllChars() {
        const chars = await this.getResource('/characters?page=5&pageSize=10');
        return chars.map(char => this._transformChar(char));
    }

    async getChar(id) {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    }

    async getAllHouses() {
        const houses = await this.getResource('/houses/');
        return houses.map(this._transformHose);
    }

     async getHouse(id) {
         const house = await this.getResource(`/houses/${id}`);
         return this._transformHose(house);
     }

     async getAllBooks() {
         const books = await this.getResource('/books/');
         return books.map(this._transformBook());
     }

     _transformChar(char) {
        return {
            id: char.url.split('/').pop(),
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
     }

     _transformHose(house) {
         return {
             name: house.name,
             region: house.region,
             words: house.words,
             titles: house.titles,
             overlord: house.overlord,
             ancestralWeapons: house.ancestralWeapons
         }
     }

     _transformBook(book) {
         return {
             name: book.name,
             numberOfPages: book.numberOfPages,
             publiser: book.publiser,
             released: book.released,
         }
     }
}
