import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '@/features/auth';
import { themeReducer } from '@/features/theme';
import { navigationReducer } from '@/features/navigation';
import { projectsReducer } from '@/features/projects';
import { blogReducer } from '@/features/blog';
import { contactReducer } from '@/features/contact';

export const store = configureStore({
  reducer: {
     auth: authReducer,
     theme:themeReducer,
     navigation: navigationReducer,
     projects: projectsReducer,
     blog: blogReducer,
     contact: contactReducer
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
