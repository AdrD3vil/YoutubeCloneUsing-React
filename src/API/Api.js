import axios from "axios";

let KEY ="AIzaSyCTVrvtJWkAMN6oOfZWPRh293PrU9nY4PA";
export const baseParams = {
    part : "snippet",
    maxResults: 50,
    key: KEY,
};
let YoutubeApi = axios.create ({
    baseURL: "https://www.googleapis.com/youtube/v3",
});

export default YoutubeApi;