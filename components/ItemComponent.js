import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { CardItem, Right } from "native-base";
import StartRating from "react-native-star-rating";

export default class ItemComponent extends Component {
  render() {
    const { itemName, itemCreator, itemPrice, rating, imageUri } = this.props;

    return (
      <CardItem>
        <View>
          <Image
            style={{ height: 100, width: 100, resizeMode: "contain" }}
            source={imageUri}
          />
        </View>

        <Right
          style={{
            flex: 1,
            alignItems: "flex-start",
            height: 100,
            paddingHorizontal: 20
          }}
        >
          <Text>{itemName}</Text>
          <Text style={{ color: "#999", fontSize: 11 }}>{itemCreator}</Text>

          <StartRating
            disabled={true}
            maxStars={5}
            rating={rating}
            starSize={12}
            fullStarColor="orange"
            emptyStarColor="orange"
          />

          <Text style={{ color: "#C4402F", fontSize: 14, fontWeight: "bold" }}>
            {itemPrice}
          </Text>
        </Right>
      </CardItem>
    );
  }
}
