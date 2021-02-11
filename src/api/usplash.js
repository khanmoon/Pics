import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XUOABN4t4zudTUpCgYPR_zIHVgZyLMJU_p2UCCinTOo"
  }
});
