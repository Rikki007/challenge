const inertRender = (res) => {
    return `
        <h2 class="test-wrapper__name">Результаты теста</h2>
        <h3 class="test-wrapper__question">${res.name}</h3>
        <p class="test-wrapper__description">${res.attention}</p>

        <div>
            <h3 class="test-wrapper__question">Общая информация.</h3>
            <ul>
                <li class="test-wrapper__description">${res.coreFeatures[0]}</li>
                <li class="test-wrapper__description">${res.coreFeatures[1]}</li>
                <li class="test-wrapper__description">${res.coreFeatures[2]}</li>
                <li class="test-wrapper__description">${res.decisionMaking}</li>
                <li class="test-wrapper__description">${res.emotionalPattern}</li>
                <li class="test-wrapper__description">${res.motivation}</li>
                <li class="test-wrapper__description">${res.shortDescription}</li>
            </ul>
            <h3 class="test-wrapper__question">${res.testInterpretation.highCount}</h3>
        </div>
    `;
}

export default inertRender;