import React from 'react'
import {
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Platform,
  } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
    const { pokemons, loadPokemons, isNext } = props;
    
    const loadMore = () => {
        loadPokemons();
    };

    return (
       <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReachedThreshold={0.05}
            onEndReached={isNext && loadMore}            
            // ListFooterComponent={
            //     isNext && (
            //     <ActivityIndicator
            //         size="small"
            //         style={styles.spinner}
            //         color="#AEAEAE"
            //     />
            //     )
            // }            
       />
    );
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 30 : 10,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 50 : 30,
    }
})