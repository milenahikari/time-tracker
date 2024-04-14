import Clock from '~/src/assets/icons/clock.svg';
import FilledClock from '~/src/assets/icons/filled-clock.svg';
import Plus from '~/src/assets/icons/plus.svg';
import FilledPlus from '~/src/assets/icons/filled-plus.svg';
import Graphic from '~/src/assets/icons/graphic.svg';
import FilledGraphic from '~/src/assets/icons/filled-graphic.svg';

type TabBarButtonProps = {
  tab: 'index' | 'addNewTimer' | 'myProductivity'
  isFocused: boolean;
}

const icons = {
  index: <Clock width={24} height={24}/>,
  indexFocused: <FilledClock width={28} height={28}/>,
  addNewTimer: <Plus width={32} height={32}/>,
  addNewTimerFocused: <FilledPlus width={44} height={44}/>,
  myProductivity: <Graphic width={24} height={24}/>,
  myProductivityFocused: <FilledGraphic width={28} height={28}/>
}

export function TabBarButton({tab, isFocused}: TabBarButtonProps) {
  return isFocused ? icons[`${tab}Focused`] : icons[tab]
}