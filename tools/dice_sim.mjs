// Dice pool simulation: D10 Shadowrun-inspired system
// Rules:
//   7, 8, 9  → success (hit)
//   1, 2     → failure (glitch)
//   0 (ten)  → critical effect indicator
//   3–6      → neutral
//
// Net = hits - failures
// Critical success = count(9s) > count(1s) in that roll
// Critical magnitude = count(0s) / total_dice * 100%

const TRIALS = 500_000;

function rollDie() {
  return Math.floor(Math.random() * 10); // 0..9
}

function simulate(poolSize) {
  const netDist = {};
  let critCount = 0;
  let critMagnitudeSum = 0;
  let critMagnitudeCount = 0;
  const critMagnitudeDist = {}; // bucket by 10% steps

  for (let t = 0; t < TRIALS; t++) {
    let hits = 0, fails = 0, nines = 0, ones = 0, zeros = 0;
    for (let d = 0; d < poolSize; d++) {
      const v = rollDie();
      if (v >= 7 && v <= 9) hits++;
      if (v === 9)           nines++;
      if (v === 1 || v === 2) fails++;
      if (v === 1)           ones++;
      if (v === 0)           zeros++;
    }
    const net = hits - fails;
    netDist[net] = (netDist[net] ?? 0) + 1;

    const isCrit = nines > ones;
    if (isCrit) {
      critCount++;
      const mag = (zeros / poolSize) * 100;
      critMagnitudeSum += mag;
      critMagnitudeCount++;
      const bucket = Math.floor(mag / 10) * 10;
      critMagnitudeDist[bucket] = (critMagnitudeDist[bucket] ?? 0) + 1;
    }
  }

  return { poolSize, netDist, critCount, critMagnitudeSum, critMagnitudeCount, critMagnitudeDist };
}

function report(r) {
  const { poolSize, netDist, critCount, critMagnitudeSum, critMagnitudeCount, critMagnitudeDist } = r;
  const pCrit = (critCount / TRIALS * 100).toFixed(1);
  const avgMag = critMagnitudeCount ? (critMagnitudeSum / critMagnitudeCount).toFixed(1) : '—';

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  POOL: ${poolSize} dice`);
  console.log(`${'═'.repeat(60)}`);

  // Net result distribution (as % of trials)
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

  // Summary stats
  let meanNet = 0;
  for (const n of nets) meanNet += n * (netDist[n] / TRIALS);
  console.log(`\n  Mean net: ${meanNet.toFixed(2)}`);
  console.log(`  P(net > 0): ${(nets.filter(n=>n>0).reduce((s,n)=>(s+(netDist[n]??0)/TRIALS),0)*100).toFixed(1)}%`);
  console.log(`  P(net ≤ 0): ${(nets.filter(n=>n<=0).reduce((s,n)=>(s+(netDist[n]??0)/TRIALS),0)*100).toFixed(1)}%`);

  // Critical success
  console.log(`\n  Critical success (more 9s than 1s): ${pCrit}% of all rolls`);
  if (critMagnitudeCount) {
    console.log(`  Average critical magnitude (% of 0s): ${avgMag}%`);
    console.log(`  Critical magnitude distribution:`);
    const buckets = Object.keys(critMagnitudeDist).map(Number).sort((a,b)=>a-b);
    for (const b of buckets) {
      const pct = (critMagnitudeDist[b] / critMagnitudeCount * 100).toFixed(1);
      const bar = '█'.repeat(Math.round(Number(pct) / 2));
      console.log(`    ${String(b).padStart(3)}–${b+9}%  ${pct.padStart(5)}%  ${bar}`);
    }
  }
}

for (const pool of [3, 10, 25]) {
  report(simulate(pool));
}

// Extra: show how "net" maps to game outcomes suggestion
console.log(`\n${'═'.repeat(60)}`);
console.log(`  SUGGESTED OUTCOME MAPPING`);
console.log(`${'═'.repeat(60)}`);
console.log(`  net ≤ -3  : Catastrophic failure`);
console.log(`  net -2..-1: Clear failure`);
console.log(`  net  0    : Partial / costly success`);
console.log(`  net  1..2 : Success`);
console.log(`  net  3..4 : Strong success`);
console.log(`  net  5+   : Overwhelming success`);
console.log(`  + crit    : Bonus effect, magnitude = % of 0s`);
