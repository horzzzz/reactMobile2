import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useReminderStore from '../Store/store';

const NotificationScreen: React.FC = () => {
  const navigation = useNavigation();
  const { reminders } = useReminderStore();

  const navigateToNotificationAddScreen = () => {
    navigation.navigate('NotificationAddScreen' as never);
  };

  

  return (
    <View>
      <Button title="Go to ..." onPress={navigateToNotificationAddScreen} />
      <Text>Reminders:</Text>
      {reminders.map((reminder, index) => (
         <View key={index}>
         {reminders.map((reminder, index) => (
        <Text key={index}>{reminder.name} - {reminder.date.toString()}</Text>
      ))}
       </View>
      ))}
    </View>
  );
};

export default NotificationScreen;