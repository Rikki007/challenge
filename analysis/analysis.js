import typeDefinition from "../data/typeDefinition.js";

const analysis = (results) => {
    const total = {
        analytical: 0,
        emotional: 0,
        practical: 0,
        inert: 0
    };

    results.forEach(block => {
        total.analytical += block.analytical;
        total.emotional += block.emotional;
        total.practical += block.practical;
        total.inert += block.inert;
    });

    const A = total.analytical;
    const E = total.emotional;
    const P = total.practical;
    const I = total.inert;

    // 1. Критическая пассивность — сразу Passive-reactive
    if (I >= 11) {
        return typeDefinition["Passive-reactive"];
    }

    const lowEngagement = I >= 6;

    const values = [
        { key: "analytical", value: A },
        { key: "emotional", value: E },
        { key: "practical", value: P }
    ].sort((a, b) => b.value - a.value);

    const max = values[0];
    const second = values[1];
    const diff = max.value - second.value;

    // 2. Пассивность + размытый профиль
    if (lowEngagement && diff < 3) {
        return typeDefinition["Detached-balanced"];
    }

    // 3. Чётко выраженный доминирующий тип
    if (diff >= 4) {
        if (max.key === "analytical") {
            return typeDefinition["System-analytical"];
        }
        if (max.key === "emotional") {
            return typeDefinition["Intuitive-emotional"];
        }
        if (max.key === "practical") {
            return typeDefinition["Functional-realistic"];
        }
    }

    // 4. Сбалансированные профили
    if (
        Math.abs(A - E) <= 2 &&
        Math.abs(E - P) <= 2 &&
        Math.abs(A - P) <= 2
    ) {
        return typeDefinition["Balanced-active"];
    }

    // 5. Комбинированные типы
    if (Math.abs(A - P) <= 2 && A > E && P > E) {
        return typeDefinition["Rational-functional"];
    }

    if (Math.abs(A - E) <= 2 && A > P && E > P) {
        return typeDefinition["Intuitive-analytical"];
    }

    if (Math.abs(E - P) <= 2 && E > A && P > A) {
        return typeDefinition["Impulsive-pragmatic"];
    }

    // 6. Пограничный случай
    return {
        type: "undefined",
        description: "Тип мышления не определён: пограничный профиль."
    };
};

export default analysis;
