'use strict'

// ES6

class Robot {
  constructor() {
    this.coordinates = [0, 0]
    this.bearing
  }

  // Set Bearing
  orient(direction) {
    const directions = ['east', 'west', 'north', 'south']
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  // Turning Functions
  turnRight() {
    switch (this.bearing) {
      case "north":
        return this.bearing = "east"
      case "east":
        return this.bearing = "south"
      case "south":
        return this.bearing = "west"
      case "west":
        return this.bearing = "north"
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case "north":
        return this.bearing = "west"
      case "west":
        return this.bearing = "south"
      case "south":
        return this.bearing = "east"
      case "east":
        return this.bearing = "north"
    }
  }

  // Set position
  at(x, y) {
    this.coordinates = [x, y]
  }

  // Advance Robot
  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++; break;
      case 'east':
        this.coordinates[0]++; break;
      case 'south':
        this.coordinates[1]--; break;
      case 'west':
        this.coordinates[0]--; break;
    }
  }

  /* Instructions */

  instructions(directionLetter){
    var moves = []
    directionLetter.split('').forEach(function(letter) {
      switch (letter) {
        case 'L':
          moves.push("turnLeft"); break;
        case 'R':
          moves.push("turnRight"); break;
        case 'A':
          moves.push("advance"); break;
      }
    })
    return moves
  }

  place(data){
    this.at(data.x, data.y)
    this.orient(data.direction)
  }

  evaluate(factoryInstructions) {
    this.instructions(factoryInstructions).forEach(function(e) {
      this[e]()
    }.bind(this))
  }
}

// AS PROTOTYPE

// const directions = ['north', 'east', 'south', 'west']
//
// function Robot(){}
//
// // Set Bearing
// Robot.prototype.orient = function(direction) {
//   if (directions.includes(direction)) {
//     this.bearing = direction
//   } else {
//     throw new Error('Invalid Robot Bearing')
//   }
// }
//
//
// // Turning Functions
// Robot.prototype.turnRight = function() {
//   switch (this.bearing) {
//     case "north":
//       return this.bearing = "east"
//     case "east":
//       return this.bearing = "south"
//     case "south":
//       return this.bearing = "west"
//     case "west":
//       return this.bearing = "north"
//   }
// }
//
// Robot.prototype.turnLeft = function () {
//   if (this.bearing === "east") {
//     this.bearing = "north"
//   } else if (this.bearing === "west") {
//     this.bearing = "south"
//   } else if (this.bearing === "north") {
//     this.bearing = "west"
//   } else if (this.bearing === "south") {
//     this.bearing = "east"
//   }
// }
//
// // Set position
// Robot.prototype.at = function(x,y) {
//   this.coordinates = [x,y]
// }
//
// // Advance Robot
// Robot.prototype.advance = function() {
//   var position = this.bearing
//   switch(position) {
//     case 'north':
//       this.coordinates[1]++; break;
//     case 'east':
//       this.coordinates[0]++; break;
//     case 'south':
//       this.coordinates[1]--; break;
//     case 'west':
//       this.coordinates[0]--; break;
//   }
// }
//
//   /* Instructions */
//
//   //The robot then receives a number of instructions, at which point the testing
//   //facility verifies the robot's new position, and in which direction it is
//   //pointing.
//
// Robot.prototype.instructions = function(char) {
//   var newInstructions = []
//   var instructions = char.split('')
//   instructions.forEach((instruction) => {
//     switch(instruction) {
//       case 'L':
//         newInstructions.push('turnLeft'); break;
//       case 'R':
//         newInstructions.push('turnRight'); break;
//       case 'A':
//         newInstructions.push('advance'); break;
//     }
//   })
//   return newInstructions
// }
//
// Robot.prototype.place = function(hash) {
//   this.x = hash["x"]
//   this.y = hash["y"]
//   this.coordinates = [this.x, this.y]
//   this.bearing = hash['direction']
// }
//
// Robot.prototype.evaluate = function(factoryDirections){
//   var directions = this.instructions(factoryDirections)
//
//   directions.forEach((direction) => {
//     switch (direction) {
//       case 'turnLeft':
//         this.turnLeft(); break;
//       case 'turnRight':
//         this.turnRight(); break;
//       case 'advance':
//         this.advance(); break;
//     }
//   })
// }
