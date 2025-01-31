import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import Icon from "react-native-vector-icons/MaterialIcons";

const TabBar = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.navContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={index}
            style={[
              styles.platform,
              { borderTop: isFocused ? "2px solid black" : "none" },
            ]}
            href={buildHref(route.name, route.params)}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={styles.icon}>{icons[label]}</Text>
            <Text
              style={{
                color: isFocused ? colors.primary : colors.text,
                textDecorationLine: isFocused ? "underline" : "none",
                fontWeight: "500",
              }}
            >
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

const icons = {
  Todo: <Icon name="checklist" size={30} />,
  Home: <Icon name="home" size={30} />,
  Barcodes: <Icon name="barcode-reader" size={30} />,
  Stores: <Icon name="store" size={30} />,
  Contracts: <Icon name="article" size={30} />,
  Fields: <Icon name="list" size={30} />,
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingBottom: 10,
  },
  platform: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  icon: {
    fontSize: 20,
  },
});

export default TabBar;
