import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useReminderStore from '../Store/store';
import { useState, useEffect } from 'react';

const NotificationScreen: React.FC = () => {
  const navigation = useNavigation();
  const { reminders } = useReminderStore();
  const [countdowns, setCountdowns] = useState<number[]>([]);

  const navigateToNotificationAddScreen = () => {
    navigation.navigate('NotificationAddScreen' as never);
  };
  
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    reminders.forEach((reminder, index) => {
      const interval = setInterval(() => {
        const targetDateTime = new Date(reminder.date);
        const currentDateTime = new Date();
        const differenceInSeconds = Math.floor((targetDateTime.getTime() - currentDateTime.getTime()) / 1000);
        setCountdowns((prevCountdowns) => {
          const updatedCountdowns = [...prevCountdowns];
          updatedCountdowns[index] = differenceInSeconds;
          return updatedCountdowns;
        });
      }, 1000);
      intervals.push(interval);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [reminders]);

  

  return (
    <View>
      <Button title="Go to ..." onPress={navigateToNotificationAddScreen} />
      <Text>Reminders:</Text>
      
         {reminders.map((reminder, index) => (
        <Text key={index}>{reminder.name} - {reminder.date.toString()} -{countdowns[index]}</Text>
      ))}
       
    </View>
  );
};

export default NotificationScreen;