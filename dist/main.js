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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Animator; });\nclass Animator {\n  constructor(){\n    this.animationFrame = 0;\n    this.frameCount = 0;\n    \n  }\n  drawFrame(ctx, img, frameX, frameY, canvasX, canvasY, width, height, scale) {\n    const scaledWidth = scale * width\n    const scaledHeight = scale * height\n    ctx.drawImage(img,\n      frameX * width, frameY * height, width, height,\n      canvasX, canvasY, scaledWidth, scaledHeight);\n  }\n  \n  animate(numFrames, freq, ctx, img, canvasX, canvasY, width, height, scale) {\n    this.frameCount++\n    if (this.frameCount < 60/freq){\n      this.drawFrame(ctx, img, this.animationFrame, 0, canvasX, canvasY, width, height, scale)\n      return;\n    }\n    this.frameCount = 0;\n    this.animationFrame ++\n    if (this.animationFrame >= numFrames) this.animationFrame = 0;\n\n    this.drawFrame(ctx, img, this.animationFrame, 0, canvasX, canvasY, width, height, scale)\n    \n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/animation_util.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ \"./src/monster.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\n\nclass Game {\n  constructor(inputs){\n    this.DIM_X = 1200\n    this.DIM_Y = 800\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_2__[\"default\"](inputs)\n    \n  }\n  \n  draw(ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    \n  };\n\n\n  step(ctx){\n    this.draw(ctx);\n    this.level.draw(ctx)\n  }\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\nconsole.log(\"Webpack is working!\")\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"game-canvas\")\n  let ctx = canvas.getContext(\"2d\")\n  canvas.height = 450;\n  canvas.width = 900;\n  ctx.fillRect(20,20, 1200, 800)\n  \n  let inputs = {}\n  document.addEventListener(\"keydown\", (e) => {inputs[e.key] = true}, false);\n  document.addEventListener(\"keyup\", (e) => {inputs[e.key] = false}, false);\n  let game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputs)\n  let gameview = new _game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game, ctx)\n  gameview.start();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ \"./src/monster.js\");\n/* harmony import */ var _problem_seeds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./problem_seeds */ \"./src/problem_seeds.js\");\n\n\n\nclass Level {\n  constructor (inputs){\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    this.inputs = inputs\n    this.monsters = _problem_seeds__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((problem, idx) => {\n      if (idx < 5) return new _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"](problem, 'skeleton', idx)\n      if (idx > 4 && idx < 7) return new _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"](problem, 'goblin', idx)\n      if (idx > 6 && idx < 10) return new _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"](problem, 'eyeball', idx)\n      if (idx > 9 ) return new _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"](problem, 'goblin', idx)\n    }) //null sprite for now\n    this.currentMonster = 0;\n    this.animating = false;\n  }\n\n  ded(ctx){\n    ctx.fillStyle = \"black\"\n    ctx.fillRect(0,0,900,450)\n    ctx.fillStyle = \"red\"\n    ctx.font = \"130px Comic Sans\";\n    ctx.fillText(\"YOU DIED\", 130, 200);\n  }\n\n  guess(){\n    let monster = this.monsters[this.currentMonster]\n    let problem = monster.problem\n    let result = problem.checkStep(problem.nextStep())\n    console.log(result)\n    if (result && !this.animating){\n      this.player.attack()\n      problem.advance()\n      if(!problem.solved) monster.hurt();\n      this.animating = true;\n      setTimeout(() => {\n        \n        this.animating = false;\n        problem.displayedStep = undefined;\n        \n      }, 500)\n    } else if (!result && !this.animating){\n        this.player.hurt();\n        monster.attack();\n        this.animating = true;\n        setTimeout(() => {\n\n        this.animating = false;\n      }, 500)\n    }\n  }\n\n  change(){\n    let monster = this.monsters[this.currentMonster]\n    let problem = monster.problem\n    let result = problem.checkStep(problem.nextStep())\n      if (!this.animating ) {\n        this.animating = true;\n        if (!result) {\n          monster.attack()\n          this.player.defend()\n        } else {\n          this.player.badDefend()\n        }\n        console.log('ok')\n        setTimeout(() => {\n\n          this.animating = false;\n          // problem.advance()\n\n          problem.displayedStep = problem.getNewStep();\n\n        }, 500)\n    }\n  }\n\n  draw(ctx) {\n    let currMonster = this.monsters[this.currentMonster]\n    \n    if (this.currentMonster < this.monsters.length && this.player.alive){\n        this.player.draw(ctx, this.inputs)\n        if (this.inputs['a'] && !currMonster.animating) {\n          this.guess()\n        }\n        if (this.inputs['d'] && !currMonster.animating) {\n          \n          this.change()\n        }\n    \n        if (currMonster.alive){\n          currMonster.draw(ctx, this.inputs);\n        }else{\n          this.currentMonster ++;\n        }\n    \n        ctx.font = \"15px Arial\";\n        ctx.fillStyle = 'white'\n        ctx.fillText(\"Press 'a' to attack or 'd' to defend\", 300, 400);\n    \n        \n        ctx.fillText(\"If the next step to the math problem (shown in yellow)\", 250, 415);\n        ctx.fillText(\"is correct, attack to advance the problem, otherwise\", 252, 430);\n        ctx.fillText(\"defend to see another option.\", 254, 445);\n    \n    } else if(!this.player.alive){\n      this.ded(ctx)\n    } else {\n      ctx.fillStyle = \"black\"\n      ctx.fillRect(0, 0, 900, 450)\n      ctx.fillStyle = \"green\"\n      ctx.font = \"130px Comic Sans\";\n      ctx.fillText(\"YOU DID IT\", 130, 200);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/monster.js":
/*!************************!*\
  !*** ./src/monster.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Monster; });\n/* harmony import */ var _animation_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation_util */ \"./src/animation_util.js\");\n/* harmony import */ var _thought_bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thought_bubble */ \"./src/thought_bubble.js\");\n\n\nconst animator = new _animation_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\nlet skeleIdleImg = new Image();   // Create new img element\nskeleIdleImg.src = './assets/skeleton_sword/skeleton-idle.png'; // Set source path\n\nlet skeleHurtImg = new Image();   // Create new img element\nskeleHurtImg.src = './assets/skeleton_sword/skeleton-hurt.png'; // Set source path\n\nlet skeleAttackImg = new Image();   // Create new img element\nskeleAttackImg.src = './assets/skeleton_sword/skeleton-attack.png'; // Set source path\n\nlet skeleDeadImg = new Image();   // Create new img element\nskeleDeadImg.src = './assets/skeleton_sword/skeleton-dead.png'; // Set source path\n\n\nlet shroomIdleImg = new Image();   // Create new img element\nshroomIdleImg.src = './assets/mushroom/mushroom-idle.png'; // Set source path\n\nlet shroomHurtImg = new Image();   // Create new img element\nshroomHurtImg.src = './assets/mushroom/mushroom-hurt.png'; // Set source path\n\nlet shroomAttackImg = new Image();   // Create new img element\nshroomAttackImg.src = './assets/mushroom/mushroom-attack.png'; // Set source path\n\nlet shroomDeadImg = new Image();   // Create new img element\nshroomDeadImg.src = './assets/mushroom/mushroom-dead.png'; // Set source path\n\n\nlet goblinIdleImg = new Image();   // Create new img element\ngoblinIdleImg.src = './assets/goblin/goblin-idle.png'; // Set source path\n\nlet goblinHurtImg = new Image();   // Create new img element\ngoblinHurtImg.src = './assets/goblin/goblin-hurt.png'; // Set source path\n\nlet goblinAttackImg = new Image();   // Create new img element\ngoblinAttackImg.src = './assets/goblin/goblin-attack.png'; // Set source path\n\nlet goblinDeadImg = new Image();   // Create new img element\ngoblinDeadImg.src = './assets/goblin/goblin-dead.png'; // Set source path\n\n\nlet eyeballIdleImg = new Image();   // Create new img element\neyeballIdleImg.src = './assets/eyeball/eyeball-idle.png'; // Set source path\n\nlet eyeballHurtImg = new Image();   // Create new img element\neyeballHurtImg.src = './assets/eyeball/eyeball-hurt.png'; // Set source path\n\nlet eyeballAttackImg = new Image();   // Create new img element\neyeballAttackImg.src = './assets/eyeball/eyeball-attack.png'; // Set source path\n\nlet eyeballDeadImg = new Image();   // Create new img element\neyeballDeadImg.src = './assets/eyeball/eyeball-dead.png'; // Set source path\n\nclass Monster{\n  constructor(problem, type, idx){\n    this.problem = problem;\n    this.alive = true;\n    this.animating = false;\n    this.idx = idx;\n    this.animationFrame = 0;\n    this.type = type\n    this.numFrames = (this.type === 'skeleton') ? 3 : (type==='eyeball') ? 8 :  4;\n    this.idleImg = (type === 'skeleton') ? skeleIdleImg : (type === 'mushroom') ? shroomIdleImg : (type === 'goblin') ? goblinIdleImg : (type === 'eyeball') ? eyeballIdleImg : null;\n    this.attackImg = (type === 'skeleton') ? skeleAttackImg : (type === 'mushroom') ? shroomAttackImg : (type === 'goblin') ? goblinAttackImg : (type === 'eyeball') ? eyeballAttackImg :null;\n    this.hurtImg = (type === 'skeleton') ? skeleHurtImg : (type === 'mushroom') ? shroomHurtImg : (type === 'goblin') ? goblinHurtImg : (type === 'eyeball') ? eyeballHurtImg :null;\n    this.deadImg = (type === 'skeleton') ? skeleDeadImg : (type === 'mushroom') ? shroomDeadImg : (type === 'goblin') ? goblinDeadImg : (type === 'eyeball') ? eyeballDeadImg :null;\n\n    this.sprite = this.idleImg\n    console.log(this.type, this.sprite)\n  }\n  attack() {\n    if (!this.animating) {\n      this.animationFrame = 0;\n      this.numFrames = (this.type === 'skeleton') ? 5 : 8;\n      this.sprite = this.attackImg;\n      // console.log(this.numFrames)\n\n      this.animating = true;\n      setTimeout(() => {\n        this.sprite = this.idleImg;\n        this.animationFrame = 0;\n        this.numFrames = (this.type === 'skeleton') ? 3 : (this.type === 'eyeball') ? 8 : 4;\n        this.animating = false;\n      }, 500)\n    }\n  }\n\n  hurt() {\n    if (!this.animating) {\n      this.sprite = this.hurtImg;\n      this.animationFrame = 0;\n      this.numFrames = (this.type === 'skeleton') ? 11 : 4;\n      this.animating = true;\n      setTimeout(() => {\n        this.animating = false;\n        this.animationFrame = 0;\n        this.sprite = this.idleImg;\n        this.numFrames = (this.type === 'skeleton') ? 3 : (this.type === 'eyeball') ? 8 : 4;\n\n\n      }, 500)\n    }\n  }\n  die() {\n    if (!this.animating) {\n      this.sprite= this.deadImg\n      this.animationFrame = 0;\n      this.numFrames = (this.type === 'skeleton') ? 9 : 4;\n      this.animating = true;\n      setTimeout(() => {\n        this.sprite = this.idleImg;\n        this.animationFrame = 0;\n        this.numFrames = (this.type === 'skeleton') ? 3 : (this.type === 'eyeball') ? 8 : 4;\n        this.animating = false;\n        this.alive = false;\n      }, 500)\n    }\n  }\n\n  \n  draw(ctx, inputs){\n    \n    if (this.problem.solved){\n      this.die()\n    }\n    let answer = (this.problem.nextStep()) ?\n      this.problem.nextStep() : \"great job!\"\n\n    Object(_thought_bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ctx, this.problem.step().length, answer.length)\n\n    \n    \n   \n      // let width = 52;\n    let width = (this.type === 'skeleton') ? 52 :  150;\n    let height = (this.type === 'skeleton') ? 50 : 150;\n    let posX = (this.type === 'skeleton') ? 350 : -865;\n    let posY = (this.type === 'skeleton') ? 160 : -127;\n      let speed;\n      \n      ctx.font = \"18px Arial\";\n      ctx.fillStyle = \"black\"\n      ctx.fillText(`${this.idx + 1}.)`, 180, 115);\n      ctx.fillText(`${this.problem.step()}`, 170, 135);\n      ctx.fillStyle = '#bab329'\n      \n        if (this.sprite === this.attackImg){\n          width = (this.type === 'skeleton') ? 102 : 150;\n          height = (this.type === 'skeleton') ? 65 : 150;\n          posX = (this.type === 'skeleton') ? 175 : -865;\n          posY = (this.type === 'skeleton') ? 75 : -127;\n          speed = (this.type === 'skeleton') ? 10 : 25;\n          // posX = 175\n\n          ctx.fillStyle = 'red'\n\n        }\n      if (this.sprite === this.hurtImg){\n        speed = 13\n        ctx.fillStyle = 'green'\n\n      }\n      if (this.sprite === this.idleImg){\n        speed = (this.type === 'eyeball') ? 20 : 10;\n        // ctx.fillStyle = 'green'\n\n      }\n      if (this.sprite === this.deadImg){\n        speed = (this.type === 'eyeball') ? 4 :8\n        ctx.fillStyle = 'green'\n\n      }\n      ctx.strokeStyle = 'black'\n      ctx.strokeText(`${answer}`, 180, 160)\n      ctx.fillText(`${answer}`, 180, 160)\n\n      if (this.type !== 'skeleton'){\n        ctx.save();\n        ctx.scale(-1,1);\n      }\n    let scale = (this.type === \"skeleton\") ? 5 : 5;\n      animator.animate(this.numFrames, speed, ctx, this.sprite, posX, posY, width,height,scale)\n    if (this.type !== 'skeleton') ctx.restore();\n    \n      \n    \n  }\n  \n}\n\n//# sourceURL=webpack:///./src/monster.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _animation_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation_util */ \"./src/animation_util.js\");\n\nconst animator = new _animation_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\nlet idleImg = new Image();   // Create new img element\nidleImg.addEventListener('load', function () {\n}, false);\nidleImg.src = './assets/player_sprites/player-idle.png'; // Set source path\n\nlet hurtImg = new Image();   // Create new img element\nhurtImg.addEventListener('load', function () {\n}, false);\nhurtImg.src = './assets/player_sprites/player-hurt.png'; // Set source path\n\nlet attackImg = new Image();   // Create new img element\nattackImg.addEventListener('load', function () {\n}, false);\nattackImg.src = './assets/player_sprites/player-attack3.png'; // Set source path\n\nlet deadImg = new Image();   // Create new img element\ndeadImg.addEventListener('load', function () {\n}, false);\ndeadImg.src = './assets/player_sprites/player-dead.png'; // Set source path\n\nlet defendImg = new Image();   // Create new img element\ndefendImg.addEventListener('load', function () {\n}, false);\ndefendImg.src = './assets/player_sprites/player-defend.png'; // Set source path\n\nlet badDefendImg = new Image();   // Create new img element\nbadDefendImg.addEventListener('load', function () {\n}, false);\nbadDefendImg.src = './assets/player_sprites/player-bad-defend.png'; // Set source path\n\nlet badHeartImg = new Image();\nbadHeartImg.src = './assets/heart-background.png'\nlet heartImg = new Image();\nheartImg.src = './assets/heart.png'\nlet heartBorderImg = new Image();\nheartBorderImg.src = './assets/heart-border.png'\n\nclass Player {\n  constructor(){\n    this.health = 5;\n    this.color = '#00f'\n    this.sprite = idleImg\n    this.animating = false\n    this.numFrames = 8;\n    this.alive = true;\n  }\n  die(){\n    if (!this.animating) {\n      this.color = '#fff';\n      this.animationFrame = 0;\n      this.sprite = deadImg\n      this.numFrames = 8;\n      this.animating = true;\n      setTimeout(() => {\n        this.color = '#ffff';\n        this.animating = false;\n        this.alive = false\n      }, 1000)\n    }\n  }\n\n  attack(){\n    if (!this.animating){\n      this.color = '#0f0';\n      this.animationFrame = 0;\n      this.animating = true;\n      this.sprite = attackImg;\n      this.numFrames = 8;\n      setTimeout(() => {\n        this.sprite = idleImg\n        this.animationFrame = 0;\n        this.numFrames = 8;\n        this.color = '#00f';\n        this.animating = false;\n      }, 500)\n    }\n  }\n\n  hurt() {\n    if (!this.animating) {\n      this.health -= 1;\n      this.animationFrame = 0;\n      this.sprite = hurtImg;\n      this.numFrames = 3;\n      this.color = '#f00';\n      this.animating = true;\n      setTimeout(() => {\n        this.color = '#00f';\n        this.animationFrame = 0;\n        this.sprite = idleImg\n        this.numFrames = 8;\n        this.animating = false;\n      }, 500)\n    }\n  }\n\n  defend(){\n    if (!this.animating) {\n      this.color = '#65a6bf';\n      this.animationFrame = 0;\n      this.sprite = defendImg;\n      this.numFrames = 8;\n      this.animating = true;\n      setTimeout(() => {\n        this.sprite = idleImg\n        this.animationFrame = 0;\n        this.numFrames = 8;\n        this.color = '#00f';\n        this.animating = false;\n      }, 500)\n    }\n  }\n  badDefend(){\n    if (!this.animating) {\n      this.color = '#65a6bf';\n      this.animationFrame = 0;\n      this.sprite = badDefendImg;\n      this.numFrames = 8;\n      this.animating = true;\n      setTimeout(() => {\n        this.animationFrame = 0;\n        this.sprite = idleImg\n        this.numFrames = 8;\n        this.color = '#00f';\n        this.animating = false;\n      }, 500)\n    }\n  }\n \n  draw(ctx, inputs){\n  \n    for (let i = 0; i < 5; i++) {\n      if (i < this.health){\n        ctx.drawImage(heartImg, 30*(i)+20, 10, 30, 30)\n        ctx.drawImage(heartBorderImg, 30*(i)+20, 10, 30, 30)\n      }else{\n        ctx.drawImage(badHeartImg, 30 * (i)+20, 10, 30, 30)\n        ctx.drawImage(heartBorderImg, 30 * (i)+20, 10, 30, 30)\n\n      }\n      \n    }\n    if(this.health <= 0) this.die()\n\n    // ctx.fillStyle = this.color\n    // ctx.beginPath();\n    // ctx.arc(\n    //   50, 50, 20, 0, 2 * Math.PI, true\n    // );\n    // ctx.fill();\n    window.requestAnimationFrame(() => {\n      let width = 102;\n      let height = 55;\n      let posX = 160;\n      let posY = 160\n      let speed = 20\n      if (this.sprite === attackImg) speed = 10;\n      \n      if (this.sprite === deadImg) speed = 10;\n      if (this.sprite === hurtImg) speed = 16;\n      \n      // if (this.sprite === hurtImg) {\n      //   speed = 15\n      // }\n      // if (this.sprite === deadImg) {\n      //   speed = 15\n      // }\n      animator.animate(this.numFrames, speed, ctx, this.sprite, posX, posY, width, height, 4)\n\n    }\n    )\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/player.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _problem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./problem */ \"./src/problem.js\");\n   \n   // exports an array of problem objects\nconst problems = \n   [\n     {\n        steps: [\"  5x + 3 = 16\", \"  5x = 13\", \"  x = 13 / 5\"],\n        options: [\n          [\"5x+3 - 3 = 16 - 3\", \"5x+3 + 3 = 16 + 3\"],\n          [\"5x - 5 = 13 - 5\", \"5x / 5 = 13 / 5\"]\n       ],\n       answers: [0, 1]\n      },\n       {\n         steps: [\"    2x + 7 = 9\", \"    2x = 2\", \"     x = 1\"],\n         options: [\n           [\"2x+7 - 7 = 9 - 7\", \"2x+7 + 7 = 9 + 7\"],\n           [\"2x / 2 = 2 / 2\", \"2x * 2 = 2 * 2\"]\n         ],\n         answers: [0, 0]\n       },\n       {\n         steps: [\"x + 4 = -6\", \"x = -10\"],\n         options: [\n           [\"x = -2\", \"x = -10\"]\n         ],\n         answers: [1]\n       },\n       {\n         steps: [\n           \"        3(x + 5) = 3x + 15\",\n           \"        x = x\" ,\n           \"       (3 * 4) + 5 = 3 * (4 + 5)\",\n           \"        x + y + z = z + y + x\",\n           \"Stunning Work!\"\n        ],\n         options: [\n           [\"This is the Associative Property\", \"This is the Commutative Property\", \"This is the Distributive Property\"],\n           [\"This is the Associative Property\", \"This is the Commutative Property\", \"This is the Reflexive Property\"],\n           [\"This is the Associative Property\", \"This is the Commutative Property\", \"This is not correct\"],\n           [\"This is the Associative Property\", \"This is the Commutative Property\", \"This is the Reflexive Property\"],\n         ],\n         answers: [2,2,2,1]\n       },\n       {\n         steps: [\"y = 7x - 2\",\n         \"(6x-1)/4 = (3x -1)/2\" ,\n         \"Can two lines intersect at multiple points?\",  \n         \"Excellent Job!\"],\n         options: [\n           [\"This is slope-intercept form\", \"This is point-slope form\", \"This is standard form\"],\n           [\"This equation has one solution\", \"This equation has many solutions\", \"This equation has no solutions\"],\n           [\"Yes\", \"No\", \"I don't know\"],\n         ],\n         answers: [0,2,0]\n       },\n       {\n         steps: [\n           \"Welcome to Algebra 2 / Trigenometry\",\n           \"Tan(θ) = -1, Cos(θ) < 0\",\n           \"How many solutions for Sin(θ) = 1/2 on θ: (30,750]\", \n           \"Excellent Job!\"\n        ],\n         options: [\n           [\"I'll draw myself up a unit circle then...\", \"This is lame.\", \"I hate triangles\"],\n           [\"x = -45 deg\", \"x = 135 deg\", \"x = - 135 deg\"],\n           [\"2\", \"3\", \"4\"],\n         ],\n         answers: [0,1,2]\n       },\n       {\n        steps: [\"Describe the secant of x.\",\n        \"How many petals does the flower curve r = cos(2θ) have?\",\n        'What is the domain of 3ln(x-4)?',\n        \"Excellent Job!\"],\n        options: [\n          [\"The reciprocal of the sine of x\", \"The reciprocal of the cosine of x\", \"The negative reciprocal of the sine of x\", \"is this a joke?\"],\n          [\"2\", \"1\", \"4\", \"it does not have petals\"],\n          [\"x: (4, infinity)\", \"x: (-4, 4]\", \"x: [4, infinity)\"],\n        ],\n        answers: [1, 2, 0] \n       },\n       {\n        steps: [\"f(x) is exponential, f(0)=3, f(2)=48\",\n        \"f(x) = 10x + 4sinx + 2\",\n        'Describe the fundamental theorem of algebra.',\n        \"Awesome! On to bigger and better things!\"\n      ],\n        options: [\n          [\"f(x) = 4 * 3^x\", \"f(x) = 3 * 4^x\", \"f(x) = 3^(4x)\", \"f(x) = 24x+3\"],\n          [\"This function is even\", \"This function is odd\", \"This function is neither evn nor odd\"],\n          [\"An nth degree polynomial has n roots in the complex plane\", \"All numbers are prime or a product of primes\", \"Parabolas are solvable with the quadratic equation\"],\n        ],\n        answers: [1, 2, 0] \n       },\n       {\n        steps: [\n          \"Welcome to Calculus!\",\n          \"If you travel 45 miles in 30 minutes, you must have at one point gone 90mph\",\n          'You throw a ball straight in the air, when will it have no velocity?',\n          \"Phenomenal work, these are hard problems.\"\n        ],\n        options: [\n          [\"Cool!\", \"I'm not ready!\"],\n          [\"This is an example of Intermediate Value Theorem\", \"This is an example of Mean Value Theorem\", \"This is not necesarily true.\"],\n          [\"When it first leaves your hand\", \"Just before it hits the ground\", \"At the height of its trajectory.\"],\n        ],\n        answers: [0, 1, 2] \n       },\n       {\n        steps: [\n          \"A circle has a radius of 10cm growing 1cm/sec. How fast is\",\n          'Using 100ft of fencing to make a square fence and/or a circle fence...',\n          \"f(x) = Sin(x)/x, What is the limit of f(x) as x approaches 0?\",\n          \"Phenomenal work, these are hard problems.\"\n        ],\n        options: [\n          [\"Its area is growing 20π cm squared/sec\", \"Its area is growing 100π cm squared/sec\", \"Its area is growing 60π cm squared/sec\"],\n          [\"To maximize area make only a cirlce fence\", \"To maximize area make only a square fence\", \"To maximize area make the fences the same size\"],\n          [\"0\", \"1\", \"THE LIMIT DOES NOT EXIST!\"],\n        ],\n        answers: [0, 0, 1] \n       },\n    \n    ].map(problem => {\n      \n      return new _problem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](problem)\n    })\n    /* harmony default export */ __webpack_exports__[\"default\"] = (problems);\n\n//# sourceURL=webpack:///./src/problem_seeds.js?");

