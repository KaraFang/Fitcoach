export const workoutOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2b16864bbdmsh9375c527235bbf5p13b1c2jsn9d6bdc7abf70',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();

    return data;
}