import { UserModel } from "./UserModel";
import { CommentModel } from "./CommentModel";

export class PostModel {
    user: UserModel;
    location: string;
    content: string;
    image: string;
    likes: number;
    comments: CommentModel[];
    reposts: number;

    constructor(user: UserModel, location: string, content: string, image: string, likes: number, comments: CommentModel[] = [], reposts: number){
        this.user = user;
        this.location = location;
        this.content = content;
        this.image = image;
        this.likes = likes;
        this.comments = comments;
        this.reposts = reposts;
    }
}