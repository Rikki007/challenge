import testRender from '../renderers/testRender.js';
import fetchTestData from '../services/fetchTestData.js';

const testCreator = async () => {

    const data = await fetchTestData();
    return testRender(data)
    
}

export default testCreator;
