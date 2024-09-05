import { DrawerItemList } from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { useColor } from '../temas/temas';

export default function CustomDrawer(props: any){
    const cores = useColor();

    const styles = StyleSheet.create({
        container0: {
            alignItems: 'center',
            padding: 20,
            height: 130,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'row',
        },
        Info: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 30,
            textAlign: 'center',
            color: 'gray',
        },
        tittle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: cores.textColorPrimaryVariant
        },
        text: {
            fontSize: 16,
            color: cores.textColorPrimaryVariant
        },
        container1: {
            flex: 1
        }
    });

    return (
        <View style={[styles.container1, {backgroundColor: cores.bgPrimary}]}>
            <View style={[styles.container0, {backgroundColor: cores.bgPrimary}]}>
                <FontAwesome5 name="user-circle" size={80} color={cores.textColorPrimaryVariant} />
                <View style={styles.Info}>
                    <Text style={styles.tittle}>Guilherme Augusto</Text>
                    <Text style={styles.text}>guilherme@gmail.com</Text>
                </View>
            </View>
            <DrawerItemList {...props}/>
        </View>
    )
}