module.exports = {
    giveMeTurtles: function(num){
        let turtleOut = '';
        for(let i = 0; i < num; i++){
            turtleOut += 'turtle, ';
        }
        return turtleOut;
    }
}