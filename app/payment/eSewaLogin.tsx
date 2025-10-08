import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function PaymentScreen() {
    const { eventId, eventTitle } = useLocalSearchParams();
    const router = useRouter(); 

    const handleEsewaPayment = () => {
 
        router.push({
            pathname: './esewaLogin',
            params: { eventId: eventId as string, eventTitle: eventTitle as string }
        });
    };

    const handleBankPayment = () => {
        Alert.alert('Bank Payment', 'This feature is not yet implemented.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Confirm Your Ticket</Text>
            <Text style={styles.eventInfo}>
                You are purchasing a ticket for: <Text style={styles.eventName}>{eventTitle}</Text>
            </Text>
            <Text style={styles.subHeader}>Choose your payment method:</Text>
            
            <Pressable style={[styles.button, styles.esewaButton]} onPress={handleEsewaPayment}>
                <Text style={styles.buttonText}>Pay with eSewa</Text>
            </Pressable>

            <Pressable style={[styles.button, styles.bankButton]} onPress={handleBankPayment}>
                <Text style={styles.buttonText}>Pay with Bank Transfer</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    eventInfo: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 30,
    },
    eventName: {
        fontWeight: 'bold',
        color: '#000',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 20,
    },
    button: {
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    esewaButton: {
        backgroundColor: '#60BF44',
    },
    bankButton: {
        backgroundColor: '#007bff',
    },
});

