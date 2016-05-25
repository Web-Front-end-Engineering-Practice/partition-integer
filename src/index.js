/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-05-25[16:54:16]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';

function caim(n, k) {
    if (n < k || n * k === 0) {
        return 0;
    }
    if (1 === k || n === k) {
        return 1;
    }
    if (k === n - 1) {
        return 1;
    }
    return caim(n - 1, k - 1) + caim(n - k, k);
}

function cai(n, cache = {}) {
    if (cache[n]) {
        return cache[n];
    }

    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    }

    let i = 1;
    let sum = 0;

    while (1) {
        let p = i * (3 * i - 1) / 2;
        let q = i * (3 * i + 1) / 2;
        if (n < q && n < p) {
            break;
        }
        sum += Math.pow(-1, i - 1) * (cai(n - q, cache) + cai(n - p, cache));
        ++i;
    }

    cache[n] = sum;

    return sum;
}

export const partitionInteger = (...args) => {
    if (1 in args) {
        return caim(...args);
    } else {
        return cai(args[0]);
    }
};