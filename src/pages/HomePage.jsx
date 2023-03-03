import s from './Home.module.scss';

export default function HomePage() {
  return (
    <div className={s.section}>
      <p className={s.text}>
        This application where you can save your contacts and add new ones
      </p>
    </div>
  );
}
