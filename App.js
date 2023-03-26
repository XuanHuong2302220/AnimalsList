import React from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function App() {
  const animals = [
    {
      id: 1,
      name: 'Tiger',
      image: require('./avatar/tiger.png'),
      info: 'Hổ có thân hình vạm vỡ với chân trước mạnh mẽ, đầu to và đuôi dài khoảng một nửa cơ thể'
    },
    {
      id: 2,
      name: 'Penguin',
      image: require('./avatar/penguin.png'),
      info: 'Chim cánh cụt thích nghi tốt với cuộc sống dưới nước. Các cánh của chúng đã tiến hóa thành các chân chèo và không có tác dụng để bay trong không gian.'
    },
    {
      id: 3,
      name: 'Shark',
      image: require('./avatar/shark.png'),
      info: 'Cá mập là một loài động vật gây ra rất nhiều nỗi sợ hãi do khả năng tuyệt đối của nó. Nhìn chung, một con cá mập có thể dài khoảng 8 mét và có miệng hình vòm, với một số hàng răng rất sắc.'
    },
    {
      id: 4,
      name: 'Whale',
      image: require('./avatar/whale.png'),
      info:'là động vật máu nóng, hít thở không khí bằng phổi, sinh con non và nuôi chúng bằng cách cho chúng bú sữa do mẹ tiết ra, có lông (mặc dù rất ít).'
    },
    {
      id: 5,
      name: 'Panda',
      image: require('./avatar/panda.png'),
      info:'Đặc điểm của gấu trúc dễ nhận ra và không lẫn vào đâu được đó chính là có những mảng lông màu đen ở quanh mắt, tai và 4 chân trên nền lông trắng.'
    },
    {
      id: 6,
      name: 'Bear',
      image: require('./avatar/bear.png'),
      info:'Đặc điểm chung của những loài gấu ngày nay bao gồm cơ thể to lớn với đôi chân thon dài, mõm dài, tai tròn nhỏ, lông xù, móng chân có năm móng vuốt không rút lại được, và đuôi ngắn.'
    },
  ];

  const oneAnimal = ({ item }) => {
    return (
      <TouchableOpacity 
      style = {styles.item}
      onPress={() => {
        getItem(item)
      }}
      >
      
        <View style = {styles.avatarcontainer}>
          <Image source={item.image} style ={styles.avatar}></Image>
        </View>
        <Text style = {styles.name}>{item.name}</Text>

     
      </TouchableOpacity>
    )
  };
  const getItem = (item) =>{
     alert(item.info)
  }
  HeaderComponent = () =>{
    return <Text style = {styles.Headerline}>My Favorite Animals</Text>;
  }
  ItemSeparatorView = () =>{
    return <View style ={styles.Itemview}></View>
  }
  return (
    <SafeAreaView>
      <FlatList 
        ListHeaderComponent={HeaderComponent}
        ListHeaderComponentStyle={styles.listHeader}
        data={animals}
        renderItem={oneAnimal}
        ItemSeparatorComponent = {ItemSeparatorView}
      />
    </SafeAreaView>
  );

  
}
const styles = StyleSheet.create({
  listHeader: {
    height: 55,
    justifyContent: 'center',
    alignItems:'center'
  },
  Itemview :{
    height: 1,
    width: '100%',
    backgroundColor: '#c8c8c8'
  },
  Headerline:{
    fontSize: 21,
    color: '#333',
    fontWeight:'bold',
    marginTop: 20
  },
  item :{
      flex: 1,
      flexDirection:'row',
      alignItems:'center',
      paddingVertical: 13
  },
  avatarcontainer: {
      backgroundColor: '#D9D9D9',
      borderRadius:100,
      height: 89,
      width:89,
      justifyContent:'center',
      alignItems:'center'
  },
  name : {
      fontWeight: '600',
      fontSize: 16,
      marginLeft: 13
  },
  avatar:{
    height: 55,
    width: 55
  }
});
