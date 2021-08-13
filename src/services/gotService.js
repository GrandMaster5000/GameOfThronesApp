export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource (url)  {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(res);
    }

    getAllBooks() {
        return this.getResource('/books?page=5&pageSize=10');
    }

    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    getAllHouses() {
        return this.getResource('/houses?page=5&pageSize=10');
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

    _transformCharacter(char) {
        return {
            name: char.name || 'Not info',
            gender: char.gender || 'Not info',
            born: char.born || 'Not info',
            died: char.born || 'Not info',
            culture: char.cultures || 'Not info' 
        }
    }

    _transformHouse(house) {
        return {
            name: house.name || 'Not info',
            region: house.region || 'Not info',
            words: house.words || 'Not info',
            titles: house.titles || 'Not info',
            overlord: house.overlord || 'Not info',
            ancestralWeapons: house.ancestralWeapons || 'Not info'
        }
    }

    _transformBook(book) {
        return {
            name: book.name || 'Not info',
            numberOfPage: book.numberOfPage || 'Not info',
            publiser: book.publiser || 'Not info',
            released: book.released || 'Not info'
        }
    }
}

