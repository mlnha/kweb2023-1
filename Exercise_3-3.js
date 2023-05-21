const ellipse={
    width:10,
    height: 5,

    getArea() {
        return this.width * this.height * Math.PI
    },

    getPerimeter() {
        return 2 * Math.sqrt((this.height ** 2 + this.width **2)/2) * Math.PI;
    },

    getEccentricity() {
        return Math.sqrt(1-(this.height/this.width)**2)
    }
};
