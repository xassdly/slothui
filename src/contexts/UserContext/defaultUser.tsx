import type { UserModel } from '../../models/UserModel';
import avatar from "./../../assets/avatars/userAvatar.png";

export const defaultUser: UserModel = { id: 0, username: 'Artur', avatar: avatar, email: "xassdly@gmail.com", country: "Ukraine", plan: "pro" };