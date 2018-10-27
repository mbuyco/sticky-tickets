import request from 'request-promise'

const geocode = (location) => {
  const uri = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  const options = {
    json: true,
    uri
  }

  return request(options)
    .then(res => {
      if (res.results && res.results.length)
        return res.results[0]
    })
}

export default geocode
