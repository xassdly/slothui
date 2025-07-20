import { CommentModel } from "../models/CommentModel";
import { user1, user2, user3, user4, user5, user6, user7, user8, user9 } from './users';

export const comm1 = new CommentModel(1, user1, "Wow that is really cool", new Date(2025,1,14), 135);
export const comm2 = new CommentModel(2, user6, "I totally agree with you!", new Date(2025, 2, 1), 87);
export const comm3 = new CommentModel(3, user3, "This is amazing work, well done!", new Date(2025, 0, 23), 21);
export const comm4 = new CommentModel(4, user7, "Could be improved a bit.", new Date(2025, 3, 7), 9);
export const comm5 = new CommentModel(5, user2, "Love the attention to detail!", new Date(2025, 4, 15), 54);
export const comm6 = new CommentModel(6, user8, "Not bad at all.", new Date(2025, 5, 19), 32);
export const comm7 = new CommentModel(7, user4, "Keep up the great work!", new Date(2025, 2, 28), 71);
export const comm8 = new CommentModel(8, user5, "I'm impressed by this.", new Date(2025, 3, 3), 104);
export const comm9 = new CommentModel(9, user1, "Could you share how you did this?", new Date(2025, 1, 9), 48);
export const comm10 = new CommentModel(10, user9, "Great post, very helpful.", new Date(2025, 6, 2), 12);
export const comm11 = new CommentModel(11, user6, "I learned something new today.", new Date(2025, 2, 22), 89);

