import React from 'react';
import { Text, View, FlatList, StyleSheet, Image} from 'react-native';

const students = [
    { name: 'Student #1', fakultas: 'FIK'},
    { name: 'Student #2', fakultas: 'FEB'},
    { name: 'Student #3', fakultas: 'Nursing'},
    { name: 'Student #4', fakultas: 'Education'},
    { name: 'Student #5', fakultas: 'FIK'},
    { name: 'Student #6', fakultas: 'Filsafat'},
    { name: 'Student #7', fakultas: 'Pertanian'},
    { name: 'Student #8', fakultas: 'ASMII'},
    { name: 'Student #9', fakultas: 'FIK'},
    { name: 'Student #10', fakultas: 'FIK'}
];

const StudentScreen = () => {
    return (
        <FlatList 
            data={students}
            renderItem={({ item })=>
                <View style={styles.textStyle}>
                    <Image 
                        style={{width: 200, height: 200}}
                        // source={{uri: item.imageUrl}}
                        source={require('../assets/images/fikLogo.jpg')}
                    />
                    <Text >
                        {item.name}
                    </Text>
                    <Text>
                        {item.fakultas}
                    </Text>
                </View>
                }
                
            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 100
    }
});

export default StudentScreen;