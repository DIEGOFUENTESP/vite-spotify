export const bannerData = [
  {
    "id": "1dfeR4HaWDbWqFHLkxsg1d",
    "bannerImage": "https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982",
    "bannerTitle": "QUEEN",
  },
  {
    "id": "11wRdbnoYqRddKBrpHt4Ue",
    "bannerImage": "https://i.scdn.co/image/ab6761610000e5eba572b3112ccbf374488fed58",
    "bannerTitle": "OASIS",
  },
  {
    "id": "3fMbdgg4jU18AjLCKBhRSm",
    "bannerImage": "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa",
    "bannerTitle": "MICHAEL JACKSON",
  },
  {
    "id": "2ye2Wgw4gimLv2eAKyk1NB",
    "bannerImage": "https://i.scdn.co/image/ab6761610000e5eb69ca98dd3083f1082d740e44",
    "bannerTitle": "METALLICA",
  },
  {
    "id": "0nmQIMXWTXfhgOBdNzhGOs",
    "bannerImage": "https://i.scdn.co/image/ab6761610000e5ebe8ff09aeb4a345c03ff560b6",
    "bannerTitle": "AVENGED SEVENFOLD",
  },
  {
    "id": "7okwEbXzyT2VffBmyQBWLz",
    "bannerImage": "https://i.scdn.co/image/ab6761610000e5eb152dcec8175d19fb12eeb8e0",
    "bannerTitle": "MANÁ",
  },
  
];

export async function obtenerCanciones(id) {
  const client_id = '033cfb5074b24bd999e1e8cc9bcb7ce1';
  const client_secret = 'fae1fa7869f64bf5bed1a97416b35380';
  const grant_type = 'client_credentials';

  const URL = 'https://accounts.spotify.com/api/token';

  // let id = "1dfeR4HaWDbWqFHLkxsg1d";//11wRdbnoYqRddKBrpHt4Ue
  const URLCANCIONES = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=us`;

  const data = `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;

  const peticion = {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data
  };

  try {
    let response = await fetch(URL, peticion);
    let tokenResponse = await response.json();

    const token = tokenResponse.token_type + " " + tokenResponse.access_token;
    const peticionCanciones = {
      method: "GET",
      headers: {
        'Authorization': token,
      },
    };

    let respuestaCanciones = await fetch(URLCANCIONES, peticionCanciones);
    let canciones = await respuestaCanciones.json();

    // Aquí se incluyen las propiedades bannerImage y bannerTitle en la respuesta
    return {
      bannerImage: bannerData.find(artist => artist.id === id).bannerImage,
      bannerTitle: bannerData.find(artist => artist.id === id).bannerTitle,
      tracks: canciones.tracks,
    };
  } catch (error) {
    // Manejar errores de solicitud
    console.error(error);
    throw new Error('Error al obtener canciones');
  }
}