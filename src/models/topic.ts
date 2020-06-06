import { Comment } from './comment';

export interface Topic {
  id?: string,
  body: string,
  done: boolean,
  comments: Comment[],
}
