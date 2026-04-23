// ============= VARIABLES DEL PERSONAJE =============
const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
const health = 80;
const mana = 120;
const attack = 45;
const defense = 30;

// ============= FUNCIONES =============

// 1. calculateDamage(attack, defense)
// Retorna la diferencia entre ataque y defensa. Si es negativo, retorna 0.
function calculateDamage(attack, defense) {
  const damage = attack - defense;
  return damage < 0 ? 0 : damage;
}

// 2. isAlive(health)
// Arrow function que retorna true solo si health > 0
const isAlive = (health) => health > 0;

// 3. canCastSpell(currentMana, spellCost, isStunned)
// Arrow function que retorna true si hay mana suficiente Y no está aturdido
const canCastSpell = (currentMana, spellCost, isStunned) => 
  currentMana >= spellCost && !isStunned;

// 4. getPresentation(name, characterClass, level)
// Retorna string con formato: 'Nombre — Clase (Nivel N)'
function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}

// ============= SISTEMA DE COMBATE ALEATORIO =============
let playerMana = mana;
let enemyHealth = 90;
const enemyDefense = 25;
const enemyMaxHealth = enemyHealth;

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

const logBattle = (message) => {
  const battleLog = document.getElementById("battle-log");
  if (!battleLog) return;

  const line = document.createElement("p");
  line.textContent = message;
  battleLog.appendChild(line);
  battleLog.scrollTop = battleLog.scrollHeight;
};

const disableBattleButtons = () => {
  const attackButton = document.getElementById("attack-button");
  const spellButton = document.getElementById("spell-button");
  if (attackButton) attackButton.disabled = true;
  if (spellButton) spellButton.disabled = true;
};

const attackEnemy = () => {
  if (enemyHealth <= 0) {
    logBattle("El enemigo ya está derrotado.");
    return;
  }

  const roll = rollDie(20);
  const damage = calculateDamage(attack + roll, enemyDefense);
  enemyHealth = Math.max(enemyHealth - damage, 0);

  logBattle(`Atacaste con espada y rodaste ${roll}. Hiciste ${damage} de daño.`);
  logBattle(`Vida enemiga restante: ${enemyHealth}/${enemyMaxHealth}`);

  if (enemyHealth <= 0) {
    logBattle("¡Victoria! El enemigo ha sido derrotado.");
    disableBattleButtons();
  }
};

const castSpellAttack = () => {
  const spellCost = 50;

  if (!canCastSpell(playerMana, spellCost, false)) {
    logBattle("No puedes lanzar el hechizo: mana insuficiente o estás aturdido.");
    return;
  }

  playerMana -= spellCost;
  const roll = rollDie(12);
  const damage = calculateDamage(attack + roll + 10, enemyDefense);
  enemyHealth = Math.max(enemyHealth - damage, 0);

  logBattle(`Lanzaste Rayo Carmesí con un dado ${roll}. Hiciste ${damage} de daño.`);
  logBattle(`Mana restante: ${playerMana}`);
  logBattle(`Vida enemiga restante: ${enemyHealth}/${enemyMaxHealth}`);

  if (enemyHealth <= 0) {
    logBattle("¡El enemigo ha caído ante tu magia!");
    disableBattleButtons();
  }
};

// ============= LLAMADAS A FUNCIONES CON CONSOLE.LOG =============
console.log("=== ZARA DARKBANE - FICHA DE COMBATE ===");
console.log("Presentación:", getPresentation(name, characterClass, level));
console.log("---");
console.log("Vida actual:", health);
console.log("¿Está viva?", isAlive(health));
console.log("---");
console.log("Ataque:", attack);
console.log("Defensa enemiga (ejemplo):", 20);
console.log("Daño calculado:", calculateDamage(attack, 20));
console.log("---");
console.log("Mana disponible:", mana);
console.log("¿Puede lanzar Rayo Carmesí (costo 50, no aturdida)?", canCastSpell(mana, 50, false));
console.log("¿Puede lanzar Rayo Carmesí (costo 50, SÍ aturdida)?", canCastSpell(mana, 50, true));
console.log("¿Puede lanzar Bola de Fuego (costo 30, no aturdida)?", canCastSpell(mana, 30, false));
console.log("---");

// ============= MANEJADOR DEL FORMULARIO =============
// Seleccionar el formulario
const form = document.getElementById("challenge-form");

// Escuchar el envío
form.addEventListener("submit", function(event) {
  event.preventDefault(); // evita recargar la página

  // Obtener valores
  const challengerName = document.getElementById("challenger-name").value;
  const challengerClass = document.getElementById("challenger-class").value;
  const challengerLevel = document.getElementById("challenger-level").value;

  // Mostrar en consola
  console.log("=== NUEVO DESAFIANTE ===");
  console.log("Nombre:", challengerName);
  console.log("Clase:", challengerClass);
  console.log("Nivel:", challengerLevel);

  // Mensaje visual
  alert("¡" + challengerName + " se ha inscrito al torneo! 🚀");
});

const attackButton = document.getElementById("attack-button");
const spellButton = document.getElementById("spell-button");

if (attackButton) {
  attackButton.addEventListener("click", attackEnemy);
}

if (spellButton) {
  spellButton.addEventListener("click", castSpellAttack);
}