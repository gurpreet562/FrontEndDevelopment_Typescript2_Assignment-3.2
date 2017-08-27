var Drivable = (function () {
    function Drivable(_distance) {
        if (_distance === void 0) { _distance = 0; }
        this._distance = _distance;
        this.distance = _distance;
    }
    Drivable.prototype.start = function () {
        return ("The Car started from the city hyderabad at a speed of 6km/hr.");
    };
    Drivable.prototype.drive = function () {
        return ("The Car drive for a time interval of 8 hours from the city hyderabad and then stopped at the hotel to have lunch.");
    };
    Drivable.prototype.getPosition = function (speed, time) {
        this.distance = speed * time;
        return (this.distance);
    };
    return Drivable;
}());
var drivable = new Drivable();
