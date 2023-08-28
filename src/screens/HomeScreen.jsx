import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import { List, Title } from "react-native-paper";
import { collection, getDocs, onSnapshot } from "firebase/firestore"; // Importe onSnapshot
import { db } from "../config/firebase";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchPostsFromFirestore(); // Salve a função unsubscribe

    // Retorne a função de limpeza no useEffect para desativar o listener quando o componente é desmontado
    return () => {
      unsubscribe();
    };
  }, []);

  const fetchPostsFromFirestore = () => {
    const postCollectionRef = collection(db, "posts");

    // Crie o listener para real-time updates
    return onSnapshot(postCollectionRef, (querySnapshot) => {
      const postList = [];

      querySnapshot.forEach((doc) => {
        const post = doc.data();

        postList.push({ id: doc.id, ...post });
      });

      setPosts(postList);
    });
  };

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            left={() => (
              <Image
                source={{ uri: item.imageURL }}
                style={{ width: 50, height: 50 }}
              />
            )}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
