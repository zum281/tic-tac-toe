import { Grid } from "@/types/game";

export const INITIAL_GRID: Grid = Array(9)
	.fill("")
	.map((_, index) => {
		return { value: "", index };
	});