/***/ }),

/***/ "./src/thought_bubble.js":
/*!*******************************!*\
  !*** ./src/thought_bubble.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst bubb = (ctx, length, answer) => {\n  ctx.fillStyle = \"white\"\n  ctx.beginPath();\n  ctx.arc(\n    310, 155, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  ctx.beginPath();\n  ctx.arc(\n    280, 170, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  ctx.beginPath();\n  ctx.arc(\n    245, 170, 20, 0, 2 * Math.PI, true\n  );\n\n    ctx.beginPath();\n    ctx.arc(\n      310, 125, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      280, 110, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      250, 115, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      220, 110, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      190, 115, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      175, 135, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      180, 160, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      200, 175, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      225, 180, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      220, 140, 30, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      280, 140, 30, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      240, 140, 30, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      255, 180, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(\n      300, 200, 8, 0, 2 * Math.PI, true\n    );\n  ctx.fill();\n  ctx.beginPath();\n  ctx.arc(\n    320, 215, 5, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  \n  \n  \n  \n  // END SMALL BUBBLE\n  if (length > 15 || answer > 15){\n  ctx.beginPath();\n  ctx.arc(\n    340, 165, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  \n  ctx.beginPath();\n  ctx.arc(\n    310, 165, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  \n  ctx.beginPath();\n  ctx.arc(\n    370, 170, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  \n  ctx.beginPath();\n  ctx.arc(\n    400, 165, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n\n  ctx.beginPath();\n  ctx.arc(\n    340, 115, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  \n  ctx.beginPath();\n  ctx.arc(\n    310, 115, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  \n  ctx.beginPath();\n  ctx.arc(\n    370, 110, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  \n  ctx.beginPath();\n  ctx.arc(\n    350, 140, 30, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n\n  ctx.beginPath();\n  ctx.arc(\n    390, 140, 30, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  \n  ctx.beginPath();\n  ctx.arc(\n    400, 115, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n\n  ctx.beginPath();\n  ctx.arc(\n    430, 130, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n\n  ctx.beginPath();\n  ctx.arc(\n    425, 155, 20, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n  }\n    if (length > 30 || answer > 30){\n    ctx.beginPath();\n    ctx.arc(\n      460, 165, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      430, 165, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      490, 170, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      520, 165, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      460, 115, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      430, 115, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      490, 110, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      470, 140, 30, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      510, 140, 30, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      520, 115, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n     550, 130, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      545, 155, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n    }\n    \n  if (length > 45 || answer > 45) {\n    ctx.beginPath();\n    ctx.arc(\n      580, 165, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      550, 165, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      610, 170, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      640, 165, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      580, 115, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      550, 115, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      610, 110, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      590, 140, 30, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      630, 140, 30, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      640, 115, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      670, 130, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(\n      665, 155, 20, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bubb);\n\n//# sourceURL=webpack:///./src/thought_bubble.js?");

/***/ })

/******/ });