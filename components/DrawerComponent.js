import React from "react";
import { Platform, FlatList, Text } from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Icon,
  ListItem
} from "native-base";

export default function DrawerComponent() {
  const menuList = [
    "Início",
    "Seus pedidos",
    "Comprar novamente",
    "Sua lista de desejos",
    "Sua conta",
    "Navegar por loja"
  ];

  const optionsList = [
    "Ofertas do dia",
    "Venda na Amazon",
    "Dicas de presentes",
    "Amazon family",
    "Veja todos os programas"
  ];

  const settingsList = [
    "Suas notificações",
    "Configurações",
    "Atendimentos ao cliente"
  ];

  return (
    <Container>
      <Header
        style={{
          backgroundColor: "#232F3E",
          height: 90,
          paddingTop: Platform.OS === "android" ? 30 : 0
        }}
      >
        <Left style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Icon name="person" style={{ color: "#FFF" }} />
          <Text
            style={{
              color: "#FFF",
              marginLeft: 5,
              fontSize: 22,
              fontStyle: "italic"
            }}
          >
            Olá, Murilo
          </Text>
        </Left>
        <Right />
      </Header>

      <Content>
        <FlatList
          data={menuList}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />

        <FlatList
          style={{ borderTopWidth: 2, borderTopColor: "#F0F0F0" }}
          data={optionsList}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />

        <FlatList
          style={{ borderTopWidth: 2, borderTopColor: "#F0F0F0" }}
          data={settingsList}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
}
