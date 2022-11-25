import { NewsCard } from 'components/news-card';
import React from 'react';

export function News() {
  return (
    <div>
      <NewsCard
        firstName="Анзор"
        lastName="Хамхоев"
        createdAt="3 часа назад"
        title="Мероприятие СтудВесна"
        description="Всем добрый день! В начале октября в актовом зале города Магас пройдет мероприятие СтудВесна. Потребуются несколько волонтёров для установки оборудования"
      />
    </div>
  );
}
