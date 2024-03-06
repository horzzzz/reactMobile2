import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotificationScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToNotificationAddScreen = () => {
    navigation.navigate('NotificationAddScreen' as never);
  };

  return (
    <View>
      <Text>Notification Screen</Text>
      <Button title="Go to ..." onPress={navigateToNotificationAddScreen} />
    </View>
  );
};

export default NotificationScreen;