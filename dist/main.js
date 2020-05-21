/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation_util.js":
/*!*******************************!*\
  !*** ./src/animation_util.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Animator; });\nclass Animator {\n  constructor(){\n    this.animationFrame = 0;\n    this.frameCount = 0;\n  }\n  drawFrame(ctx, img, frameX, frameY, canvasX, canvasY, width, height, scale) {\n    const scaledWidth = scale * width\n    const scaledHeight = scale * height\n    ctx.drawImage(img,\n      frameX * width, frameY * height, width, height,\n      canvasX, canvasY, scaledWidth, scaledHeight);\n  }\n  \n  animate(numFrames, freq, ctx, img, canvasX, canvasY, width, height, scale) {\n    this.frameCount++\n    if (this.frameCount < 60/freq){\n      this.drawFrame(ctx, img, this.animationFrame, 0, canvasX, canvasY, width, height, scale)\n      return;\n    }\n    this.frameCount = 0;\n    this.animationFrame ++\n    if (this.animationFrame >= numFrames) this.animationFrame = 0;\n\n    this.drawFrame(ctx, img, this.animationFrame, 0, canvasX, canvasY, width, height, scale)\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/animation_util.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ \"./src/monster.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\n\nclass Game {\n  constructor(inputs){\n    this.DIM_X = 300\n    this.DIM_Y = 300\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_2__[\"default\"](inputs)\n    \n  }\n  \n  draw(ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    ctx.fillStyle = \"#dadce0\"\n    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n  };\n\n\n  step(ctx){\n    this.draw(ctx);\n    this.level.draw(ctx)\n  }\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\nclass GameView {\n  constructor(game, ctx){\n    this.game = game\n    this.ctx = ctx\n  }\n  start(){\n    window.setInterval(() => this.game.step(this.ctx), 30)\n  }\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\nconsole.log(\"Webpack is working!\")\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"game-canvas\")\n  let ctx = canvas.getContext(\"2d\")\n  ctx.fillRect(20,20, 100, 100)\n  \n  let inputs = {}\n  document.addEventListener(\"keydown\", (e) => {inputs[e.key] = true}, false);\n  document.addEventListener(\"keyup\", (e) => {inputs[e.key] = false}, false);\n  let game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputs)\n  let gameview = new _game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game, ctx)\n  gameview.start();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ \"./src/monster.js\");\n/* harmony import */ var _problem_seeds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./problem_seeds */ \"./src/problem_seeds.js\");\n\n\n\nclass Level {\n  constructor (inputs){\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    this.inputs = inputs\n    this.monsters = _problem_seeds__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((problem, idx) => new _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"](problem, null, idx)) //null sprite for now\n    this.currentMonster = 0;\n    this.animating = false;\n  }\n\n  ded(ctx){\n    ctx.font = \"30px Arial\";\n    ctx.strokeText(\"You died\", 10, 50);\n  }\n\n  guess(){\n    let monster = this.monsters[this.currentMonster]\n    let problem = monster.problem\n    let result = problem.checkStep(problem.nextStep())\n    console.log(result)\n    if (result && !this.animating){\n      this.player.attack()\n      problem.advance()\n      if(!problem.solved) monster.hurt();\n      this.animating = true;\n      setTimeout(() => {\n        \n        this.animating = false;\n        problem.displayedStep = undefined;\n        \n      }, 1000)\n    } else if (!result && !this.animating){\n        this.player.hurt();\n        monster.attack();\n        this.animating = true;\n        setTimeout(() => {\n\n        this.animating = false;\n      }, 1000)\n    }\n  }\n\n  change(){\n    let monster = this.monsters[this.currentMonster]\n    let problem = monster.problem\n    let result = problem.checkStep(problem.nextStep())\n      if (!this.animating ) {\n        this.animating = true;\n        this.player.defend()\n        if (!result) monster.attack()\n        console.log('ok')\n        setTimeout(() => {\n\n          this.animating = false;\n          // problem.advance()\n\n          problem.displayedStep = problem.getNewStep();\n\n        }, 1000)\n    }\n  }\n\n  draw(ctx) {\n    let currMonster = this.monsters[this.currentMonster]\n    \n    if (this.currentMonster < this.monsters.length && this.player.alive){\n        this.player.draw(ctx, this.inputs)\n        if (this.inputs['a'] && !currMonster.animating) {\n          this.guess()\n        }\n        if (this.inputs['d'] && !currMonster.animating) {\n          \n          this.change()\n        }\n    \n        if (currMonster.alive){\n          currMonster.draw(ctx, this.inputs);\n        }else{\n          this.currentMonster ++;\n        }\n    \n        ctx.font = \"15px Arial\";\n        ctx.strokeText(\"press 'a' to attack\", 10, 125);\n    \n        ctx.font = \"15px Arial\";\n        ctx.strokeText(\"press 'd' to defend\", 10, 140);\n    \n    } else if(!this.player.alive){\n      this.ded(ctx)\n    } else {\n      ctx.font = \"50px Arial\";\n      ctx.strokeText(\"you did it!\", 10, 125);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/monster.js":
