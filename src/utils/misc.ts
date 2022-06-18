import { Grid } from "@/types/game";

export const isGridFull = (grid:Grid) => {
    let res = true;
    grid.forEach(cell => {
      console.log(cell.value === "")
      if (cell.value === "") res = false;
    });

    return res
}