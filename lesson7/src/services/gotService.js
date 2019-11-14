
export default class GotService {
    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api'
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
            `, received ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters() {
        return this.getResource(`/characters?page=5&pageSize=10`);
    }
    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }
    getAllBooks() {
        return this.getResource(`/books`);
    }
    getAllHouses() {
        return this.getResource(`/houses`);
    }

}
const got = new GotService();


got.getAllCharacters()
    .then(res => console.log(res));
got.getAllCharacters()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });


got.getAllBooks()
    .then(res => console.log(res));
got.getAllBooks()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });
    

got.getAllHouses()
    .then(res => console.log(res));
got.getAllHouses()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });

