import React, { useState ,useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native'

import api from '../../Services/api'

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDatail(incident) {
        navigation.navigate('Detail', { incident });
    }
    
    async function loadIncidents() {    
        if(loading) {
            return;
        }

        if(total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents()
    }, [])

    return (
        
        /*SafeAreaView no lugar do primeiro container de view */
        <View style={styles.container}>
            <View style={styles.headers}>
                <Image source={logoImg} />
                <Text style={styles.headersText}>
                    Total de <Text style={styles.headersTextBold}> {total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
                data={incidents}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency', 
                                currency: 'BRL'
                            }).format(incident.value)}
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => navigateToDatail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais datalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}