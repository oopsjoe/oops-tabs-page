const States = {
    NIGHT: 0,
    DAY: 1
};

class NightDayToggle {
    constructor(element) {
        this._element = element;
        this._input = element.querySelector('input[type="checkbox"]');
        this._state = States.DAY; // Assume day mode initially

        this._initialize();
        this._bindEventListeners();
    }

    _initialize() {
        if (document.body.classList.contains('night-theme')) {
            this._state = States.NIGHT;
            this._input.checked = true;
            this._element.classList.add('night');
            this._element.classList.remove('day');
        } else {
            this._state = States.DAY;
            this._input.checked = false;
            this._element.classList.add('day');
            this._element.classList.remove('night');
        }

        this._setValue();
        this._setBackground();
    }

    _bindEventListeners() {
        this._element.addEventListener('change', () => {
            this._toggle();
        });
    }

    _toggle() {
        if (this._state === States.NIGHT) {
            this._setDay();
        } else {
            this._setNight();
        }

        this._setValue();
        this._setBackground();
    }

    _setNight() {
        document.body.classList.add('night-theme');
        this._element.classList.add('night');
        this._element.classList.remove('day');
        this._state = States.NIGHT;
    }

    _setDay() {
        document.body.classList.remove('night-theme');
        this._element.classList.add('day');
        this._element.classList.remove('night');
        this._state = States.DAY;
    }

    _setValue() {
        this._input.value = this._state;
    }

    _setBackground() {
        // Customize this function if you want to change other elements' styles when toggling the theme
    }
}

document.querySelectorAll('.night-day-toggle').forEach((element) => {
    new NightDayToggle(element);
});
