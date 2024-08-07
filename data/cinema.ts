type RawCinema = [string,number,number]

type Cinema = {
    key: string,
    name:string,
    lat:number,
    lng: number
}

const cinemas: RawCinema[]=[
    ["TIFF Lightbox", 43.6465, -79.3903],
    ["Hot Docs Ted Rogers Cinema", 43.6656, -79.4113],
    ["Revue Cinema", 43.6499, -79.4506],
    ["Paradise Theatre", 43.6572, -79.4425],
    ["Imagine Cinemas Carlton Cinema", 43.6629, -79.3790],
    ["CineCycle", 43.6491, -79.3950],
    ["Fox Theatre", 43.6728, -79.2956],
    ["The Royal", 43.6556, -79.4145],
    ["Kingsway Theatre", 43.6514, -79.5110],
    ["Innis Town Hall", 43.6659, -79.3997],
]

const formatted: Cinema[]=cinemas.map(([name,lat,lng])=>({
    name,
    lat,
    lng,
    key:JSON.stringify({name,lat,lng})
}))

export default formatted