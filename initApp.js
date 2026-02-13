import testCreator from './test_generator/testCreator.js';
import testQuestions from './test_generator/testQuestions.js';

const initApp = async () => {
    const main = document.querySelector('.main');

    await new Promise(r => setTimeout(r));

    main.innerHTML = await testCreator();

    main.addEventListener('click', (event) => {
        if (event.target.classList.contains('button-block__start')) {
            testQuestions(main);
        }
    });
}

export default initApp;