import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// The only reason why we have to do this is because the safeareaview from the "react-native-safe-area-context" is a third party component and nativewind needs the styled wrapper to enable classname support.
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-bold font-sans-extrabold">Home!</Text>
      <Text className="text-7xl font-bold">Home!</Text>

      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary font-sans-bold text-white p-4"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary font-sans-bold text-white p-4"
      >
        Go to Sign in
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary font-sans-bold text-white p-4"
      >
        Go to Sign Up
      </Link>

      <Link
        href="/subscriptions/spotify"
        className="mt-4 rounded bg-primary font-sans-bold text-white p-4"
      >
        Spotify Details
      </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
        className="mt-4 rounded bg-primary font-sans-bold text-white p-4"
      >
        Claude Details
      </Link>
    </SafeAreaView>
  );
}
