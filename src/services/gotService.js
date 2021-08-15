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

    checkData = (data) => {
        return !data ? 'Not info' : data;
    }

    _transformCharacter = (char) => {
        return {
            name: this.checkData(char.name),
            gender: this.checkData(char.gender),
            born: this.checkData(char.born),
            died: this.checkData(char.born),
            culture: this.checkData(char.cultures) ,
            id: this._extractId(char)
        }
    }

    _transformHouse = (house) => {
        return {
            name: this.checkData(house.name),
            region: this.checkData(house.region),
            words: this.checkData(house.words),
            titles: this.checkData(house.titles[0]),
            overlord: this.checkData(house.overlord),
            ancestralWeapons: this.checkData(house.ancestralWeapons[0]),
            id: this._extractId(house)
        }
    }

    _transformBook = (book) => {
        return {
            name: this.checkData(book.name),
            numberOfPages: this.checkData(book.numberOfPages),
            publiser: this.checkData(book.publiser),
            released: this.checkData(book.released),
            id: this._extractId(book)
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }
}

