// +page.ts
import type { PageLoad } from "./$types";
export const load: PageLoad = async ({ params }) => {
  return { content: params.album };
};
