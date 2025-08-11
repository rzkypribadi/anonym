import { ref, get, push, update, remove } from 'firebase/database';
import { db } from '../lib/firebase';

export const cekUsernameUnik = async (username) => {
  const snapshot = await get(ref(db, 'users'));
  const users = snapshot.val() || {};
  return !Object.values(users).some(user => user.username === username);
};

export const simpanPesan = async (data) => {
  await push(ref(db, 'messages'), data);
};

export const getUserData = async (uid) => {
  const snapshot = await get(ref(db, `users/${uid}`));
  return snapshot.val();
};

export const updateUser = async (uid, data) => {
  await update(ref(db, `users/${uid}`), data);
};

export const hapusUser = async (uid) => {
  await remove(ref(db, `users/${uid}`));
};
