import { User } from "./User";

export class Comment {
    user: User;
    content: string;

    constructor(user: User, content: string){
        this.user = user;
        this.content = content;
    }
}