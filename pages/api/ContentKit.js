import axios from 'axios'

const FORM_ID = 3367018
const API_KEY = process.env.CONVERTKIT_PUBLIC
const URL = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`

export default function ContentKit(req, res) {
  return axios
    .post(URL, { api_key: API_KEY, email: req.body.email })
    .then((response) => {
      res.status(200).json('User Subscribed')
    })
    .catch((err) => {
      res.status(err.status).json('An error has occurred')
    })
}
