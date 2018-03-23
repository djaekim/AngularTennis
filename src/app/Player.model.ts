
// there is not decorator in here
// model  is just a blueprint for each object we create 
export class Player {
    public name: string; 
    public country: string;
    public age: number;
    public imagePath: string;

    constructor(name: string, country: string, age: number, path: string){
        this.name = name;
        this.country = country;
        this.age = age;
        this.imagePath = path;
    }
}