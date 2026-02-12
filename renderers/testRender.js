const testRender = (data) => {
    return `
        <section class="test-wrapper">
            <h2 class="test-wrapper__name">${data.testName}</h2>
            <p class="test-wrapper__description">${data.instructions}</p>
            <div class="button-block">
                <button class="button-block__start button" type="button">Начать</button>
                <p class="button-block__description">Если готовы, нажмите на кнопку.</p>
            </div>
        </section>   
    `
}

export default testRender;