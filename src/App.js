import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, Container, Box } from '@mui/material';
import glusio from './glusio.png';

function App() {
  const availableSettings = {
    intro: {
      text: 'intro',
      controls: [{ setting: 'start', text: 'Zaczynajmy!' }],
    },
    outro: {
      text: 'outro',
    },
    start: {
      yt: 'https://www.youtube.com/embed/PPIaF7p7t8o?rel=0&controls=0',
      controls: [
        { setting: 'na-plaze', text: 'Na plażę' },
        { setting: 'do-parku', text: 'Do parku' },
      ],
    },
    'do-parku': {
      yt: 'https://www.youtube.com/embed/NxtddbuXb18?rel=0&controls=0',
      controls: [
        { setting: 'chodzmy-dalej', text: 'Chodźmy dalej' },
        { setting: 'dodaj-2-pieska', text: 'Dodaj 2 pieska' },
      ],
    },
    'chodzmy-dalej': {
      yt: 'https://www.youtube.com/embed/CxCJ_AefTHM?rel=0&controls=0',
      controls: [{ setting: 'zdejmij-blokade', text: 'Zdejmij blokadę' }],
    },
    'dodaj-2-pieska': {
      yt: 'https://www.youtube.com/embed/78OnWgrMDZs?rel=0&controls=0',
      controls: [{ setting: 'chodzmy-dalej-2', text: 'Chodźmy dalej' }],
    },
    'zdejmij-blokade': {
      yt: 'https://www.youtube.com/embed/9HHlI7_E7qM?rel=0&controls=0',
      controls: [
        { setting: 'niespodzianka-1', text: 'Niespodzianka nr 1' },
        { setting: 'niespodzianka-2', text: 'Niespodzianka nr 2' },
      ],
    },
    'chodzmy-dalej-2': {
      yt: 'https://www.youtube.com/embed/PJd6WR9Jbk8?rel=0&controls=0',
      controls: [
        { setting: 'niespodzianka-1', text: 'Niespodzianka nr 1' },
        { setting: 'niespodzianka-2', text: 'Niespodzianka nr 2' },
      ],
    },
    'niespodzianka-1': {
      yt: 'https://www.youtube.com/embed/2YA22ASaeB8?rel=0&controls=0',
      controls: [{ setting: 'ok-wracajmy', text: 'Ok, wracajmy' }],
    },
    'niespodzianka-2': {
      yt: 'https://www.youtube.com/embed/HaQe5QqMoQw?rel=0&controls=0',
      controls: [{ setting: 'ok-wracajmy', text: 'Ok, wracajmy' }],
    },
    'ok-wracajmy': {
      yt: 'https://www.youtube.com/embed/RfKdWHLHoTU?rel=0&controls=0',
      controls: [{ setting: 'ale-to-nie-koniec', text: 'Ale to nie koniec!' }],
    },
    'na-plaze': {
      yt: 'https://www.youtube.com/embed/iMxi7vF4sgY?rel=0&controls=0',
      controls: [
        { setting: 'pobawmy-sie', text: 'Pobawmy się' },
        { setting: 'na-wybieg', text: 'Na wybieg, bo pusty' },
      ],
    },
    'pobawmy-sie': {
      yt: 'https://www.youtube.com/embed/pQp5GZGVAIo?rel=0&controls=0',
      controls: [
        { setting: 'na-pizze', text: 'Chodźmy na pizze' },
        { setting: 'gryzaka', text: 'Kup mi gryzaka' },
      ],
    },
    'na-wybieg': {
      yt: 'https://www.youtube.com/embed/NoxzJqjH3-s?rel=0&controls=0',
      controls: [
        { setting: 'pocwiczmy', text: 'Poćwiczmy' },
        { setting: 'gryzaka', text: 'Kup mi gryzaka' },
      ],
    },
    gryzaka: {
      yt: 'https://www.youtube.com/embed/wroCQgrBwOQ?rel=0&controls=0',
      controls: [{ setting: 'ok-wracajmy', text: 'Ok, wracajmy' }],
    },
    'na-pizze': {
      yt: 'https://www.youtube.com/embed/3qUMPFdInpY?rel=0&controls=0',
      controls: [{ setting: 'ok-wracajmy', text: 'Ok, wracajmy' }],
    },
    pocwiczmy: {
      yt: 'https://www.youtube.com/embed/CcJLgEjriK8?rel=0&controls=0',
      controls: [{ setting: 'ok-wracajmy', text: 'Ok, wracajmy' }],
    },
    'ale-to-nie-koniec': {
      yt: 'https://www.youtube.com/embed/btXneBMNJbI?rel=0&controls=0',
      controls: [
        { setting: 'obiad', text: 'Czas na obiad' },
        { setting: 'sztuczki', text: 'A może sztuczki' },
      ],
    },
    obiad: {
      yt: 'https://www.youtube.com/embed/Su_BNJ9nRUk?rel=0&controls=0',
      controls: [
        { setting: 'sprzatanie', text: 'Sprzątanie' },
        { setting: 'zabawa-rybka', text: 'Zabawa z rybką' },
      ],
    },
    sztuczki: {
      yt: 'https://www.youtube.com/embed/CIyfAYBsdzk?rel=0&controls=0',
      controls: [
        { setting: 'mizianie', text: 'Mizianie' },
        { setting: 'zabawa-stary', text: 'Zabawa ze starym' },
      ],
    },
    sprzatanie: {
      yt: 'https://www.youtube.com/embed/CS1ZJFEwK4s?rel=0&controls=0',
      controls: [
        { setting: 'troche-magii', text: 'Trochę magii' },
        { setting: 'serial', text: 'Czas na serial' },
      ],
    },
    'zabawa-rybka': {
      yt: 'https://www.youtube.com/embed/ua3Anjl0zfI?rel=0&controls=0',
      controls: [
        { setting: 'troche-magii', text: 'Trochę magii' },
        { setting: 'serial', text: 'Czas na serial' },
      ],
    },
    mizianie: {
      yt: 'https://www.youtube.com/embed/GVz_6g03g2Y?rel=0&controls=0',
      controls: [
        { setting: 'obiad', text: 'Czas na obiad' },
        { setting: 'serial', text: 'Czas na serial' },
      ],
    },
    'zabawa-stary': {
      yt: 'https://www.youtube.com/embed/QFkCZEIzxXg?rel=0&controls=0',
      controls: [
        { setting: 'obiad', text: 'Czas na obiad' },
        { setting: 'serial', text: 'Czas na serial' },
      ],
    },
    'troche-magii': {
      yt: 'https://www.youtube.com/embed/dCjqjanSAu0?rel=0&controls=0',
      controls: [
        { setting: 'szocik', text: 'Szocik na zdrowie' },
        { setting: 'spanko', text: 'Czas na spanko' },
      ],
    },
    serial: {
      yt: 'https://www.youtube.com/embed/aOkipifTd_Y?rel=0&controls=0',
      controls: [
        { setting: 'szocik', text: 'Szocik na zdrowie' },
        { setting: 'spanko', text: 'Czas na spanko' },
      ],
    },
    szocik: {
      yt: 'https://www.youtube.com/embed/fc4_tXBCBqM?rel=0&controls=0',
      controls: [{ setting: 'poscielmy', text: 'Pościelmy!' }],
    },
    spanko: {
      yt: 'https://www.youtube.com/embed/xryDdE_oGiU?rel=0&controls=0',
      controls: [{ setting: 'poscielmy', text: 'Pościelmy jeszcze raz' }],
    },
    poscielmy: {
      yt: 'https://www.youtube.com/embed/WSA09FMD68w?rel=0&controls=0',
      controls: [{ setting: 'outro', text: 'No co?' }],
    },
  };
  const [setting, setSetting] = useState(availableSettings['intro']);
  const [areControlsVisible, setAreControlsVisible] = useState(true);

  useEffect(() => {
    const delayControlsVisibility = () => {
      setAreControlsVisible(false);
      setTimeout(() => setAreControlsVisible(true), 5000);
    };

    setting.yt && delayControlsVisibility();
  }, [setting]);

  const renderText = (setting) => {
    switch (setting) {
      case 'intro':
        return (
          <>
            <div>Cieszę się, że dorzuciłeś się do mojej skarbonki!</div>
            <img src={glusio} alt="Gluten"></img>
            <div>Włącz dźwięk, po chwili pod każdym filmikiem zobaczysz przyciski.</div>
            <div>Wybieraj, co robimy dalej!</div>
            <span>P.S. Najlepiej przeglądać na telefonie :)</span>
          </>
        );
      case 'outro':
        return (
          <>
            <div>Jeśli Ci się podobało to daj znać innym o mojej zbiórce.</div>
            <img src={glusio} alt="Gluten"></img>
            <div>Więcej mojego codziennego życia na instagramie!</div>
            <Button variant="contained" href="https://www.instagram.com/gluten_z_biszkopta/">
              Instagram
            </Button>
            <div>Pamiętaj, możesz też wylicytować spacer ze mną w offline</div>
            <Button variant="contained" href="https://allegro.pl/oferta/11731520853">
              Spacerek
            </Button>
          </>
        );
      default:
        return areControlsVisible && <div>To co teraz?</div>;
    }
  };

  return (
    <div className="App">
      {setting.yt && (
        <Container className="video-iframe">
          <iframe
            title="Gluteo"
            width="330"
            height="590"
            src={setting['yt']}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Container>
      )}
      <Box className="text">{renderText(setting.text)}</Box>
      {setting.controls && areControlsVisible && (
        <Box sx={{ '& button': { m: 1 } }} className="cta">
          {setting.controls.map((control) => (
            <div key={control.setting}>
              <Button variant="contained" onClick={() => setSetting(availableSettings[control.setting])}>
                {control.text}
              </Button>
            </div>
          ))}
        </Box>
      )}
    </div>
  );
}

export default App;