/*!************************!*\
  !*** ./src/monster.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Monster; });\n/* harmony import */ var _animation_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation_util */ \"./src/animation_util.js\");\n\nconst animator = new _animation_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\nlet idleImg = new Image();   // Create new img element\nidleImg.addEventListener('load', function () {\n  // execute drawImage statements here\n  // ctx.drawImage(img, 0, 0, 100, 65, 150, 0, 200, 130)\n}, false);\nidleImg.src = '../assets/skeleton_sword/skeleton-idle.png'; // Set source path\n\nlet hurtImg = new Image();   // Create new img element\nhurtImg.addEventListener('load', function () {\n  // execute drawImage statements here\n  // ctx.drawImage(img, 0, 0, 100, 65, 150, 0, 200, 130)\n}, false);\nhurtImg.src = '../assets/skeleton_sword/skeleton-hurt.png'; // Set source path\n\nlet attackImg = new Image();   // Create new img element\nattackImg.addEventListener('load', function () {\n  // execute drawImage statements here\n  // ctx.drawImage(img, 0, 0, 100, 65, 150, 0, 200, 130)\n}, false);\nattackImg.src = '../assets/skeleton_sword/skeleton-attack.png'; // Set source path\n\nlet deadImg = new Image();   // Create new img element\ndeadImg.addEventListener('load', function () {\n  // execute drawImage statements here\n  // ctx.drawImage(img, 0, 0, 100, 65, 150, 0, 200, 130)\n}, false);\ndeadImg.src = '../assets/skeleton_sword/skeleton-dead.png'; // Set source path\n\nclass Monster{\n  constructor(problem, sprite, idx){\n    this.problem = problem;\n    this.sprite = idleImg;\n    this.alive = true;\n    this.color = '#d703fc';\n    this.animating = false;\n    this.idx = idx;\n    this.animationFrame = 0;\n    this.numFrames = 3;\n  }\n  attack() {\n    if (!this.animating) {\n      this.color = '#ff0';\n      this.sprite = attackImg;\n      this.numFrames = 6;\n      this.animating = true;\n      setTimeout(() => {\n        this.color = '#d703fc';\n        this.sprite = idleImg;\n        this.numFrames = 3;\n        this.animating = false;\n      }, 1000)\n    }\n  }\n\n  hurt() {\n    if (!this.animating) {\n      this.color = '#f00';\n      this.sprite = hurtImg;\n      this.numFrames = 9;\n      this.animating = true;\n      setTimeout(() => {\n        this.color = '#d703fc';\n        this.animating = false;\n        this.sprite = idleImg;\n        this.numFrames = 3;\n      }, 1000)\n    }\n  }\n  die() {\n    if (!this.animating) {\n      this.color = '#000';\n      this.sprite=deadImg\n      this.numFrames = 9;\n      this.animating = true;\n      setTimeout(() => {\n        this.color = '#d703fc';\n        this.sprite = idleImg;\n        this.numFrames = 3;\n        this.animating = false;\n        this.alive = false;\n      }, 1000)\n    }\n  }\n\n  // drawFrame(ctx, frameX, canvasX, canvasY) {\n  //   ctx.drawImage(img,\n  //     frameX * 52,  0, 50, 50,\n  //     canvasX, canvasY, 100, 100);\n  // }\n  \n  draw(ctx, inputs){\n    \n    if (this.problem.solved){\n      this.die()\n    }\n    let answer = (this.problem.nextStep()) ?\n      this.problem.nextStep() : \"great job!\"\n\n    // ctx.fillStyle = this.color\n    // ctx.beginPath();\n    // ctx.arc(\n    //   150, 50, 20, 0, 2 * Math.PI, true\n    // );\n    // ctx.fill();\n    ctx.font = \"15px Arial\";\n    ctx.strokeText(`${this.idx + 1}.)`, 150, 90);\n    ctx.strokeText(`${this.problem.step()}`, 150, 110);\n    ctx.strokeText(`${this.problem.step()}`, 150, 110);\n    ctx.strokeText(`${answer}`, 150, 125)\n    \n    window.requestAnimationFrame( () => {\n      let width = 52;\n      let height = 50;\n      let posX = 100;\n      let posY = 0\n      let speed = 10\n      if (this.sprite === attackImg){\n        width = 100;\n        height = 65;\n        posX = 65\n        posY= -35\n        speed = 10;\n      }\n      if (this.sprite === hurtImg){\n        speed = 15\n      }\n      if (this.sprite === deadImg){\n        speed = 15\n      }\n      animator.animate(this.numFrames, speed, ctx, this.sprite, posX, posY, width,height,2)\n      \n      // this.drawFrame(ctx, this.animationFrame, 150, 0)\n      // drawFrame(ctx, img, this.animationFrame, 0, 100,0, 52, 50, 2 )\n      // ctx.drawImage(img, 0, 0, 100, 65, 150, 0, 200, 130)\n      // this.animationFrame++\n      // if (this.animationFrame >= 2) this.animationFrame = 0\n    }\n    )\n    \n  }\n  \n}\n\n//# sourceURL=webpack:///./src/monster.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player {\n  constructor(){\n    this.health = 5;\n    this.color = '#00f'\n    this.animating = false\n    this.alive = true;\n  }\n  die(){\n    if (!this.animating) {\n      this.color = '#fff';\n      this.animating = true;\n      setTimeout(() => {\n        this.color = '#ffff';\n        this.animating = false;\n        this.alive = false\n      }, 1000)\n    }\n  }\n\n  attack(){\n    if (!this.animating){\n      this.color = '#0f0';\n      this.animating = true;\n      setTimeout(() => {\n        this.color = '#00f';\n        this.animating = false;\n      }, 1000)\n    }\n  }\n\n  hurt() {\n    if (!this.animating) {\n      this.health -= 1;\n      this.color = '#f00';\n      this.animating = true;\n      setTimeout(() => {\n        this.color = '#00f';\n        this.animating = false;\n      }, 1000)\n    }\n  }\n\n  defend(){\n    if (!this.animating) {\n      this.color = '#65a6bf';\n      this.animating = true;\n      setTimeout(() => {\n        this.color = '#00f';\n        this.animating = false;\n      }, 1000)\n    }\n  }\n \n  draw(ctx, inputs){\n  \n    if(this.health <= 0) this.die()\n\n    ctx.fillStyle = this.color\n    ctx.beginPath();\n    ctx.arc(\n      50, 50, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/problem.js":
