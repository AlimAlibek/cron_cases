import { getCases } from "../../services/getCases";
import { createEffect, restore } from "effector";

export const getCasesFx = createEffect(getCases);
export const $cases = restore(getCasesFx, []);

