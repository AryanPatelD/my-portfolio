import { useMemo, useReducer } from 'react';
import { AppDispatchContext, AppStateContext } from './contexts';

const initialProjects = [
  {
    title: 'Geatherlyy',
    description:
      'A modern, minimal, role-based web platform for managing university clubs, activities, quizzes, and member engagement.',
  },
  {
    title: 'SkillX',
    description:
      'A web-based system where students offer and request skills to learn. Instead of monetary payment, the system uses a credit-based exchange mechanism.',
  },
  {
    title: 'Zaplink backend Contribution',
    description: 'Fix File Size Limits in Multer Uploads (Security/DoS Risk).',
  },
];

const initialState = {
  projects: initialProjects,
  featuredProjectTitle: initialProjects[0].title,
  routeVisits: {
    home: 0,
    projects: 0,
    contact: 0,
  },
};

function appStateReducer(state, action) {
  switch (action.type) {
    case 'SET_FEATURED_PROJECT': {
      return {
        ...state,
        featuredProjectTitle: action.payload,
      };
    }
    case 'TRACK_ROUTE_VISIT': {
      const routeKey = action.payload;
      return {
        ...state,
        routeVisits: {
          ...state.routeVisits,
          [routeKey]: (state.routeVisits[routeKey] ?? 0) + 1,
        },
      };
    }
    default:
      return state;
  }
}

export function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  const memoizedState = useMemo(() => state, [state]);

  return (
    <AppStateContext.Provider value={memoizedState}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}
