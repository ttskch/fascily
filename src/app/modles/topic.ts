import { Comment } from './comment'

export interface Topic {
  id: number,
  body: string,
  done: boolean,
  comments: Comment[],
}
