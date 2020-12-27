 export default class GotService {

    _apiBase = 'https://www.anapioficeandfire.com/api';

     getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }

        return await res.json();
    };

     getAllChars = async () => {
        const chars = await this.getResource('/characters?page=5&pageSize=10');
        return chars.map(char => this._transformChar(char));
    };

     getChar = async (id) => {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    };

     getAllHouses = async () => {
        const houses = await this.getResource('/houses/');
        return houses.map(this._transformHose);
    };

     getHouse = async (id) => {
         const house = await this.getResource(`/houses/${id}`);
         return this._transformHose(house);
     };

     getAllBooks = async () => {
         const books = await this.getResource('/books/');
         return books.map(this._transformBook);
     };

     getBook = async (id) => {
         const book = await this.getResource(`/books/${id}`);
         return this._transformBook(book);
     };

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
             id: house.url.split('/').pop(),
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
             id: book.url.split('/').pop(),
             name: book.name,
             numberOfPages: book.numberOfPages,
             publisher: book.publisher,
             released: book.released,
         }
     }
}
