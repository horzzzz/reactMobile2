import * as React from 'react';
import { View, Text, Alert, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import useReminderStore from '../Store/store';
import { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { TimerItem } from '../components/TimerItem';
const NotificationAddScreen: React.FC = () => {
  const [reminderName, setReminderName] = useState('');
  const [newDate, setNewDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false); 

  const { reminders, addReminder } = useReminderStore();
  
  const handleAddReminder = () => {
        addReminder({name: reminderName, date: newDate.toISOString()});
        setReminderName('');
        setNewDate(new Date());
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    const currentDate = selectedDate || newDate;
    setNewDate(currentDate);
  };


  const toggleDatePicker = () => {
    DateTimePickerAndroid.open({
      value: newDate,
      mode: "date",
      display:"default",
      onChange:handleDateChange
    })
  }

  const toggleTimePicker = () => {
    DateTimePickerAndroid.open({
      value: newDate,
      mode: "time",
      display:"default",
      onChange:handleDateChange
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        value={reminderName}
        onChangeText={(text) => setReminderName(text)}
        placeholder="Reminder Name"
      />
      <Text style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}>{newDate.toISOString()}</Text>
      <Button title="Select Date" onPress={toggleDatePicker} />
      <Button title="Select Time" onPress={toggleTimePicker} />
      <Button title="Add Reminder" onPress={handleAddReminder} />

      <Text>Reminders:</Text>
      {reminders.map((reminder) => (
        <TimerItem key={reminder.date.toString()} reminder={reminder}/>
      ))}
    </View>
  );
};





export default NotificationAddScreen;