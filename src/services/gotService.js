export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

     getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

     getAllCharacters = async() => {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

     getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(res);
    }

    getAllBooks = async () => {
        const res = await this.getResource('/books');
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    }

    getAllHouses= async () => {
        const res = await this.getResource('/houses');
        console.log(res);
        return res.map(this._transformHouse);
    }

    getHouse= async (id) => {
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouse(res);
    }

    _transformCharacter = (char) => {
        return {
            name: char.name || 'Not info',
            gender: char.gender || 'Not info',
            born: char.born || 'Not info',
            died: char.born || 'Not info',
            culture: char.cultures || 'Not info' ,
            id: this._extractId(char)
        }
    }

    _transformHouse = (house) => {
        return {
            name: house.name || 'Not info',
            region: house.region || 'Not info',
            words: house.words || 'Not info',
            titles: house.titles || 'Not info',
            overlord: house.overlord || 'Not info',
            ancestralWeapons: house.ancestralWeapons || 'Not info',
            id: this._extractId(house)
        }
    }

    _transformBook = (book) => {
        return {
            name: book.name || 'Not info',
            numberOfPages: book.numberOfPages || 'Not info',
            publiser: book.publiser || 'Not info',
            released: book.released || 'Not info',
            id: this._extractId(book)
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }
}

