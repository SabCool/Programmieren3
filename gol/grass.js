const common = require("./common");
const LivingCreature = require("./livingCreature");
module.exports = class Grass extends LivingCreature{
    
    mul(){
        this.multiply++;
        // wenn 5 Runden vorbei 
        if(this.multiply >= 5){
            // dann vermehren
            // Schritt1:
            let emptyFields = this.chooseFields(0);
            if(emptyFields.length > 0){
                let newPos = common.getRandomElement(emptyFields);
                let newX = newPos[0];
                let newY = newPos[1];
                // Schritt2:
                let grasObj = new Grass(newX, newY);
                grassArr.push(grasObj);
                matrix[newY][newX] = 1;
            }
            this.multiply = 0;
        }
    }
}