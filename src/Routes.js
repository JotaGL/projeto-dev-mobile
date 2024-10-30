import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterScreen from './src/pages/RegisterScreen'; 
import CatalogScreen from './src/pages/CatalogScreen'; 
import CartScreen from './src/pages/CartScreen'; 
import LoginScreen from './src/pages/LoginScreen'; 

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Register" 
                component={RegisterScreen} 
                options={{ tabBarHideOnKeyboard: true }} 
            />
            <Tab.Screen 
                name="Login" 
                component={LoginScreen} 
                options={{ tabBarHideOnKeyboard: true }} 
            />
            <Tab.Screen 
                name="Catalogo" 
                component={CatalogScreen} 
            />
            <Tab.Screen 
                name="Carrinho" 
                component={CartScreen} 
            />
        </Tab.Navigator>
    );
}
