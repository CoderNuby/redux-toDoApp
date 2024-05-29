
export class ToDo {
    public id: number = 0;
    public text: string = "";
    public completed: boolean = false;

    constructor(_text: string){
        this.text = _text;

        this.id = Math.random();
        this.completed = false;
    }
}
