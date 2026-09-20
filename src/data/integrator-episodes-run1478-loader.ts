// Eager integration loader: all-content.ts discovers integrator-episodes*.ts modules automatically.
// Character mutations live in the paired cast module; this shim ensures the reviewed Run 1478 delta executes.
import "./integrator-cast-run1478-intake";

export const run1478Episodes = [];
