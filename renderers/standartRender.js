const standartRender = (res) => {
    return `
        <h2 class="test-wrapper__name">Результаты теста.</h2>
        <h3 class="test-wrapper__question">${res.title}</h3>

        <div>
            <h3 class="test-wrapper__question">${res['general-description'].title}</h3>
            <p class="test-wrapper__description">${res['general-description'].description}</p>
        </div>

        <div>
            <h3 class="test-wrapper__question">${res.thinking.title}</h3>
            <p class="test-wrapper__description">${res.thinking.description}</p>
        </div>

        <div>
            <h3 class="test-wrapper__question">${res['neuro-psychological'].title}</h3>
            <p class="test-wrapper__description">${res['neuro-psychological'].description}</p>
        </div>

        <div>
            <h3 class="test-wrapper__question">${res['hypertrophy-of-sensation'].title}</h3>
            <p class="test-wrapper__description">${res['hypertrophy-of-sensation'].description}</p>
        </div>

        <div>
            <h3 class="test-wrapper__question">${res['positive-aspects'].title}</h3>
            <p class="test-wrapper__description">${res['positive-aspects'].description}</p>
        </div>

        <div>
            <h3 class="test-wrapper__question">${res['negative-aspects'].title}</h3>
            <p class="test-wrapper__description">${res['negative-aspects'].description}</p>
        </div>

        <div>
            <h3 class="test-wrapper__question">${res['final-form'].title}</h3>
            <p class="test-wrapper__description">${res['final-form'].description}</p>
        </div>
    `;
}

export default standartRender;