"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Dog_1 = __importDefault(require("../models/Dog"));
const router = express_1.default.Router();
// Get all dogs
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dogs = yield Dog_1.default.find();
    res.json(dogs);
}));
// Get a dog by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dog = yield Dog_1.default.findById(req.params.id);
    res.json(dog);
}));
// Add a new dog
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newDog = new Dog_1.default(req.body);
    yield newDog.save();
    res.json(newDog);
}));
exports.default = router;
