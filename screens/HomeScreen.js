import React, { useState } from "react";
import { Platform, View, Text, Image } from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Item,
  Input,
  Card,
  CardItem
} from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";

import ItemComponent from "../components/ItemComponent";

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Header
        style={{
          paddingTop: Platform.OS === "android" ? 30 : 0,
          backgroundColor: "#232F3E",
          height: 90
        }}
      >
        <Left style={{ flexDirection: "row", marginLeft: 10 }}>
          <Icon
            name="md-menu"
            style={{
              color: "#FFF",
              marginRight: 15
            }}
            onPress={() => navigation.openDrawer()}
          />
          <FAIcon name="amazon" size={32} style={{ color: "#FFF" }} />
        </Left>

        <Right style={{ flexDirection: "row", marginRight: 10 }}>
          <Icon name="search" style={{ color: "#FFF", marginRight: 15 }} />
          <Icon name="md-cart" style={{ color: "#FFF" }} />
        </Right>
      </Header>

      <View
        style={{
          height: 50,
          backgroundColor: "#232F3E",
          paddingRight: 7,
          paddingLeft: 7
        }}
      >
        <Item
          style={{
            backgroundColor: "#FFF",
            paddingLeft: 8,
            borderRadius: 4,
            borderColor: "#FF9900",
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderTopWidth: 3,
            borderBottomWidth: 3
          }}
        >
          <Icon name="search" size={20} style={{ color: "#FF9900" }} />
          <Input
            placeholder="O que você procura?"
            style={{ height: 36 }}
            value={search}
            onChange={setSearch}
          />
          <Icon
            name="close"
            size={20}
            style={{ color: "#999" }}
            onPress={() => setSearch("")}
          />
        </Item>
      </View>

      <Content style={{ backgroundColor: "#D5D5D6" }}>
        <View
          style={{
            height: 50,
            backgroundColor: "#3A455C",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <FAIcon
            name="map-marker"
            size={25}
            style={{ color: "#FFF", marginLeft: 10, marginRight: 5 }}
          />
          <Text style={{ color: "#FFF" }}>
            Enviar para Murilo - Imperatriz 123456789
          </Text>
          <FAIcon
            name="angle-down"
            size={20}
            style={{ color: "#FFF", marginLeft: 5 }}
          />
        </View>

        <Image
          source={require("../assets/banner_1.jpeg")}
          style={{
            flex: 1,
            height: 150,
            width: "100%",
            resizeMode: "cover"
          }}
        />

        <Image
          source={require("../assets/banner_2.jpeg")}
          style={{
            marginTop: 5,
            marginBottom: 5,
            flex: 1,
            height: 150,
            width: "100%",
            resizeMode: "cover"
          }}
        />

        <Card style={{ marginLeft: 5, marginRight: 5 }}>
          <CardItem
            header
            style={{ borderBottomWidth: 1, borderBottomColor: "#DEE0E2" }}
          >
            <Text>Recomendações</Text>
          </CardItem>

          <ItemComponent
            itemName="Jogos Vorazes: Em Chamas"
            itemCreator="Prime Video"
            itemPrice="R$9.90"
            rating="4.5"
            imageUri={require("../assets/item_1.jpg")}
          />

          <ItemComponent
            itemName="Marvel's Spider-Man"
            itemCreator="Playstation"
            itemPrice="R$139.99"
            rating="5"
            imageUri={require("../assets/item_2.jpg")}
          />

          <ItemComponent
            itemName="Game of Thrones - Série completa"
            itemCreator="HBO"
            itemPrice="R$499.90"
            rating="4"
            imageUri={require("../assets/item_3.jpg")}
          />
        </Card>
      </Content>
    </Container>
  );
}
