import { runTests } from './src/test/businessConfig.test.ts';

const results = runTests();
console.log("=== TDD SECURITY & LOGIC UNIT TEST RESULTS ===");
let hasFailure = false;
results.forEach(r => {
  if (r.passed) {
    console.log(`[PASS] ${r.test}`);
  } else {
    console.error(`[FAIL] ${r.test}: ${r.error}`);
    hasFailure = true;
  }
});

if (hasFailure) {
  process.exit(1);
} else {
  console.log("ALL TESTS PASSED SUCCESSFULLY! (100% GREEN)");
}
