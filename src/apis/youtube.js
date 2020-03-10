import axios from "axios";
const KEY = "AIzaSyDGF-WOD89HlYTWqxIz-qdo-6VdYI2Qumg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: `${KEY}`,
    maxResults: 5
  }
});
