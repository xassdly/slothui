import type { UserModel } from "./UserModel";

export class StoryModel {
    user: UserModel;
    content: string;

    constructor (user: UserModel, content: string) {
        this.user = user;
        this.content = content;
    }
}