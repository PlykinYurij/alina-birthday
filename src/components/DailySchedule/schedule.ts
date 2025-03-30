type ScheduleItem = {
  time: string;
  title: string;
  description: string
}

type Section = {
  section: string
}

export const schedule: (ScheduleItem | Section)[] = [
  {
    time: '15:00',
    title: 'Welcome',
    description: 'Заезд всех гостей, расположение в комнатах, притирка'
  },
  {
    time: '15:30',
    title: 'Приготовление шашлыка',
    description: 'Аперитив, продолжение притирки'
  },
  {
    time: '17:00',
    title: 'Праздничная программа',
    description: 'Конкурсы, будет время покушать и покурить'
  },
  {
    time: '20:00',
    title: 'Свободное время',
    description: 'Для подготовки к водным процедурам'
  },
  {
    time: '20:30',
    title: 'Сауна и бассейн',
    description: 'Не забываем взять купальные принадлежности'
  },
  {
    time: '00:00',
    title: 'Танцы и караоке',
    description: 'Отдыхаем и веселимся'
  },
  {
    section: '9 мая'
  },
  {
    time: '10:30',
    title: 'Завтрак',
    description: 'Начинаем день с вкусных сосисок'
  },
  {
    time: '12:00',
    title: 'Выезд',
    description: 'Собираемся и отправляемся домой'
  }
]