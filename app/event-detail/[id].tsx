import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


const events = [
    { id: '1', title: 'Music Festival', date: 'October 21, 2025', time: '8:00 PM', location: 'Kathamndu, Nepal', category: 'Music', price: 50 },
    { id: '2', title: 'Book Reading Event', date: 'October 25, 2025', time: '6:00 PM', location: 'Kathamndu, Nepal', category: 'Texts', price: 15 },
    { id: '3', title: 'Tech Conference', date: 'November 1, 2025', time: '9:00 AM', location: 'Kathamndu, Nepal', category: 'Education', price: 150 },
];

export default function EventDetailScreen() {
    const { id } = useLocalSearchParams(); 
    const router = useRouter(); 

 
    const event = events.find((e) => e.id === id);

    if (!event) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Event not found!</Text>
            </View>
        );
    }

    const handleBuyTicket = () => {
       
        router.push(`/payment?eventId=${event.id}&eventTitle=${event.title}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.detailText}>Date: {event.date}</Text>
            <Text style={styles.detailText}>Time: {event.time}</Text>
            <Text style={styles.detailText}>Location: {event.location}</Text>
            <Text style={styles.priceText}>Price: Rs.{event.price}</Text>

            <Pressable style={styles.button} onPress={handleBuyTicket}>
                <Text style={styles.buttonText}>Buy Ticket</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f8',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    detailText: {
        fontSize: 18,
        marginBottom: 8,
        color: '#333',
    },
    priceText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007bff',
        marginTop: 20,
        marginBottom: 30,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});