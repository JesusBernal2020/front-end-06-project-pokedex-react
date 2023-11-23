import { configureStore } from '@reduxjs/toolkit';
import nameTrainer from './slices/nameTrainer.slice';

export default configureStore({
  reducer: {
    //Aqui van todos nuestros estados globales  (slices)
    nameTrainer,
  },
});
