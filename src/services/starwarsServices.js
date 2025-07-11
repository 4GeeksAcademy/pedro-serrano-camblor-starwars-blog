export async function getCharacters() {
    try {
        let response = await fetch('https://www.swapi.tech/api/people/', {
            method: 'GET'
        })
        let data = await response.json()

        if (response.status === 200) {
            return data.results
        }


    } catch (error) {
        console.log("Error getting characters: ", error);

    }

}

export async function getCharacterDetails(id) {
    try {
        let response = await fetch('https://www.swapi.tech/api/people/'+id, {
            method: 'GET'
        })
        let data = await response.json()

        if (response.status === 200) {
            return data.results
        }


    } catch (error) {
        console.log("Error getting character details: ", error);

    }

}


export async function getPlanets() {
    try {
        let response = await fetch('https://www.swapi.tech/api/planets/', {
            method: 'GET'
        })
        let data = await response.json()

        if (response.status === 200) {
            return data.results
        }


    } catch (error) {
        console.log("Error getting planets: ", error);

    }

}

export async function getPlanetDetails(id) {
    try {
        let response = await fetch('https://www.swapi.tech/api/planets/'+id, {
            method: 'GET'
        })
        let data = await response.json()

        if (response.status === 200) {
            return data.results
        }


    } catch (error) {
        console.log("Error getting planet details: ", error);

    }

}

export async function getStarships() {
    try {
        let response = await fetch('https://www.swapi.tech/api/starships/', {
            method: 'GET'
        })
        let data = await response.json()

        if (response.status === 200) {
            return data.results
        }


    } catch (error) {
        console.log("Error getting starships: ", error);

    }

}

export async function getStarshipDetails(id) {
    try {
        let response = await fetch('https://www.swapi.tech/api/starships/'+id, {
            method: 'GET'
        })
        let data = await response.json()

        if (response.status === 200) {
            return data.results
        }


    } catch (error) {
        console.log("Error getting characters: ", error);

    }

}