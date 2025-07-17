import { User } from "./User";
import { Comment } from "./Comment";

export class PostModel {
    user: User;
    location: string;
    content: string;
    image: string;
    likes: number;
    comments: Comment[];
    reposts: number;

    constructor(user: User, location: string, content: string, image: string, likes: number, comments: Comment[] = [], reposts: number){
        this.user = user;
        this.location = location;
        this.content = content;
        this.image = image;
        this.likes = likes;
        this.comments = comments;
        this.reposts = reposts;
    }
}