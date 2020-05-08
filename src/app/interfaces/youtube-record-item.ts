import {Snippet} from './snippet';

export  interface YoutubeRecordItem extends Snippet {
  publishedAt: string;
  videoId: string;
}
