// store/atoms.js
import { atom } from 'recoil';

let storedPublicKey = null;
if (typeof window !== 'undefined') {
  storedPublicKey = localStorage.getItem('publicKey');
}
export const publicKeyState = atom<string | null>({
  key: 'publicKeyState',
  default: storedPublicKey ? storedPublicKey : null,
});
