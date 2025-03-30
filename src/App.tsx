import {
  StartCard,
  InvitationCard,
  HouseCard,
  DatetimeCard,
  PlaceCard,
  DressCodeCard,
  PhotoGrid,
  Question,
  FinalCard, WishesCard, Contacts,
} from './components';
import styles from './App.module.scss';

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
