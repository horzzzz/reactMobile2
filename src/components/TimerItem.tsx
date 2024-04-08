import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"
import { IReminder } from "../Store/store"
import { storage } from "../../App"

type TProps = {
    reminder: IReminder
}
export const TimerItem = ({reminder}: TProps) =>(
    <View style={styles.itemContainer}>
        <Text style={styles.title}>{reminder.name}</Text>
        <Text style={styles.timer}>{reminder.date.toString()}</Text>
        <Text style={styles.timer}>{storage.getString("Test")}</Text>
        </View>
)

const styles = StyleSheet.create({
    itemContainer: {
      padding: 16,
      elevation: 6,
      borderRadius: 10,
      margin: 16,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: 'white'
    } as ViewStyle,
    title: {
      fontSize: 20,
    } as TextStyle,
    timer: {
      fontSize: 16,
    } as TextStyle
  })