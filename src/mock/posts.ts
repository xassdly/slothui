import { PostModel } from "../models/PostModel";
import { post1comms, post2comms, post3comms, post4comms, post5comms, post6comms, post7comms, post8comms, post9comms, post10comms,  } from "./comments";
import { user1, user2, user3, user4, user5, user6, user7, user8, user9  } from "./users";

import postimg1 from './../assets/post_imgs/postimg1.png'
import postimg2 from './../assets/post_imgs/postimg2.png';
import postimg7 from './../assets/post_imgs/postimg7.jpg';
import postimg8 from './../assets/post_imgs/postimg8.jpg';
import postimg9 from './../assets/post_imgs/postimg9.jpg';

export const posts_array: PostModel[] = [];

const post1 = new PostModel(1, user5, "Somewhere over the rainbow", 
  "Some nights feel like dreams you never want to wake up from. The city lights, the calm silence, and the way the sky turns violet — it's like Tokyo is writing poetry with its own colors.", 
  postimg1, 504, post1comms, 19);

const post2 = new PostModel(2, user2, "Downtown Playground", 
  "Just picked up my new ride and took it for a spin around the city. She’s fast, clean, and turning heads already. What do you think? 😎", 
  postimg2, 567, post2comms, 124);

const post3 = new PostModel(3, user3, "Silent Weekend Mode", 
  "I turned off all my notifications for the weekend. No pings, no likes, no endless scrolling. Just me, my thoughts, and some real conversations. Funny how silence feels awkward at first… and then becomes peaceful. Highly recommend.", 
  null, 156, post3comms, 643);

const post4 = new PostModel(4, user6, "Coffee-Stained Desk", 
  "I’ve been staring at the same project for hours. Nothing comes out. Zero inspiration. And yet, I know I have to keep going. Because creativity isn’t magic — it’s discipline dressed as chaos. So I’ll write one bad line. Then another. Eventually, something clicks.", 
  null, 3567, post4comms, 234);

const post5 = new PostModel(5, user7, "Between Filters and Reality", 
  "Sometimes it feels like everyone’s life is a highlight reel — exotic trips, perfect photos, constant wins. But life isn’t curated. It’s messy, confusing, and beautiful in ways that don’t always fit in a square. If you’re struggling, you’re not alone. And you’re doing just fine.", 
  null, 2174, post5comms, 357);

const post6 = new PostModel(6, user8, "Chapter One, Again", 
  "Starting over is scary. Whether it’s a new city, a new habit, or a new mindset — there’s always resistance. But growth lives in that discomfort. One small change. One brave choice. That’s all it takes to begin again.", 
  null, 124, post6comms, 99);

const post7 = new PostModel(7, user1, "Rooftop Sessions", 
  "Late night talks, shared stories, and deep laughs. Some moments don't need fancy places—just good company.", 
  postimg7, 235, post7comms, 1847);

const post8 = new PostModel(8, user4, "Whispers of the Savannah", 
  "Breathtaking silence, endless horizon, and the gentle giant walking free. Nature always has the best stories to tell.", 
  postimg8, 8463, post8comms, 438);

const post9 = new PostModel(9, user9, "After the Fire", 
  "War steals cities, but hope still walks through the rubble. A child with a teddy bear, searching for light in the darkest hour.", 
  postimg9, 756, post9comms, 378);

const post10 = new PostModel(10, user3, "Day 374 of Showing Up", 
  "Today I realized again that the hardest thing in life isn’t achieving success — it’s being consistent. Not the highs of motivation or bursts of productivity, but showing up every single day. Quietly. Without applause. That’s what really moves you forward.", 
  null ,756, post10comms, 378);


posts_array.push(post1, post2, post3, post4, post5, post6, post7, post8, post9, post10);
