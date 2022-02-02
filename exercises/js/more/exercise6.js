function initGrid() {
    // collect colors in an array
    let colors = [];
    let range = ["00", "33", "66", "99", "cc", "ff"];

    for (let r = 0; r < range.length; r++) {
        for (let g = 0; g < range.length; g++) {
            for (let b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // TODO complete the rest
}

window.onload = function () {
    initGrid();
}
