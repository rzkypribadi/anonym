import { ref, get, push, update, remove } from 'firebase/database';
import { db } from '.src/lib/firebase';

export const cekUsernameUnik = async (username) => {
  const snapshot = await get(ref(db, `users`));
  const users = snapshot.val();
  for (let uid in users) {
    if (users[uid].username === username) return false;
  }
  return true;
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

export const deleteUser = async (uid) => {
  await remove(ref(db, `users/${uid}`));
  await remove(ref(db, `messages/to_uid/${uid}`));
};
