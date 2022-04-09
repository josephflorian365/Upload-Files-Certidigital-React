import axios from "axios";

export default axios.create({
  baseURL: "http://loadfiless3backend-env-1.eba-ybjtaaap.us-east-1.elasticbeanstalk.com/s3",
  headers: {
    "Content-type": "application/json",
  },
});
