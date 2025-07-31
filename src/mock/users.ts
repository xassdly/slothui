import type { UserModel } from "../models/UserModel";

import ava1 from './../assets/avatars/a1.png';
import ava5 from './../assets/avatars/a5.png';
import ava2 from './../assets/avatars/a2.png';
import ava3 from './../assets/avatars/a3.png';
import ava4 from './../assets/avatars/a4.png';
import ava6 from './../assets/avatars/a6.png';
import ava7 from './../assets/avatars/a7.png';
import ava8 from './../assets/avatars/a8.png';
import ava9 from './../assets/avatars/a9.png';
import ava10 from './../assets/avatars/a10.png';
import ava11 from './../assets/avatars/a11.png';
import ava12 from './../assets/avatars/a12.png';
import ava13 from './../assets/avatars/a13.png';
import ava14 from './../assets/avatars/a14.png';
import ava15 from './../assets/avatars/a15.png';
import ava16 from './../assets/avatars/a16.png';
import ava17 from './../assets/avatars/a17.png';
import ava18 from './../assets/avatars/a18.png';
import ava19 from './../assets/avatars/a19.png';

export const user1: UserModel = { id: 1, username: "Goodboy", avatar: ava1, email: "hello@gmail.com", country: "USA", plan: "free" };
export const user2: UserModel = { id: 2, username: "Fox", avatar: ava2, email: "foxie@mail.com", country: "Canada", plan: "pro" };
export const user3: UserModel = { id: 3, username: "Busyman", avatar: ava3, email: "busy@work.com", country: "Germany", plan: "pro" };
export const user4: UserModel = { id: 4, username: "Viktor", avatar: ava4, email: "viktor@ukr.net", country: "Ukraine", plan: "free" };
export const user5: UserModel = { id: 5, username: "Steve", avatar: ava5, email: "steve.jobs@apple.com", country: "USA", plan: "free" };
export const user6: UserModel = { id: 6, username: "Rebecca", avatar: ava6, email: "rebecca@gmail.com", country: "UK", plan: "premium" };
export const user7: UserModel = { id: 7, username: "Sasha", avatar: ava7, email: "sasha@proton.me", country: "Poland", plan: "free" };
export const user8: UserModel = { id: 8, username: "Marina", avatar: ava8, email: "marina@sea.com", country: "Italy", plan: "free" };
export const user9: UserModel = { id: 9, username: "Tata", avatar: ava9, email: "tata@cute.org", country: "Georgia", plan: "free" };

const user10: UserModel = { id: 10, username: "Nina", avatar: ava10, email: "nina@mountain.org", country: "Brazil", plan: "free" };
const user11: UserModel = { id: 11, username: "Anna", avatar: ava11, email: "anna@flower.net", country: "France", plan: "free" };
const user12: UserModel = { id: 12, username: "Max", avatar: ava12, email: "maximus@power.com", country: "Spain", plan: "pro" };
const user13: UserModel = { id: 13, username: "Leo", avatar: ava13, email: "leo@lion.com", country: "Ireland", plan: "free" };
const user14: UserModel = { id: 14, username: "Emily", avatar: ava14, email: "emily@heart.org", country: "Morocco", plan: "free" };
const user15: UserModel = { id: 15, username: "Lucy", avatar: ava15, email: "lucy@star.com", country: "Greece", plan: "free" };
const user16: UserModel = { id: 16, username: "Ivan", avatar: ava16, email: "ivan@vodka.ru", country: "Estonia", plan: "free" };
const user17: UserModel = { id: 17, username: "Omar", avatar: ava17, email: "omar@desert.com", country: "Switzerland", plan: "premium" };
const user18: UserModel = { id: 18, username: "Ken", avatar: ava18, email: "ken@japan.co.jp", country: "Japan", plan: "free" };
const user19: UserModel = { id: 19, username: "Sarah", avatar: ava19, email: "sarah@book.club", country: "Netherlands", plan: "free" };

export const friendsMock: UserModel[] = [ user10, user11, user12, user13, user14, user15, user16, user17, user18, user19 ];

