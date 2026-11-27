// Loader-only integration module. all-content.ts eagerly loads integrator-episodes*
// modules, so this keeps the Yazaki cast dossier active without duplicating any
// Episode object or touching unrelated canonical owners.
import "./integrator-cast-run1033-whiskey-yazaki";

export const episodes = [];
