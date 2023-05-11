import axios from "axios";
export default function getData(url: string) {
  // handle the data fetching here and ['hydra:member'] is the data that you want to return and set header to application/ld+json with axios
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_HOST}/${url}`, {
      headers: {
        "Content-Type": "application/ld+json",
      },
    })
    .then((res) => {
      // check if the data contains ['hydra:member'] and return it
      if (res.data["hydra:member"]) {
        return res.data["hydra:member"];
      }
      // if not return the data
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("done");
    });
}

export function getDataById(url: string, id: string | null) {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_HOST}/${url}/${id}`, {
      headers: {
        "Content-Type": "application/ld+json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
