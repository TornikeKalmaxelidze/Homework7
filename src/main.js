function getCities() {
    const cities = [];

    for (let i = 0; i < 50; i++) {
        cities.push({
            name: `City ${i}`,
            population: Math.floor((Math.random() * 9000000) + 50000)
        })
    }
    return cities;
}
