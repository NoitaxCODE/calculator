export const getAudioUrl = async () => {

  try {
    const headers = {
      'Accept': 'application/json'
    };

    const resp = await fetch('https://audius-discovery-16.cultur3stake.com/v1/tracks/jYAq5pM/stream?app_name=CALCULATOR', {
      method: 'GET',
      headers: headers
    })


    return resp.url

  } catch (error) {
    console.log(error)
  }
}
