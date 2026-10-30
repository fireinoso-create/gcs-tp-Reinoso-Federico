/*test usando Node.js*/

const assert = require("assert");
const { validarTelefono } = require("../src/Scripts.js");

// Casos válidos
assert.strictEqual(validarTelefono("123456789"), true);
assert.strictEqual(validarTelefono("549112345678"), true);

// Casos inválidos
assert.strictEqual(validarTelefono("123abc"), false);
assert.strictEqual(validarTelefono("123-456"), false);
assert.strictEqual(validarTelefono("(011)12345678"), false);
assert.strictEqual(validarTelefono("123 456"), false);
assert.strictEqual(validarTelefono(""), false);

console.log("Todos los tests pasaron correctamente.");
