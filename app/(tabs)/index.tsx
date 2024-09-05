import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const SalasScreen = () => {
  const salas = [
    { id: 1, nome: 'C13', professor: 'Professor Carlos' },
    { id: 2, nome: 'C14', professor: 'Professor Thiago' },
    { id: 3, nome: 'C16', professor: 'Informatica' },
    { id: 4, nome: 'C13', professor: 'Professor Carlos' },
    { id: 5, nome: 'C13', professor: 'Professor Carlos' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* Logo e Título */}
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/logosenai.png')}/>
      <Text style={styles.subtitle}>Salas</Text>
      </View>


      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Buscar..." />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Lista de salas com ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {salas.map((sala) => (
          <View key={sala.id} style={styles.card}>
            <View style={styles.cardImagePlaceholder} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{sala.nome}</Text>
              <Text style={styles.cardSubtitle}>{sala.professor}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    paddingHorizontal: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconButton: {
    backgroundColor: '#8B0000',
    borderRadius: 25,
    padding: 15,

  },
  title: {
    fontSize: 22,
    color: 'white',
    marginVertical: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: '#B01818',
    borderRadius: 50,
    padding: 10,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#B01818',
    borderRadius: 50,
    padding: 10,
  },
  editButton: {
    marginLeft: 10,
    backgroundColor: '#B01818',
    borderRadius: 50,
    padding: 10,
  },
  scrollContent: {
    paddingBottom: 100, // Adiciona espaço para evitar sobreposição com o footer
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  cardImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#555', // Cor de fundo para representar o espaço da imagem
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerButton: {
    padding: 10,
  },
});

export default SalasScreen;
