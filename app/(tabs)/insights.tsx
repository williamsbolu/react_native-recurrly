import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// The only reason why we have to do this is because the safeareaview from the "react-native-safe-area-context" is a third party component and nativewind needs the styled wrapper to enable classname support.
const SafeAreaView = styled(RNSafeAreaView);

const Insights = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>insights</Text>
    </SafeAreaView>
  );
};

export default Insights;
