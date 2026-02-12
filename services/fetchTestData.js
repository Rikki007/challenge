const fetchTestData = async () => {
    const response = await fetch("./data/test.json");
    return await response.json();
}

export default fetchTestData;