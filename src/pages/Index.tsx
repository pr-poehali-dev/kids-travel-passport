import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const travelPrograms = [
  {
    id: 1,
    title: 'Путешествие в Европу',
    location: 'Франция, Италия, Испания',
    stickers: 5,
    description: 'Исследуй древние замки и музеи',
    icon: 'Castle',
    color: 'bg-travel-blue'
  },
  {
    id: 2,
    title: 'Азиатские приключения',
    location: 'Япония, Китай, Таиланд',
    stickers: 4,
    description: 'Открой тайны восточной культуры',
    icon: 'Palmtree',
    color: 'bg-travel-green'
  },
  {
    id: 3,
    title: 'Америка зовёт',
    location: 'США, Канада, Мексика',
    stickers: 6,
    description: 'Покори небоскрёбы и каньоны',
    icon: 'Mountain',
    color: 'bg-travel-orange'
  },
  {
    id: 4,
    title: 'Африканское сафари',
    location: 'Кения, ЮАР, Марокко',
    stickers: 5,
    description: 'Встреться с дикими животными',
    icon: 'TreePalm',
    color: 'bg-travel-peach'
  }
];

const collectedStickers = [
  { id: 1, name: 'Эйфелева башня', program: 'Европа', icon: '🗼', date: '15.11.2024' },
  { id: 2, name: 'Колизей', program: 'Европа', icon: '🏛️', date: '20.11.2024' },
  { id: 3, name: 'Фудзияма', program: 'Азия', icon: '🗻', date: '25.11.2024' },
  { id: 4, name: 'Статуя Свободы', program: 'Америка', icon: '🗽', date: '01.12.2024' },
  { id: 5, name: 'Саванна', program: 'Африка', icon: '🦁', date: '03.12.2024' },
];

const prizes = [
  { id: 1, name: 'Значок путешественника', cost: 5, icon: 'Award', available: true },
  { id: 2, name: 'Блокнот-дневник', cost: 8, icon: 'BookOpen', available: true },
  { id: 3, name: 'Набор карандашей', cost: 10, icon: 'Pencil', available: false },
  { id: 4, name: 'Рюкзак исследователя', cost: 15, icon: 'Backpack', available: false },
  { id: 5, name: 'Компас настоящий', cost: 20, icon: 'Compass', available: false },
  { id: 6, name: 'Глобус интерактивный', cost: 30, icon: 'Globe', available: false },
];

export default function Index() {
  const [totalStickers] = useState(collectedStickers.length);
  const maxStickers = 50;
  const progress = (totalStickers / maxStickers) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-lightBlue via-white to-travel-lightBlue">
      <div 
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `url('https://cdn.poehali.dev/projects/bf981ede-5eee-4aba-86cc-3029a56f1ad2/files/be12a5bb-13ec-41de-a3a6-a605e2b78dc7.jpg')`,
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
            Паспорт путешественника
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-travel-peach drop-shadow-lg">
            The CALENDAR Kids
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 animate-scale-in">
          <Card className="bg-white/95 backdrop-blur shadow-xl border-2 border-travel-blue">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-travel-blue flex items-center gap-2">
                    <Icon name="Award" className="text-travel-orange" size={28} />
                    Твой прогресс
                  </CardTitle>
                  <CardDescription className="text-lg mt-1">
                    Собрано наклеек: <span className="font-bold text-travel-blue">{totalStickers}</span> из {maxStickers}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-travel-green">{totalStickers}</div>
                  <div className="text-sm text-muted-foreground">наклеек</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-4" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="programs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-white border-2 border-travel-lightBlue">
            <TabsTrigger 
              value="programs" 
              className="text-base py-3 data-[state=active]:bg-travel-blue data-[state=active]:text-white"
            >
              <Icon name="Map" className="mr-2" size={20} />
              Программы
            </TabsTrigger>
            <TabsTrigger 
              value="stickers" 
              className="text-base py-3 data-[state=active]:bg-travel-green data-[state=active]:text-white"
            >
              <Icon name="Sticker" className="mr-2" size={20} />
              Наклейки
            </TabsTrigger>
            <TabsTrigger 
              value="prizes" 
              className="text-base py-3 data-[state=active]:bg-travel-orange data-[state=active]:text-white"
            >
              <Icon name="Gift" className="mr-2" size={20} />
              Призы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="programs" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {travelPrograms.map((program, index) => (
                <Card 
                  key={program.id} 
                  className="hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in border-2 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className={`${program.color} text-white rounded-t-lg`}>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Icon name={program.icon as any} size={32} />
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-white/90 text-base">
                      {program.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-lg mb-4">{program.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-base px-3 py-1">
                        <Icon name="Star" className="mr-1" size={16} />
                        {program.stickers} наклеек
                      </Badge>
                      <Icon name="ArrowRight" className="text-travel-blue" size={24} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stickers" className="space-y-4">
            <Card className="border-2 border-travel-green">
              <CardHeader>
                <CardTitle className="text-2xl text-travel-green flex items-center gap-2">
                  <Icon name="Album" size={28} />
                  Моя коллекция наклеек
                </CardTitle>
                <CardDescription className="text-base">
                  Каждая наклейка — это твоё приключение!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {collectedStickers.map((sticker, index) => (
                    <div 
                      key={sticker.id} 
                      className="bg-gradient-to-br from-travel-lightBlue to-white p-4 rounded-xl border-2 border-travel-blue hover:scale-110 transition-transform duration-300 cursor-pointer animate-scale-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="text-5xl text-center mb-2">{sticker.icon}</div>
                      <p className="text-sm font-semibold text-center mb-1">{sticker.name}</p>
                      <p className="text-xs text-center text-muted-foreground">{sticker.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prizes" className="space-y-4">
            <Card className="border-2 border-travel-orange">
              <CardHeader>
                <CardTitle className="text-2xl text-travel-orange flex items-center gap-2">
                  <Icon name="Trophy" size={28} />
                  Каталог призов
                </CardTitle>
                <CardDescription className="text-base">
                  Обменивай наклейки на классные подарки!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {prizes.map((prize, index) => (
                    <Card 
                      key={prize.id}
                      className={`transition-all duration-300 ${
                        prize.available 
                          ? 'hover:shadow-xl hover:scale-105 cursor-pointer border-travel-green border-2' 
                          : 'opacity-60 border-gray-300'
                      } animate-fade-in`}
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <CardHeader className="text-center">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-travel-peach to-travel-orange rounded-full flex items-center justify-center mb-3">
                          <Icon name={prize.icon as any} size={40} className="text-white" />
                        </div>
                        <CardTitle className="text-lg">{prize.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <Badge 
                          variant={prize.available ? "default" : "secondary"} 
                          className="text-base px-4 py-1"
                        >
                          {prize.cost} наклеек
                        </Badge>
                        {prize.available && (
                          <p className="text-sm text-travel-green font-semibold mt-3">
                            ✓ Доступно для обмена!
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="fixed bottom-6 right-6 animate-float">
        <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
          <Icon name="Plane" size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
}
