import { Text } from 'react-native';

import GlobalContainer from '~/src/components/GlobalContainer';

export default function addNewTimer() {
  return (
    <GlobalContainer>
      <Text className='font-rubikMedium text-lg color-gray-50'>addNewTimer</Text>
    </GlobalContainer>
  );
}