import { StoryModel } from "../models/StoryModel";

import storyimg1 from './../assets/stories_content/storyimg1.jpg';
import storyimg2 from './../assets/stories_content/storyimg2.jpg';
import storyimg3 from './../assets/stories_content/storyimg3.jpg';
import storyimg4 from './../assets/stories_content/storyimg4.jpg';
import storyimg5 from './../assets/stories_content/storyimg5.jpg';
import storyimg6 from './../assets/stories_content/storyimg6.jpg';
import storyimg7 from './../assets/stories_content/storyimg7.jpg';
import storyimg8 from './../assets/stories_content/storyimg8.jpg';
import storyimg9 from './../assets/stories_content/storyimg9.jpg';

import { user1, user2, user3, user4, user5, user6, user7, user8, user9  } from "./users"

export const story_array: StoryModel[] = [];

const story1 = new StoryModel(user1, storyimg1);
const story2 = new StoryModel(user2, storyimg2);
const story3 = new StoryModel(user3, storyimg3);
const story4 = new StoryModel(user4, storyimg4);
const story5 = new StoryModel(user5, storyimg5);
const story6 = new StoryModel(user6, storyimg6);
const story7 = new StoryModel(user7, storyimg7);
const story8 = new StoryModel(user8, storyimg8);
const story9 = new StoryModel(user9, storyimg9);

story_array.push(story1,story2,story3,story4,story5,story6,story7,story8,story9);