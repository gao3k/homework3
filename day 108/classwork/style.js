function getSize(w, h, d) {
    let area = 2 * (w * h + h * d + d * w);
    let volume = w * h * d;
    return [area, volume];
}
