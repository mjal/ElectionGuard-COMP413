import * as crypto from "crypto"; // nodejs

// Helper functions for group.test.ts
import {ElementModQ, ElementModP, Q, P, int_to_q_unchecked, int_to_p_unchecked} from './group';
const elements_mod_q: () => ElementModQ = () => {
    return int_to_q_unchecked(getRandomIntExclusive(Q));
}

const elements_mod_q_no_zero: () => ElementModQ = () => {
    return int_to_q_unchecked(getRandomIntExclusive(Q));
}

const elements_mod_p: () => ElementModP = () => {
    return int_to_p_unchecked(getRandomIntExclusive(P));
}

const elements_mod_p_no_zero: () => ElementModP = () => {
    return int_to_p_unchecked(getRandomIntExclusive(P));
}

const getRandomIntExclusive: (range: bigint) => bigint = (range) => {
    const ab = new Uint32Array(32);
    if (window?.crypto?.getRandomValues)
    {
        window.crypto.getRandomValues(ab);
    }
    else if (crypto && (crypto as any).randomFillSync)
    {
        (crypto as any).randomFillSync(ab)
    }
    else
      throw "Cannot get random value"

    return BigInt((new Array(...ab)).map(e => String(e)).join("")) % range
}

// Convert decimal strings to Hex with JS BigInts
// https://coolaj86.com/articles/convert-decimal-to-hex-with-js-bigints/
// Since in our case bn is never going to be negative, ignore the bn < 0 case
const bnToHex: (bn: bigint) => string = (bn) => {
    bn = BigInt(bn);

    const pos = true;

    let hex = bn.toString(16);
    if (hex.length % 2) { hex = '0' + hex; }

    if (pos && (0x80 & parseInt(hex.slice(0, 2), 16))) {
        hex = '00' + hex;
    }

    return hex;
}


export {elements_mod_q, elements_mod_q_no_zero, elements_mod_p, elements_mod_p_no_zero, getRandomIntExclusive, bnToHex};
