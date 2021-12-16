import type { NextApiRequest, NextApiResponse } from 'next'

const url = "http://gateway.marvel.com";
const publicKey = "a01bf70b954b50f6f78e350e9673348d";
const hash = "f8478649ac4855dff978e3a46461a14d";
const endpoint = "/v1/public/characters";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fetch(`${url}${endpoint}?ts=1&apikey=${publicKey}&hash=${hash}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
}
