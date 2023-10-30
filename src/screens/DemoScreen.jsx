import React from 'react'
import { Text, SafeAreaView } from 'react-native'

const DemoScreen = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Demo Screen</Text>
        </SafeAreaView>
    )
}

export default DemoScreen;