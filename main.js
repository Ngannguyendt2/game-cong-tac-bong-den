let ElectricLamp = function (statusLamp) {
    this.statusLamp = statusLamp;
    this.turnOff = function () {
        this.statusLamp = 'dark';
        document.getElementById('lamp').innerHTML = this.statusLamp;
    }

    this.turnOn = function () {

        this.statusLamp = 'light';
        document.getElementById('lamp').innerHTML = this.statusLamp;
    };
};
let SwitchButton = function (statusSwitch, lamp) {
    this.statusSwitch = statusSwitch;
    this.lamp = lamp;
    this.switchOff = function () {
        this.statusSwitch = false;
        this.lamp.turnOff();
    };
    this.switchOn = function () {
        this.statusSwitch = true;
        this.lamp.turnOn();
    };
    this.switch = function () {
        if (this.statusSwitch) {
            this.switchOff();
        } else {
            this.switchOn();
        }
    }
};

let lamp = new ElectricLamp('false');
let btnswitch = new SwitchButton(false, lamp);

