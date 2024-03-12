import * as React from 'react';
import { View, Text } from 'react-native';
import useReminderStore from '../Store/store';
import { useState } from 'react';
import { Button, TextInput } from 'react-native';

const NotificationAddScreen: React.FC = () => {
  const [newReminder, setNewReminder] = useState('');
  const { reminders, addReminder } = useReminderStore();
  
  const handleAddReminder = () => {
    if (newReminder.trim() !== '') {
      addReminder(newReminder);
      setNewReminder('');
    }
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        value={newReminder}
        onChangeText={(text) => setNewReminder(text)}
      />
      <Button title="Add Reminder" onPress={handleAddReminder} />

      <Text>Reminders:</Text>
      {reminders.map((reminder, index) => (
        <Text key={index}>{reminder}</Text>
      ))}
    </View>
  );
};



export default NotificationAddScreen;