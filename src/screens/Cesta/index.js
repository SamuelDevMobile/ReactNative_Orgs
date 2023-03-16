import { StyleSheet, View, ScrollView } from "react-native"
import Detalhes from "./components/Detalhes"
import Itens from "./components/Itens"
import Topo from "./components/Topo"

export default function Cesta({ topo, detalhes, itens}) {
    return <ScrollView>
        <Topo {...topo} />
    
        <View style={styles.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens} />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})