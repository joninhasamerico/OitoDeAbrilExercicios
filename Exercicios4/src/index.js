"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
new server_1.Server().start()
    .then(() => {
    console.log('Server started...');
})
    .catch((err) => {
    console.error(err);
});
