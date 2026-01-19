export const MAX_GENES = 50;
export const MAX_SYMBOL_LENGTH = 32;
export const VALID_SYMBOL_REGEX = /^[A-Za-z0-9_\-]+$/;

export function validateGenes(genes) {
  const errors = [];
  const cleaned = [];

  for (const gene of genes) {
    if (!gene || gene.trim().length === 0) {
      errors.push(`Gene symbol is empty.`);
      continue;
    }

    if (gene.length > MAX_SYMBOL_LENGTH) {
      errors.push(`${gene} is too long (max ${MAX_SYMBOL_LENGTH} chars).`);
      continue;
    }

    if (!VALID_SYMBOL_REGEX.test(gene)) {
      errors.push(`${gene} contains invalid characters.`);
      continue;
    }

    cleaned.push(gene);
  }

  if (cleaned.length > MAX_GENES) {
    errors.push(
      `Too many genes: ${cleaned.length} (max allowed = ${MAX_GENES}).`
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
    cleaned,
  };
}
