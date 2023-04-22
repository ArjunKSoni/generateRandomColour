import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [color,setColour]=useState([])

  const press=()=>{
    const r=Math.floor((Math.random()*256))
    const g=Math.floor((Math.random()*256))
    const b=Math.floor((Math.random()*256))
    let val={colour:"rgb("+r.toString()+","+g.toString()+","+b.toString()+")"}
    setColour(color.concat(val))
  }

  return (
    <View className="flex-1 mt-10 items-center w-screen bg-white">
      <Text className="text-xl font-extrabold"><Text className="text-green-600">Generate</Text> random <Text className="text-red-600">Colour</Text></Text>
      <TouchableOpacity onPress={press}>
        <Text className="p-5 bg-slate-900 mb-4 text-white rounded-lg mt-2">Generate</Text>
      </TouchableOpacity>

      <FlatList
      data={color}
      renderItem={({item})=>{
        return <Text className="text-white rounded-xl m-2 p-4 text-center font-extrabold text-xl" style={{backgroundColor:item.colour,width:300}}>{item.colour}</Text>
      }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
