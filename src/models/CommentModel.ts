import { UserModel } from "./UserModel";

export class CommentModel {
    user: UserModel;
    content: string;
    date: Date;

    constructor(user: UserModel, content: string, date: Date){
        this.user = user;
        this.content = content;
        this.date = date;
    }
}