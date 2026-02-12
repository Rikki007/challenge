const initializeResults = (data) => {
    return data.blocks.map(() => ({
        analytical: 0,
        emotional: 0,
        practical: 0,
        inert: 0
    }));
}

export default initializeResults;