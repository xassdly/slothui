import { PostModel } from "../models/PostModel";
import { comm1, comm2, comm3, comm4, comm5, comm6, comm7, comm8, comm9, comm10, comm11 } from "./comments";
import { user1, user2, user3, user4, user5, user6, user7, user8, user9  } from "./users";

import postimg1 from './../assets/post_imgs/postimg1.png'
import postimg2 from './../assets/post_imgs/postimg2.png';
import postimg3 from './../assets/post_imgs/postimg3.png';
import postimg4 from './../assets/post_imgs/postimg4.png';
import postimg5 from './../assets/post_imgs/postimg5.png';
import postimg6 from './../assets/post_imgs/postimg6.png';

export const posts_array: PostModel[] = [];

const post1 = new PostModel(user5, "Somewhere over the rainbow", "Look at my new car", postimg1, 504, [comm1], 19);
const post2 = new PostModel(user2, "Somewhere over the rainbow", "Look at my new car", postimg2, 567, [comm2, comm3], 124);
const post3 = new PostModel(user3, "Somewhere over the rainbow", "Look at my new car", postimg3, 156, [comm4, comm5, comm6], 643);
const post4 = new PostModel(user6, "Somewhere over the rainbow", "Look at my new car", postimg4, 3567, [comm7], 234);
const post5 = new PostModel(user7, "Somewhere over the rainbow", "Look at my new car", postimg5, 2174, [comm8, comm11], 357);
const post6 = new PostModel(user8, "Somewhere over the rainbow", "Look at my new car", postimg6, 124, [comm9, comm10], 99);

posts_array.push(post1, post2, post3, post4, post5, post6);
