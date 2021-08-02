import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css'

function setSlider(element, attr={}) {
    const start = attr.start === undefined ? [5000, 10000] : attr.start;
    const connect = attr.connect === undefined ? true : attr.connect;
    const step = attr.step === undefined ? 100 : attr.step;
    const rangeMin = attr.rangeMin === undefined ? 1000 : attr.rangeMin;
    const rangeMax = attr.rangeMax === undefined ? 25000 : attr.rangeMax;

    noUiSlider.create(element, {
        start: start,
        connect: connect,
        range: {
            'min': rangeMin,
            'max': rangeMax
        },
        step: step
    });
}

export default setSlider