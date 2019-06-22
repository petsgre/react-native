
class Details extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }
  
  const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Details: Details
    },
    {
      initialRouteName: "Home"
    }
  );