export type Player = "X" | "O";
export type Cell = {
	index: number;
	value: Player | "";
};

export type Grid = Cell[];
