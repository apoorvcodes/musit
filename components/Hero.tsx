import { Text, View, StyleSheet } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Hero() {
  return (
    <StyledView>
      <StyledText className="flex-1 justify-center items-center">Hi</StyledText>
    </StyledView>
  );
}
