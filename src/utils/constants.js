export const LOGO_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png";

export const AVATAR_ACCOUNT = "https://avatar.iran.liara.run/public/41";

export const AVATAR_LIVECHAT = "https://avatar.iran.liara.run/public/38";

export const AVATAR_COMMENTS = "https://avatar.iran.liara.run/public/37";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 25;
