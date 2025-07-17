import { UserModel } from "./UserModel";

export class CommentModel {
    user: UserModel;
    content: string;
    date: Date;
    likes: number;

    constructor(user: UserModel, content: string, date: Date, likes: number){
        this.user = user;
        this.content = content;
        this.date = date;
        this.likes = likes
    }
}