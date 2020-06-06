import { Topic } from './topic';

export interface Board {
  id?: string,
  name: string,
  topics: Topic[],
}
