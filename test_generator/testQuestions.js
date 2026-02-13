import fetchTestData from '../services/fetchTestData.js';
import initializeResults from '../services/initialazeResults.js';
import resultsReturn from '../services/resultsReturn.js';

const testQuestions = async (main) => {
    const data = await fetchTestData();
    const results = initializeResults(data);

    let blockIndex = 0;
    let questionIndex = 0;

    const nextQuestion = () => {
        questionIndex++;

        if (questionIndex >= data.blocks[blockIndex].questions.length) {
            questionIndex = 0;
            blockIndex++;
        }

        if (blockIndex >= data.blocks.length) {
            main.innerHTML = `
                <section class="test-wrapper">
                    ${resultsReturn(results)}
                </section>
            `;
            return;
        }

        render();
    };

    const render = () => {
        const block = data.blocks[blockIndex];
        const question = block.questions[questionIndex];

        main.innerHTML = `
            <section class="test-wrapper">

                <div class="info-wrapper">
                
                    <h2 class="test-wrapper__name">${block.blockName}</h2>
                    <p class="test-wrapper__question">${question.question}</p>

                </div>
                
                <div class="test-wrapper__answers">

                    ${question.answers
                    .map(a => `
                        <button class="test-wrapper__answer" data-type="${a.type}">
                            ${a.answer}
                        </button>
                    `)
                    .join("")}

                </div>
                
            </section>
        `;

        // обработка кликов по ответам
        document
            .querySelectorAll(".test-wrapper__answer")
            .forEach(btn => {
                btn.addEventListener("click", () => {
                    const type = btn.dataset.type;
                    results[blockIndex][type]++;
                    nextQuestion();
                });
            });
    };

    render();
};

export default testQuestions;
