const API_URL = 'https://devy-redirect-production.up.railway.app/api/punter'

const getShorterUrl = async (url) => {
  return fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  })
    .then(res => res.json())
}

export default getShorterUrl
