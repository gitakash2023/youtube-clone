interface Video {
    "kind": "youtube#searchResult",
    "etag": any,
    "id": {
      "kind": string,
      "videoId": string,
      "channelId": string,
      "playlistId": string
    },
    "snippet": {
      "publishedAt": Date,
      "channelId": string,
      "title": string,
      "description": string,
      "thumbnails": {
        [key: string]: {
          "url": string,
          "width": number,
          "height": number
        }
      },
      "channelTitle": string,
      "liveBroadcastContent": string
    }
  }

  export type {Video}