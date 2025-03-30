import {
  StartCard,
  InvitationCard,
  HouseCard,
  DatetimeCard,
  PlaceCard,
  DressCodeCard,
  PhotoGrid,
  FinalCard,
  WishesCard,
  Contacts, DailySchedule,
} from './components';
import styles from './App.module.scss';
import Audio from './components/Audio/Audio.tsx';

function App() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <StartCard />
        <div className={styles.description}>
          <InvitationCard />
          <HouseCard />
          <DatetimeCard />
        </div>
        <DailySchedule />
        <PlaceCard />
        <DressCodeCard />
        <PhotoGrid />
        <WishesCard />
        <Contacts />
        <FinalCard />
      </div>
    </main>
  );
}

export default App;
