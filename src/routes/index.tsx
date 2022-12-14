
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {AppStackRoutes} from './stack.routes';

// import { useAuth } from '../hooks/auth';

// import { AppTabRoutes } from './app.tab.routes';
// import { AuthRoutes } from './auth.routes';
// import { LoadAnimation } from '../components/LoadAnimation';

export function Routes(){
	// const { user, loading } = useAuth();

	return (
		// loading ? <LoadAnimation /> :
		<NavigationContainer>
            <AppStackRoutes />
			{/* { user.id ?  <AppTabRoutes/> : <AuthRoutes/>} */}
		</NavigationContainer>
	);
}