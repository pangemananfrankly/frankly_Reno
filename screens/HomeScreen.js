import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return (
        
        <View >
            <ImageBackground source={require('../assets/images/gambar6.jpg')} style={{width: '100%', height: '100%'}}>
            <Text> Home Screen </Text>
            
            <Button 
                title="Go to Component Screen"
                onPress={()=> navigation.navigate('Component')}
            />
            <Button 
                title="Go to Student Screen"
                onPress={()=> navigation.navigate('Student')}
            />
            </ImageBackground>  
            

        </View>
        
    );     
};



export default HomeScreen;