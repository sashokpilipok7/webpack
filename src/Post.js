export default class Post {
    constructor(title){
        this.title = title
        this.date = new Date()
        this.author = 'Sasha Pylypenko__'
    }

    toString(){
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }
}