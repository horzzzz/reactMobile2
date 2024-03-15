import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useReminderStore from '../Store/store';

const NotificationScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToNotificationAddScreen = () => {
    navigation.navigate('NotificationAddScreen' as never);
  };
  const { reminders } = useReminderStore();

  return (
    <View>
      <Button title="Go to ..." onPress={navigateToNotificationAddScreen} />
      <Text>Reminders:</Text>
      {reminders.map((reminder, index) => (
        <Text key={index}>{reminder}</Text>
      ))}
    </View>
  );
};

export default NotificationScreen;