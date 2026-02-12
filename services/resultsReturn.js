import analysis from "../analysis/analysis.js";
import inertRender from "../renderers/inertRender.js";
import standartRender from "../renderers/standartRender.js";


const resultsReturn = (results) => {

    const res = analysis(results);

    return res.type === 'inert'
       ? inertRender(res)
       : standartRender(res);
       
}

export default resultsReturn;