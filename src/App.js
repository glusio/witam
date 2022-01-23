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
            <div>Włącz dźwięk,</div>
            <div>po chwili pod każdym filmikiem zobaczysz przyciski.</div>
            <div>Wybieraj, co robimy dalej!</div>
            <span>P.S. Najlepiej przeglądać na telefonie :)</span>
          </>
        );
      case 'outro':
        return (
          <>
            <div>To już koniec!</div>
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
