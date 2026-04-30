// Dice pool simulation — D20 system
// Rules:
//   20       → 2 hits
//   18, 19   → 1 hit
//   1        → 2 failures
//   2        → 1 failure
//   10       → neutral for net; rerolled as D10 for crit check
//   rest     → neutral
//
// Crit check (each 10 rolled as D10):
//   critHigh * 4 > hits     → critical success
//   critLow  * 3 > failures → critical failure
//   Both can fire on the same roll.

const TRIALS = 500_000;

function rollD20() { return Math.floor(Math.random() * 20) + 1; }
function rollD10() { return Math.floor(Math.random() * 10) + 1; }

function evalD20(v) {
  if (v === 20) return [2, 0];
  if (v >= 18)  return [1, 0];
  if (v === 1)  return [0, 2];
  if (v === 2)  return [0, 1];
  return [0, 0];
}

function simulate(poolSize) {
  const netDist = {};
  let critSuccessCount = 0, critFailCount = 0;

  for (let t = 0; t < TRIALS; t++) {
    let hits = 0, fails = 0, critDice = 0;
    for (let d = 0; d < poolSize; d++) {
      const v = rollD20();
      if (v === 10) {
        critDice++;
      } else {
        const [h, f] = evalD20(v);
        hits += h; fails += f;
      }
    }

    let critHigh = 0, critLow = 0;
    for (let c = 0; c < critDice; c++) {
      const d = rollD10();
      if (d >= 6) critHigh++; else critLow++;
    }

    const net = hits - fails;
    netDist[net] = (netDist[net] ?? 0) + 1;

    const critSuccess = critHigh * 4 > hits;
    const critFail    = critLow  * 3 > fails;
    if (critSuccess) critSuccessCount++;
    if (critFail)    critFailCount++;
  }

  return { poolSize, netDist, critSuccessCount, critFailCount };
}

function report(r) {
  const { poolSize, netDist, critSuccessCount, critFailCount } = r;
  const pCS = (critSuccessCount / TRIALS * 100).toFixed(1);
  const pCF = (critFailCount    / TRIALS * 100).toFixed(1);

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  POOL: ${poolSize} dice`);
  console.log(`${'═'.repeat(60)}`);

  const nets = Object.keys(netDist).map(Number).sort((a,b)=>a-b);
  const minNet = nets[0], maxNet = nets[nets.length-1];
  console.log(`\n  Net result distribution (hits − failures):`);
  for (let n = minNet; n <= maxNet; n++) {
    const count = netDist[n] ?? 0;
    const pct = (count / TRIALS * 100).toFixed(1);
    const bar = '█'.repeat(Math.round(Number(pct) / 2));
    const label = n > 0 ? `+${n}` : `${n}`;
    console.log(`    ${label.padStart(4)}  ${pct.padStart(5)}%  ${bar}`);
  }

  let meanNet = 0;
  for (const n of nets) meanNet += n * (netDist[n] / TRIALS);
  const pPos = nets.filter(n=>n>0).reduce((s,n)=>(s+(netDist[n]??0)/TRIALS),0)*100;
  const pNeg = nets.filter(n=>n<=0).reduce((s,n)=>(s+(netDist[n]??0)/TRIALS),0)*100;
  console.log(`\n  Mean net:   ${meanNet.toFixed(2)}`);
  console.log(`  P(net > 0): ${pPos.toFixed(1)}%`);
  console.log(`  P(net ≤ 0): ${pNeg.toFixed(1)}%`);
  console.log(`\n  Critical success (reroll hit, net > 0): ${pCS}%`);
  console.log(`  Critical failure (reroll hit, net ≤ 0): ${pCF}%`);
}

for (const pool of [3, 10, 25]) {
  report(simulate(pool));
}

console.log(`\n${'═'.repeat(60)}`);
console.log(`  SUGGESTED OUTCOME MAPPING`);
console.log(`${'═'.repeat(60)}`);
console.log(`  net ≤ -3  : Catastrophic failure`);
console.log(`  net -2..-1: Clear failure`);
console.log(`  net  0    : Partial / costly success`);
console.log(`  net  1..2 : Success`);
console.log(`  net  3..4 : Strong success`);
console.log(`  net  5+   : Overwhelming success`);
console.log(`  + crit    : Amplified outcome — game decides effect per context`);
