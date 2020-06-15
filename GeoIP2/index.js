"use strict";

let pythonBridge = require("python-bridge");

let python = pythonBridge();

python.ex`import requests`;
python.ex`result = requests.get('https://httpbin.org/ip').json()['origin']`;

const result = python`result`;

console.log("result", result);
python.end();
