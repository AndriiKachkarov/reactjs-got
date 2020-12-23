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

    getAllChars() {
        return this.getResource('/characters?page=5&pageSize=10');
    }

    getChar(id) {
        return this.getResource(`/characters${id}`);
    }
}
