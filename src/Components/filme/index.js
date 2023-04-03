import {View, Image, Text, Button} from "react-native";

import styles from './styles';

export default function Filme(prompt){
    return(
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{uri: prompt.filme.imgUrl}} style={styles.img}/>

            </View>
            <View style={styles.viewData}>
                <Text style= {styles.titulo}>Título {prompt.filme.titulo}</Text>
                <Text style= {styles.titulo}>Título {prompt.filme.titulo}</Text>
                <Text style= {styles.titulo}>Título {prompt.filme.titulo}</Text>
                <Button style={styles.btn} title="COMPRAR"/>
            </View>
        </View>
    )
}