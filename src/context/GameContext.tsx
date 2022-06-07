import { createContext, useContext } from "react";

export type Player = "X" | "O";

export type GameContextType = {
	currentPlayer: Player;
	setCurrentPlayer: (player: Player) => void;
	grid: Player[] | ""[];
	setGrid: (grid: Player[] | ""[]) => void;
	winner: Player | null;
	setWinner: (winner: Player | null) => void;
};

export const GameContext = createContext<GameContextType>({
	currentPlayer: "X",
	setCurrentPlayer: () => {},
	grid: Array(9).fill(""),
	setGrid: () => {},
	winner: null,
	setWinner: () => {},
});

export const useGameContext = () => useContext(GameContext);
