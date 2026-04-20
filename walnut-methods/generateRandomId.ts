import type { WalnutContext } from './walnut';

/** @walnut_method
 * name: Generate Random Alphanumeric ID
 * description: Generate a random alphanumeric id of length ${length} and store in $[randomId]
 * actionType: custom_generate_random_id
 * context: shared
 * needsLocator: false
 * category: Data Processing
 */
export async function generateRandomId(ctx: WalnutContext) {
  const length = Number(ctx.args[0]); // from ${length}
  const outputVar = ctx.args[1];      // from $[randomId]
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  ctx.setVariable(outputVar, result);
}