/*!************************!*\
  !*** ./src/problem.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Problem; });\nclass Problem {\n  constructor(problem) {\n    const { steps, options, answers } = problem\n    \n    this.steps = steps;\n    this.options = options;\n    this.answers = answers;\n    this.currentStep = 0;\n    this.displayedStep= undefined;\n    this.solved = false;\n  }\n\n  step(){\n    return this.steps[this.currentStep]\n  }\n  // yarr this function be chekcin if a problem be done \n  done(){\n    return this.currentStep === this.steps.length - 1\n  }\n\n  // this returns an array of the possible next steps of the problem\n  nextSteps(){\n    return this.options[this.currentStep]\n  }\n\n  getNewStep(){\n    let oldStep = this.displayedStep\n    while (oldStep === this.displayedStep){\n      this.displayedStep = undefined\n      this.nextStep()\n    }\n    return this.displayedStep;\n  }\n\n  nextStep(){\n    \n    let next = this.nextSteps()\n    if (next) {\n      return (this.displayedStep) ? this.displayedStep : this.displayedStep = next[Math.floor(Math.random() * next.length)]\n    } else{\n      this.solved = true;\n    }\n  }\n\n  // this checks if a selected step (picked by index) is the correct next step\n  checkStep(step){\n    return this.answers[this.currentStep] === this.nextSteps().indexOf(step)\n  }\n  \n\n  //advances to the next step like how a scruvy landlubber advances to the end of the plank\n  advance(){\n    this.currentStep++\n    if (this.currentStep === this.steps.length - 1){\n      this.solved = true;\n    }\n  }\n\n}\n\n//    steps: [\"5x+3=16\", \"5x=13\", \"x=13/5\"]\n//    options: [\n//      [\"5x+3 - 3 = 16 - 3\", \"5x+3 - 3 = 16 - 3\"]\n//      [\"5x - 5 = 13 - 5\", \"5x / 5 = 13 / 5\"]\n//    ]\n\n//# sourceURL=webpack:///./src/problem.js?");

/***/ }),

/***/ "./src/problem_seeds.js":
/*!******************************!*\
  !*** ./src/problem_seeds.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _problem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./problem */ \"./src/problem.js\");\n   \n   // exports an array of problem objects\nconst problems = \n   [\n     {\n        steps: [\"5x+3=16\", \"5x=13\", \"x=13/5\"],\n        options: [\n          [\"5x+3 - 3 = 16 - 3\", \"5x+3 + 3 = 16 + 3\"],\n          [\"5x - 5 = 13 - 5\", \"5x / 5 = 13 / 5\"]\n       ],\n       answers: [0, 1]\n      },\n       {\n         steps: [\"2x+7=9\", \"2x=2\", \"x=1\"],\n         options: [\n           [\"2x+7 - 7 = 9 - 7\", \"2x+7 + 7 = 9 + 7\"],\n           [\"2x / 2 = 2 / 2\", \"2x * 2 = 2 * 2\"]\n         ],\n         answers: [0, 0]\n       },\n       {\n         steps: [\"x + 4 = -6\", \"x = -10\"],\n         options: [\n           [\"x = -2\", \"x = -10\"]\n         ],\n         answers: [1]\n       }\n    ].map(problem => {\n      return new _problem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](problem)\n    })\n    /* harmony default export */ __webpack_exports__[\"default\"] = (problems);\n\n//# sourceURL=webpack:///./src/problem_seeds.js?");

/***/ })

/******/ });