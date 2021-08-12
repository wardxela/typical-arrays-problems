exports.min = (a) => (a && a.length ? a.reduce((p, n) => (p < n ? p : n)) : 0);

exports.max = (a) => (a && a.length ? a.reduce((p, n) => (p > n ? p : n)) : 0);

exports.avg = (a) => (a && a.length ? a.reduce((p, n) => p + n) / a.length : 0);
