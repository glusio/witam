import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, Container, Box } from '@mui/material';

function App() {
  const availableSettings = {
    start: {
      yt: 'https://www.youtube.com/embed/neTU0VjL__c?rel=0&controls=0',
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
  const [setting, setSetting] = useState(availableSettings['start']);
  const [areControlsVisible, setAreControlsVisible] = useState();

  useEffect(() => {
    setAreControlsVisible(false);
    setTimeout(() => setAreControlsVisible(true), 5000);
  }, [setting]);

  return (
    <div className="App">
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
      {setting.controls && areControlsVisible && (
        <Box sx={{ '& button': { m: 1 } }}>
          <div className="cta">To co teraz?</div>
          {setting.controls.map((control) => (
            <div>
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
