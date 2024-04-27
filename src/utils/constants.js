export const LOGO_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png";

export const AVATAR_IMG =
  "https://cdni.iconscout.com/illustration/premium/thumb/business-woman-5373575-4498296.png";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;
