import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SuccessScreen() {
    const router = useRouter();
    const { eventTitle } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>✓</Text>
            </View>
            <Text style={styles.title}>Payment Successful!</Text>
            <Text style={styles.message}>You have successfully bought a ticket for:</Text>
            <Text style={styles.eventName}>{eventTitle}</Text>

            <Pressable style={styles.button} onPress={() => router.navigate('/events')}>
                <Text style={styles.buttonText}>Back to Events</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    iconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#60BF44',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    icon: {
        color: '#fff',
        fontSize: 60,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 5,
    },
    eventName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
