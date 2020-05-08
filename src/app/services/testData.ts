import {YoutubeRecordsApi} from '../interfaces/youtube-records-api';
import {YoutubeRecordItem} from '../interfaces/youtube-record-item';

export const youtubeRecordsApi: YoutubeRecordsApi = {
  kind: 'youtube#searchListResponse',
  etag: 'zImbQJdlWW-RwDalR6M_cIW9I2c',
  nextPageToken: 'CDIQAA',
  regionCode: 'BY',
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 50
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: '-h9n9Pf2VtjbkccjwNbibDygvmE',
      id: {
        kind: 'youtube#video',
        videoId: '3fumBcKC6RE'
      },
      snippet: {
        publishedAt: '2011-05-12T20:01:31Z',
        channelId: 'UCEOhcOACopL42xyOBIv1ekg',
        title: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
        description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'LilWayneVEVO',
        liveBroadcastContent: 'none',
        publishTime: '12.05.11 11:01'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'h8VldbQ3s-mytSq5wNCaiGdZMtE',
      id: {
        kind: 'youtube#video',
        videoId: 'xIpxI7iakfs'
      },
      snippet: {
        publishedAt: '2020-05-05T14:00:26Z',
        channelId: 'UCFBO5h2l4Py0hXtSzETH7mw',
        title: 'Be Brave Baby John | The Doctor Checkup Song | Little Angel Kids Songs',
        description: 'Visiting a Doctor is never fun and Baby John is scared too. But in the end,' +
          ' Doctor gives Baby John an airplane toy as a gift for being very brave. Find out how he ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/xIpxI7iakfs/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/xIpxI7iakfs/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/xIpxI7iakfs/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Little Angel Playtime',
        liveBroadcastContent: 'none',
        publishTime: '05.05.20 05:00'
      }
    },
  ]
};

export const youtubeRecordItems: YoutubeRecordItem[] = [
  {
    videoId: '3fumBcKC6RE',
    publishedAt: '12.05.11 11:01',
    channelId: 'UCEOhcOACopL42xyOBIv1ekg',
    title: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
    description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'LilWayneVEVO',
    liveBroadcastContent: 'none',
    publishTime: '12.05.11 11:01'
  },
  {
    videoId: 'xIpxI7iakfs',
    publishedAt: '05.05.20 05:00',
    channelId: 'UCFBO5h2l4Py0hXtSzETH7mw',
    title: 'Be Brave Baby John | The Doctor Checkup Song | Little Angel Kids Songs',
    description: 'Visiting a Doctor is never fun and Baby John is scared too. But in the end,' +
      ' Doctor gives Baby John an airplane toy as a gift for being very brave. Find out how he ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/xIpxI7iakfs/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/xIpxI7iakfs/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/xIpxI7iakfs/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'Little Angel Playtime',
    liveBroadcastContent: 'none',
    publishTime: '05.05.20 05:00'
  },
];
