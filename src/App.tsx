import { useState } from 'react';
import { Button, ButtonSize, ButtonVariant } from 'components/button';
import { EventCard } from 'components/event-card';
import { Modal } from 'components/modal';
import { Card } from 'components/card';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  function onButtonClick() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalShown(true);
    }, 2000);
  }

  return (
    <div className="app">
      <Button
        onClick={onButtonClick}
        isLoading={isLoading}
        size={ButtonSize.Medium}
        variant={ButtonVariant.Primary}>
        Открыть модалку
      </Button>
      <Modal isShown={isModalShown} onClose={() => setIsModalShown(false)}>
        контент
      </Modal>
      <EventCard
        id="555"
        title="День учителя"
        date="5 октября"
        location="Магас, главный корпус"
        seatsCountOccupied={10}
        seatsCountTotal={20}
        description="В ФизМат корпусе будет проходит конференция юных программистов. Будут представители из
        МФТИ, ВШЭ и МГУ"
      />
    </div>
  );
}

export default App;
