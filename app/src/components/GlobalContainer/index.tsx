import { View } from 'react-native';

type GlobalContainerProps = {
  children: React.ReactNode
}

export default function GlobalContainer({children}: GlobalContainerProps) {
  return (
    <View className="flex-1 px-8 py-24 bg-blue-950">
      {children}
    </View>
  );
}