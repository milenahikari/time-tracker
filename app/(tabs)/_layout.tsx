import React from 'react';
import { Tabs } from 'expo-router';

import { TabBarButton } from '~/src/components/TabBarButton';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: '#070417',
        minHeight: 100,
        paddingTop: 20,
        borderRadius: 30
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarButton tab="index" isFocused={focused}/>,
        }}
      />
      <Tabs.Screen
        name="addNewTimer"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarButton tab="addNewTimer" isFocused={focused}/>,
        }}
      />
      <Tabs.Screen
        name="myProductivity"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarButton tab="myProductivity" isFocused={focused}/>,
        }}
      />
    </Tabs>
  );
}
