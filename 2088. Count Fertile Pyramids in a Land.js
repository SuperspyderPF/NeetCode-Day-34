var countPyramids = function (grid) {
    const n = grid.length;
    const m = grid[0].length;
    const copy = grid.map((row) => row.slice());
    let ans = 0;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        ans += Math.max(0, helper(i, j, n, m, grid, 1) - 1);
        ans += Math.max(0, helper(i, j, n, m, copy, -1) - 1);
      }
    }
  
    return ans;
  };
  
  function helper(i, j, n, m, matrix, dir) {
    if (
      matrix[i][j] === 1 &&
      i + dir >= 0 &&
      i + dir < n &&
      matrix[i + dir][j] > 0 &&
      j - 1 >= 0 &&
      j + 1 < m
    ) {
      const left = helper(i + dir, j - 1, n, m, matrix, dir);
      const right = helper(i + dir, j + 1, n, m, matrix, dir);
  
      return (matrix[i][j] = Math.min(left, right) + 1);
    }
  
    return matrix[i][j];
  }