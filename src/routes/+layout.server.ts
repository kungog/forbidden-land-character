import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals }) => {
  console.log(locals)
  return {
    session: locals,
  }
  return {
    session: await locals.getSession(),
  }
}
