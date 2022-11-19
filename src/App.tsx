import { useState } from 'react';
import { Button, ButtonSize, ButtonVariant } from 'components/button';
import { EventCard } from 'components/event-card';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  function onButtonClick() {
    setIsLoading(true);
    setTimeout(setIsLoading, 2000, false);
  }

  return (
    <div className="app">
      <Button
        onClick={onButtonClick}
        isLoading={isLoading}
        size={ButtonSize.Large}
        variant={ButtonVariant.Primary}>
        Cоздать аккаунт
      </Button>
      <Button
        onClick={onButtonClick}
        isLoading={isLoading}
        size={ButtonSize.Large}
        variant={ButtonVariant.Attention}>
        Cоздать аккаунт
      </Button>
      <Button
        onClick={onButtonClick}
        isLoading={isLoading}
        size={ButtonSize.Large}
        variant={ButtonVariant.Outlined}>
        Cоздать аккаунт
      </Button>
      <Button
        onClick={onButtonClick}
        isLoading={isLoading}
        size={ButtonSize.Large}
        variant={ButtonVariant.Secondary}>
        Cоздать аккаунт
      </Button>

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
