import React from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
    return (
        
        /*SafeAreaView no lugar do primeiro container de view */
        <View style={styles.container}>
            <View style={styles.headers}>
                <Image source={logoImg} />
                <Text style={styles.headersText}>
                    Total de <Text style={styles.headersTextBold}> 0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <View style={styles.IncidentsList}>
                <View style={styles.Incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>ODZ</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Vaquinha pra pagar a internaçao do Seeds na reabilitação</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R$ 24,00</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={() => {}}
                    >
                            <Text>Ver mais datalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}